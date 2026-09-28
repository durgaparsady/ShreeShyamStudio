import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CtaBanner({ onOpenBooking }) {
  return (
    <section className="section cta-banner-section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-content">
            <span className="cta-tag">LET'S CREATE ART TOGETHER</span>
            <h2 className="cta-heading">
              Your Wedding Day Happens Once. <br />
              Let’s Make It <span className="text-gold">Unforgettable</span>.
            </h2>
            <p className="cta-sub">
              Check our calendar availability or connect directly with our studio director on WhatsApp for an immediate consultation.
            </p>

            <div className="cta-buttons">
              <button 
                className="btn btn-gold btn-lg"
                onClick={() => onOpenBooking()}
              >
                <span>Check Date Availability</span>
                <ArrowRight size={18} className="btn-arrow" />
              </button>

              <a 
                href="https://wa.me/919644746770?text=Hi%20Shree%20Shyam%20Studio,%20I%20would%20like%20to%20inquire%20about%20booking%20wedding%20coverage." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
