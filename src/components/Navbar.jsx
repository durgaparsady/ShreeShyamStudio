import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Cinematography', href: '#showreel' },
    { name: 'Retouch Lab', href: '#retouch' },
    { name: 'Packages', href: '#packages' },
    { name: 'Quote Calculator', href: '#calculator' },
    { name: 'Gear Arsenal', href: '#gear' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="announcement">
            <span className="badge-pulse"></span>
            <span>Now Booking <strong>2026 – 2027</strong> Wedding Season & Worldwide Destination Tours</span>
          </div>
          <div className="top-contact">
            <a href="tel:+916263692215" className="top-link">
              <Phone size={13} />
              <span>+91 96447 46770</span>
            </a>
            <span className="sep">•</span>
            <a 
              href="https://wa.me/919644746770?text=Hi%20Shree%20Shyam%20Studio,%20I%20would%20like%20to%20inquire%20about%20booking%20wedding%20coverage." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-link top-wa"
            >
              <MessageCircle size={13} />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#hero" className="brand-logo" aria-label="Shree Shyam Studios Home">
            <div className="logo-mark">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="url(#goldGradNav)" strokeWidth="1.5"/>
                <polygon points="20,10 27,15 27,25 20,30 13,25 13,15" stroke="#d4af37" strokeWidth="1.2" fill="none"/>
                <circle cx="20" cy="20" r="4.5" fill="url(#goldGradNav)"/>
                <defs>
                  <linearGradient id="goldGradNav" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f5df9b"/>
                    <stop offset="0.5" stopColor="#d4af37"/>
                    <stop offset="1" stopColor="#a67c1e"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="logo-text">
              <span className="brand-name">SHREE SHYAM</span>
              <span className="brand-sub">STUDIO &amp; CINEMA</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="header-actions">
            <button 
              className="btn btn-gold btn-sm"
              onClick={() => onOpenBooking()}
            >
              <span>Check Availability</span>
              <ArrowRight size={15} className="btn-arrow" />
            </button>

            <button 
              className="mobile-toggle"
              onClick={() => setDrawerOpen(true)}
              aria-label="Toggle Navigation Menu"
            >
              <Menu size={24} color="#ffffff" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="logo-text">
            <span className="brand-name">SHREE SHYAM</span>
            <span className="brand-sub">STUDIO &amp; CINEMA</span>
          </div>
          <button 
            className="drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="drawer-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="drawer-link"
              onClick={() => setDrawerOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="drawer-footer">
          <button 
            className="btn btn-gold btn-block"
            onClick={() => {
              setDrawerOpen(false);
              onOpenBooking();
            }}
          >
            <span>Reserve Your Date</span>
            <ArrowRight size={16} />
          </button>
          <div className="drawer-contact-info">
            <p><strong>Studio:</strong> Indore Destination Tours</p>
            <p><strong>Inquiries:</strong> +91 96447 46770</p>
          </div>
        </div>
      </div>
    </>
  );
}
