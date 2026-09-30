import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { STUDIO_CONFIG, getWhatsAppLink } from '../contactConfig';

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
    { name: 'Portfolio', shortName: 'Portfolio', href: '#portfolio' },
    { name: 'Cinematography', shortName: 'Films', href: '#showreel' },
    { name: 'Retouch Lab', shortName: 'Retouch', href: '#retouch' },
    { name: 'Packages', shortName: 'Packages', href: '#packages' },
    { name: 'Quote Calculator', shortName: 'Pricing', href: '#calculator' },
    { name: 'Gear Arsenal', shortName: 'Gear', href: '#gear' },
    { name: 'Reviews', shortName: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', shortName: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="announcement">
            <span className="badge-pulse"></span>
            <span>Now Booking <strong>2026 – 2027</strong> Weddings &amp; Worldwide Destination Tours • By Pratham Gupta</span>
          </div>
          <div className="top-contact">
            <a href={`tel:${STUDIO_CONFIG.phoneClean}`} className="top-link">
              <Phone size={13} />
              <span>{STUDIO_CONFIG.phone}</span>
            </a>
            <span className="sep">•</span>
            <a 
              href={getWhatsAppLink('Hi Wedding Pictures by Pratham, I would like to inquire about booking wedding coverage.')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-link top-wa"
            >
              <WhatsAppIcon size={14} />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#hero" className="brand-logo" aria-label="Wedding Pictures by Pratham Home">
            <div className="logo-mark">
              <img src="/images/wp_logo.jpg" alt="Wedding Pictures by Pratham" className="logo-img" />
            </div>
            <div className="logo-text">
              <span className="brand-name">WEDDING PICTURES</span>
              <span className="brand-sub">BY PRATHAM</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                <span>{link.shortName || link.name}</span>
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="header-actions">
            <button 
              className="btn btn-gold btn-sm header-booking-btn"
              onClick={() => onOpenBooking()}
            >
              <span className="btn-text-full">Check Availability</span>
              <span className="btn-text-short">Book</span>
              <ArrowRight size={14} className="btn-arrow" />
            </button>

            <button 
              className="mobile-toggle"
              onClick={() => setDrawerOpen(true)}
              aria-label="Toggle Navigation Menu"
            >
              <Menu size={22} className="mobile-toggle-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="brand-logo">
            <div className="logo-mark">
              <img src="/images/wp_logo.jpg" alt="Wedding Pictures by Pratham" className="logo-img" />
            </div>
            <div className="logo-text">
              <span className="brand-name">WEDDING PICTURES</span>
              <span className="brand-sub">BY PRATHAM</span>
            </div>
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
            <p><strong>Lead Cinematographer:</strong> Pratham Gupta</p>
            <p><strong>Studio:</strong> Indore &amp; Destination Tours</p>
            <p><strong>Inquiries:</strong> {STUDIO_CONFIG.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}
