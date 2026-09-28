import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../contactConfig';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onOpenBooking: _onOpenBooking }) {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="brand-name">SHREE SHYAM</span>
            <span className="brand-sub">STUDIO</span>
          </div>
          <p className="footer-bio">
            Premier luxury wedding cinema and fine-art photography studio. Dedicated to preserving authentic human emotion in cinematic permanence.
          </p>
          
          <div className="footer-socials">
            {/* Instagram Link */}
            <a 
              href={STUDIO_CONFIG.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon insta-icon" 
              aria-label="Instagram Profile"
              title="Open Instagram"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* WhatsApp Link */}
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon wa-icon" 
              aria-label="WhatsApp Chat"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>

            {/* Direct Phone Call */}
            <a 
              href={`tel:${STUDIO_CONFIG.phoneClean}`} 
              className="social-icon phone-icon" 
              aria-label="Call Studio"
              title="Call Us Directly"
            >
              <Phone size={18} />
            </a>

            {/* Direct Email */}
            <a 
              href={`mailto:${STUDIO_CONFIG.email}`} 
              className="social-icon mail-icon" 
              aria-label="Send Email"
              title="Send Us An Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Portfolio Links */}
        <div className="footer-col">
          <h4 className="footer-title">Portfolio Categories</h4>
          <ul className="footer-links">
            <li><a href="#portfolio">Royal Palace Weddings</a></li>
            <li><a href="#portfolio">Haldi &amp; Sangeet Celebrations</a></li>
            <li><a href="#portfolio">Destination Pre-Weddings</a></li>
            <li><a href="#portfolio">Editorial Bridal Portraits</a></li>
            <li><a href="#portfolio">Corporate Galas &amp; Summits</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-title">Studio Services</h4>
          <ul className="footer-links">
            <li><a href="#showreel">4K Cinema Feature Films</a></li>
            <li><a href="#gear">Aerial Drone Cinematography</a></li>
            <li><a href="#packages">Handmade Italian Albums</a></li>
            <li><a href="#retouch">Fine Art Color Retouching</a></li>
            <li><a href="#calculator">Custom Wedding Packages</a></li>
          </ul>
        </div>

        {/* Direct Studio Reach & Headquarters */}
        <div className="footer-col">
          <h4 className="footer-title">Direct Studio Reach</h4>
          <div className="footer-contact">
            {/* Indore Studio */}
            <p className="contact-line">
              <MapPin size={16} className="contact-icon text-gold" />
              <span><strong>Indore:</strong> {STUDIO_CONFIG.addressIndore}</span>
            </p> 

            {/* Click to call */}
            <p className="contact-line">
              <Phone size={16} className="contact-icon text-gold" />
              <a href={`tel:${STUDIO_CONFIG.phoneClean}`} className="contact-clickable">
                {STUDIO_CONFIG.phone} <small>(Tap to Call)</small>
              </a>
            </p>

            {/* Click to WhatsApp */}
            <p className="contact-line">
              <WhatsAppIcon size={16} className="contact-icon text-wa" />
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="contact-clickable text-wa">
                WhatsApp Chat <small>(Instant Reply)</small>
              </a>
            </p>

            {/* Click to email */}
            <p className="contact-line">
              <Mail size={16} className="contact-icon" />
              <a href={`mailto:${STUDIO_CONFIG.email}`} className="contact-clickable">
                {STUDIO_CONFIG.email} <small>(Tap to Mail)</small>
              </a>
            </p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div>&copy; {new Date().getFullYear()} SHREE SHYAM STUDIO. All Rights Reserved.</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Agreement</a>
            <span>•</span>
            <a href="#">Client Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
