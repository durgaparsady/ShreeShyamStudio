import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How far in advance should we book our wedding or event date?',
      a: 'We typically book peak wedding season dates (October through March) 6 to 12 months in advance. Because we only accept one primary wedding per weekend to guarantee our complete creative attention and lead team presence, dates fill up quickly. A 30% retainer locks in your chosen date.'
    },
    {
      q: 'When do we receive our photos and cinematic wedding films?',
      a: 'We deliver your curated 40-50 photo sneak-peek within 48 hours after the event, perfect for sharing with family and social media. The complete color-corrected photo gallery is delivered in 3 to 4 weeks. Your cinematic feature films and custom sound-designed teaser are completed in 6 to 8 weeks.'
    },
    {
      q: 'Do you travel for destination weddings across India and worldwide?',
      a: 'Yes, over 65% of our assignments are destination weddings! We have documented celebrations across Udaipur, Jaipur, Goa, Kerala, Dubai, Italy (Lake Como & Amalfi), Bali, and the UK. Our studio handles flight coordination, and our travel kit is compact, insured, and certified for international customs.'
    },
    {
      q: 'What happens if an unexpected camera equipment malfunction occurs?',
      a: 'We follow strict redundancy protocols. Every shooter carries dual memory card slots writing simultaneous duplicate copies of every photo and video. We bring backup camera bodies, extra prime lenses, redundant audio packs, and spare drone batteries to every single event.'
    },
    {
      q: 'Can we customize the package to fit our exact schedule?',
      a: 'Absolutely. You can use our Interactive Quote Calculator above or speak with our creative director to add or remove days, customize album leather finishes, or include special requests like same-day reception projections.'
    },
    {
      q: 'Do you also shoot corporate conferences, galas, and fashion campaigns?',
      a: 'Yes! In addition to weddings, Shree Shyam Studio manages commercial brand shoots, luxury gala evenings, corporate annual summits, and fashion editorial lookbooks with dedicated commercial lighting teams.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-container">
        <div className="section-header text-center">
          <div className="section-tag">CLEAR ANSWERS</div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our booking process, deliverables, and shooting style.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon-box">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
