import React from 'react';
import { Camera, Zap, BookOpen, Globe2 } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Camera size={22} />,
      title: 'Sony Cinema Line & RED 6K',
      desc: 'Hollywood-grade optics & color grade'
    },
    {
      icon: <Zap size={22} />,
      title: '48-Hour Rapid Sneak-Peek',
      desc: 'Instant curated highlights for socials'
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Handcrafted Italian Albums',
      desc: 'Heirloom archival velvet & leather prints'
    },
    {
      icon: <Globe2 size={22} />,
      title: 'Global Destination Certified',
      desc: 'Seamless travel setup across 18+ countries'
    }
  ];

  return (
    <section className="trust-strip">
      <div className="container trust-container">
        {trustItems.map((item, index) => (
          <div key={index} className="trust-item">
            <div className="trust-icon">
              {item.icon}
            </div>
            <div className="trust-text">
              <strong>{item.title}</strong>
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
