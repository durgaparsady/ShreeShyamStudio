import React from 'react';
import { Video, Disc, Compass, Mic } from 'lucide-react';

export default function GearArsenal() {
  const gearItems = [
    {
      icon: <Video size={24} />,
      title: 'Cinema Line Bodies',
      desc: 'Sony FX6 & FX3 cameras featuring Dual Base ISO 12,800 for clean, grain-free low light reception shooting.'
    },
    {
      icon: <Disc size={24} />,
      title: 'Master Prime Lenses',
      desc: 'Sony G-Master f/1.2 & f/1.4 primes offering creamy cinematic bokeh and razor-sharp bridal eye focus.'
    },
    {
      icon: <Compass size={24} />,
      title: 'Aerial & FPV Cinema',
      desc: 'DJI Mavic 3 Cine with Apple ProRes 422 HQ 5.1K capture, flown by DGCA-compliant certified pilots.'
    },
    {
      icon: <Mic size={24} />,
      title: '32-Bit Float Sound',
      desc: 'Sennheiser & Tentacle Track E audio recorders that never clip or distort, even near loud sound systems.'
    }
  ];

  return (
    <section className="section gear-section" id="gear">
      <div className="container">
        <div className="gear-content-grid">
          
          <div className="gear-visual">
            <div className="gear-img-card">
              <img 
                src="/images/cinematic_camera.jpg" 
                alt="Shree Shyam Cinema Camera Rig" 
                loading="lazy"
              />
              <div className="gear-glass-badge">
                <span className="pulse-dot" />
                <span>PRODUCTION RIG 01: SONY FX6 + MASTER PRIME</span>
              </div>
            </div>
          </div>

          <div className="gear-details">
            <div className="section-tag">PROFESSIONAL GRADE ARSENAL</div>
            <h2 className="section-title">
              Why Our Equipment <br />
              <span className="text-gold">Sets Us Apart</span>
            </h2>
            <p className="section-desc">
              We never compromise on optics or camera bodies. Our equipment is identical to systems used on major television productions and film sets, ensuring flawless low-light performance during candlelit dinners and fast-action dances.
            </p>

            <div className="gear-cards-grid">
              {gearItems.map((g, idx) => (
                <div key={idx} className="gear-card">
                  <div className="gear-icon">{g.icon}</div>
                  <div className="gear-meta">
                    <h4>{g.title}</h4>
                    <p>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
