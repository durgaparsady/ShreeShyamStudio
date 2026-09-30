import React from 'react';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getWhatsAppLink } from '../contactConfig';

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
              Check our calendar availability or connect directly with lead cinematographer Pratham Gupta on WhatsApp for an immediate consultation.
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
                href={getWhatsAppLink('Hi Wedding Pictures by Pratham, I would like to inquire about booking wedding coverage.')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-lg"
              >
                <WhatsAppIcon size={20} />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
