import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingWhatsApp() {
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
    <>
      {/* Scroll to Top */}
      <button 
        className={`scroll-top-btn ${showScroll ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919644746770?text=Hi%20Shree%20Shyam%20Studio,%20I%20am%20interested%20in%20wedding%20photography%20and%20films." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-wa"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={30} />
        <span className="floating-wa-tooltip">Quick Chat with Director</span>
      </a>
    </>
  );
}
