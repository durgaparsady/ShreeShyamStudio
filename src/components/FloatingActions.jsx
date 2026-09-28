import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../contactConfig';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-dock">
      {/* Scroll to Top */}
      <button 
        className={`floating-btn btn-scroll ${showScroll ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Scroll to Top"
      >
        <ArrowUp size={18} />
      </button>

      {/* Direct Phone Dial */}
      <a 
        href={`tel:${STUDIO_CONFIG.phoneClean}`} 
        className="floating-btn btn-phone"
        aria-label="Call studio"
        title="Call Us Now"
      >
        <Phone size={20} />
        <span className="dock-tooltip">Call: {STUDIO_CONFIG.phone}</span>
      </a>

      {/* Instagram Profile */}
      <a 
        href={STUDIO_CONFIG.instagramUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn btn-insta"
        aria-label="Instagram Profile"
        title="View Instagram Reels & Stories"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
        <span className="dock-tooltip">Instagram: @shree_shyam_studios</span>
      </a>

      {/* WhatsApp Chat */}
      <a 
        href={getWhatsAppLink()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn btn-wa main-wa"
        aria-label="Chat on WhatsApp"
        title="Instant WhatsApp Consultation"
      >
        <WhatsAppIcon size={26} />
        <span className="dock-tooltip main-tooltip">Chat with Studio Director</span>
      </a>
    </div>
  );
}
