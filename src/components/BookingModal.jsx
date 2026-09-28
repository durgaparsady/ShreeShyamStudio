import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, presetPackage, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding (2-3 Days)',
    eventDate: '',
    location: '',
    packagePreset: presetPackage || 'The Royal Cinema Package (₹2,85,000)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Launch celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#f5df9b', '#ffffff', '#e5c07b']
    });

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      onShowToast(
        `Inquiry Received, ${formData.name}!`,
        `We've logged your date (${formData.eventDate || 'Upcoming'}). Our creative director will call & WhatsApp you on ${formData.phone} within 12 hours.`
      );
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: 'Wedding (2-3 Days)',
        eventDate: '',
        location: '',
        packagePreset: '',
        message: ''
      });
    }, 1200);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-modal active" role="dialog" aria-modal="true">
      <div className="booking-backdrop" onClick={onClose} />

      <div className="booking-dialog">
        <button className="booking-close" onClick={onClose} aria-label="Close modal">
          <X size={26} />
        </button>

        <div className="booking-modal-header">
          <div className="section-tag">RESERVE YOUR DATE</div>
          <h3 className="modal-title">
            Check Date &amp; Studio <span className="text-gold">Availability</span>
          </h3>
          <p className="modal-sub">
            Tell us about your celebration. Our creative director personally reviews every inquiry within 12 hours.
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
                <option value="Wedding (2-3 Days)">Grand Wedding (2-3 Days)</option>
                <option value="Destination Wedding">Destination Wedding (Palace / Beach)</option>
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
                placeholder="e.g. Udaipur, Jaipur, Mumbai, Goa"
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
              <span>{isSubmitting ? 'Securing Your Reservation...' : 'Send Reservation Request'}</span>
              <ArrowRight size={18} className="btn-arrow" />
            </button>
          </div>

          <div className="form-direct-wa">
            <span>Or connect with us instantly:</span>
            <a 
              href="https://wa.me/919644746770?text=Hi%20Shree%20Shyam%20Studio,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="direct-wa-link"
            >
              Chat on WhatsApp (+91 96447 46770) →
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
