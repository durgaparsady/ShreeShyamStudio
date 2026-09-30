import React from 'react';
import { Play, ArrowRight, Star } from 'lucide-react';

export default function Hero({ onOpenShowreel, onOpenBooking: _onOpenBooking }) {
  return (
    <section className="hero-section" id="hero">
      <div 
        className="hero-backdrop" 
        style={{ backgroundImage: `url('/images/hero_wedding.jpg')` }}
      />
      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="container hero-content">
        <div className="hero-badge">
          <Star size={13} className="star-icon" fill="#d4af37" />
          <span>WEDDING PICTURES BY PRATHAM • LUXURY WEDDING CINEMA &amp; ATELIER</span>
        </div>

        <h1 className="hero-title">
          We Turn Fleeting Emotions Into <br />
          <span className="text-gold-gradient">Timeless Cinema</span>
        </h1>

        <p className="hero-description">
          Directed by Pratham Gupta. Capturing royal palace weddings, joyful haldi celebrations, and iconic life milestones across India and worldwide destinations. Powered by Hollywood-grade cinema cameras, master color artistry, and profound human emotion.
        </p>

        <div className="hero-cta-group">
          <a href="#portfolio" className="btn btn-gold btn-lg">
            <span>Explore The Portfolio</span>
            <ArrowRight size={18} className="btn-arrow" />
          </a>
          
          <button 
            className="btn btn-glass btn-lg"
            onClick={onOpenShowreel}
          >
            <div className="play-pulse">
              <Play size={13} fill="#ffffff" color="#ffffff" />
            </div>
            <span>Watch 2026 Showreel</span>
          </button>
        </div>

        {/* Hero Stats Card */}
        <div className="hero-stats-card">
          <div className="stat-item">
            <div className="stat-number">450+</div>
            <div className="stat-label">Weddings &amp; Galas Documented</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years of Visual Mastery</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">4K &amp; 8K</div>
            <div className="stat-label">Cinema &amp; FPV Drone Optics</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">4.98 ★</div>
            <div className="stat-label">Client Love (350+ Verified Reviews)</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#portfolio" className="scroll-down" aria-label="Scroll to portfolio">
        <span>SCROLL TO DISCOVER</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </a>
    </section>
  );
}
