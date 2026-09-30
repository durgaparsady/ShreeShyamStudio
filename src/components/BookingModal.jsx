import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { 
  STUDIO_CONFIG, 
  getWhatsAppLink, 
  getBookingWhatsAppLink, 
  getBookingMailtoLink,
  sendTelegramNotification 
} from '../contactConfig';
import WhatsAppIcon from './WhatsAppIcon';

export default function BookingModal({ isOpen, onClose, presetPackage, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Grand Wedding (2-3 Days)',
    eventDate: '',
    location: '',
    packagePreset: presetPackage || 'The Royal Cinema Package (₹2,85,000)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError('');

    const currentBooking = { ...formData };
    try {
      const templateParams = {
        name: currentBooking.name,
        phone: currentBooking.phone,
        email: currentBooking.email,
        event_type: currentBooking.eventType,
        event_date: currentBooking.eventDate || 'To be decided',
        location: currentBooking.location || 'Indore / Destination',
        selected_package: currentBooking.packagePreset || 'Custom Package',
        message: currentBooking.message || 'No additional note',
        subject: `New Wedding Booking: ${currentBooking.name} (${currentBooking.eventType})`,
        from_name: STUDIO_CONFIG.brandName,
        to_email: STUDIO_CONFIG.email,
        reply_to: currentBooking.email
      };

      const hasEmailJsConfig = STUDIO_CONFIG.emailJsServiceId
        && STUDIO_CONFIG.emailJsTemplateId
        && STUDIO_CONFIG.emailJsPublicKey;

      const sendWithWeb3Forms = async () => {
        if (!STUDIO_CONFIG.web3FormsEndpoint || !STUDIO_CONFIG.web3FormsAccessKey) {
          throw new Error('Backup email service is not configured.');
        }

        const requestData = new FormData();
        requestData.append('access_key', STUDIO_CONFIG.web3FormsAccessKey);
        Object.entries(templateParams).forEach(([key, value]) => requestData.append(key, value));
        requestData.append('botcheck', '');

        const response = await fetch(STUDIO_CONFIG.web3FormsEndpoint, {
          method: 'POST',
          body: requestData
        });
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || `Email service returned HTTP ${response.status}.`);
        }
      };
      if (hasEmailJsConfig) {
        try {
          await emailjs.send(
            STUDIO_CONFIG.emailJsServiceId,
            STUDIO_CONFIG.emailJsTemplateId,
            templateParams,
            STUDIO_CONFIG.emailJsPublicKey
          );
        } catch (emailJsError) {
          console.warn('EmailJS failed; trying Web3Forms backup:', emailJsError);
          await sendWithWeb3Forms();
        }
      } else {
        await sendWithWeb3Forms();
      }

      setLastSubmittedData(currentBooking);
      setIsSuccess(true);
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f5df9b', '#ffffff', '#25d366', '#e5c07b']
      });
      void sendTelegramNotification(currentBooking);
      onShowToast(
        `Inquiry Sent, ${currentBooking.name}!`,
        `Your request was accepted and sent to ${STUDIO_CONFIG.email}.`
      );
    } catch (error) {
      console.error('Booking form submission failed:', error);
      setSubmissionError(
        `${error.message} Please try again, or use WhatsApp / email fallback below.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: 'Grand Wedding (2-3 Days)',
      eventDate: '',
      location: '',
      packagePreset: presetPackage || 'The Royal Cinema Package (₹2,85,000)',
      message: ''
    });
    setIsSuccess(false);
    setSubmissionError('');
    onClose();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-modal active" role="dialog" aria-modal="true">
      <div className="booking-backdrop" onClick={onClose} />

      <div className="booking-dialog">
        <button className="booking-close" onClick={onClose} aria-label="Close modal">
          <X size={26} />
        </button>

        {isSuccess ? (
          /* ================= SUCCESS STATE: EMAIL & TELEGRAM CONFIRMATION ================= */
          <div className="booking-success-view">
            <div className="success-badge-icon">
              <CheckCircle2 size={54} color="#16a34a" />
            </div>

            <h3 className="modal-title text-center">
              Reservation Request <span className="text-gold">Received!</span>
            </h3>

            <p className="success-desc text-center">
              Thank you, <strong>{lastSubmittedData?.name}</strong>! Your event details have been delivered directly to our official inbox. Lead artist <strong>{STUDIO_CONFIG.founder}</strong> has been notified.
            </p>

            <div className="dispatch-summary-box">
              <div className="summary-row">
                <span className="summary-label">Delivered To Email:</span>
                <strong className="summary-val text-gold">{STUDIO_CONFIG.email}</strong>
              </div>
              <div className="summary-row">
                <span className="summary-label">Instant Notification:</span>
                <strong className="summary-val text-wa">Sent to Studio Phone</strong>
              </div>
              <div className="summary-row">
                <span className="summary-label">Target Date:</span>
                <strong className="summary-val">{lastSubmittedData?.eventDate || 'Upcoming'}</strong>
              </div>
              <div className="summary-row">
                <span className="summary-label">Venue / City:</span>
                <strong className="summary-val">{lastSubmittedData?.location || 'Indore'}</strong>
              </div>
            </div>

            <div className="success-action-group">
              {/* Primary Close Button */}
              <button 
                type="button" 
                className="btn btn-gold btn-block btn-lg"
                onClick={handleResetAndClose}
              >
                <span>Back to Website</span>
              </button>

              {/* Optional direct WhatsApp if client desires */}
              <a
                href={lastSubmittedData ? getBookingWhatsAppLink(lastSubmittedData) : getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-block"
              >
                <WhatsAppIcon size={18} />
                <span>Need immediate response? Chat on WhatsApp</span>
              </a>

              {/* Direct Mailto Fallback */}
              {lastSubmittedData && (
                <a
                  href={getBookingMailtoLink(lastSubmittedData)}
                  className="btn btn-outline btn-block"
                >
                  <Mail size={16} />
                  <span>Open &amp; Send in Email App ({STUDIO_CONFIG.email})</span>
                </a>
              )}
            </div>
          </div>
        ) : (
          /* ================= FORM ENTRY STATE ================= */
          <>
            <div className="booking-modal-header">
              <div className="section-tag">RESERVE YOUR DATE</div>
              <h3 className="modal-title">
                Check Date &amp; Studio <span className="text-gold">Availability</span>
              </h3>
              <p className="modal-sub">
                Your request goes directly to lead artist <strong>{STUDIO_CONFIG.founder}</strong> via Email (<strong>{STUDIO_CONFIG.email}</strong>) and WhatsApp.
              </p>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="clientName">Your Full Name *</label>
                  <input 
                    type="text" 
                    id="clientName"
                    required 
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="clientPhone">WhatsApp / Mobile Number *</label>
                  <input 
                    type="tel" 
                    id="clientPhone"
                    required 
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="clientEmail">Email Address *</label>
                  <input 
                    type="email" 
                    id="clientEmail"
                    required 
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventType">Celebration / Event Type *</label>
                  <select 
                    id="eventType"
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  >
                    <option value="Grand Wedding (2-3 Days)">Grand Wedding (2-3 Days)</option>
                    <option value="Destination Wedding">Destination Wedding (Palace / Beach)</option>
                    <option value="Indore Wedding (1-2 Days)">Indore Wedding (1-2 Days)</option>
                    <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                    <option value="Single Day Ceremony">Single Day Ceremony / Reception</option>
                    <option value="Corporate / Gala Event">Corporate / Award Gala</option>
                    <option value="Fashion / Editorial Shoot">Fashion / Editorial Shoot</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventDate">Approximate Event Date *</label>
                  <input 
                    type="date" 
                    id="eventDate"
                    required 
                    min={today}
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventLocation">Event City / Venue *</label>
                  <input 
                    type="text" 
                    id="eventLocation"
                    required 
                    placeholder="e.g. Indore, Udaipur, Jaipur, Goa"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="selectedPackage">Selected Package / Custom Estimate</label>
                <input 
                  type="text" 
                  id="selectedPackage"
                  value={formData.packagePreset}
                  readOnly 
                  className="readonly-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="clientMessage">Tell Us About Your Vision &amp; Requirements</label>
                <textarea 
                  id="clientMessage"
                  rows={3} 
                  placeholder="Number of guests, venue details, must-have moments, music taste..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="form-submit-row">
                <button 
                  type="submit" 
                  className="btn btn-gold btn-block btn-lg"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Dispatching to Email & WhatsApp...' : 'Send Reservation Request'}</span>
                  <ArrowRight size={18} className="btn-arrow" />
                </button>
              </div>

              {submissionError && (
                <div className="form-error" role="alert">
                  <strong>Request send nahi hua.</strong> {submissionError}
                  <br />
                  <a href={getBookingMailtoLink(formData)}>Email app open karke request send karein</a>
                  {' '}ya{' '}
                  <a href={getBookingWhatsAppLink(formData)} target="_blank" rel="noopener noreferrer">WhatsApp par bhejein</a>.
                </div>
              )}

              <div className="form-direct-wa">
                <span>Direct consultation with {STUDIO_CONFIG.founder}:</span>
                <a 
                  href={getWhatsAppLink('Hi Wedding Pictures by Pratham, I would like to inquire about booking an event.')} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="direct-wa-link"
                >
                  Chat on WhatsApp ({STUDIO_CONFIG.phone}) →
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
