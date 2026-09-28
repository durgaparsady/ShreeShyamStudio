import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

export default function Packages({ onSelectPackage }) {
  const packages = [
    {
      id: 'heirloom',
      name: 'The Heirloom',
      category: 'Single Day / Pre-Wedding',
      desc: 'Perfect for intimate ceremonies, registry vows, or a dedicated editorial pre-wedding shoot.',
      price: '1,25,000',
      period: '/ 1 Full Day',
      featured: false,
      features: [
        '1 Lead Photographer + 1 Cinematographer',
        'Up to 8 Hours Continuous Coverage',
        '250+ Master Color-Graded Photos',
        '3-5 Minute Cinematic Highlight Film in 4K',
        'Private Cloud Gallery with High-Res Download',
        '48-Hour Rapid Sneak-Peek Teaser'
      ]
    },
    {
      id: 'royal',
      name: 'The Royal Cinema',
      category: 'Multi-Day Grand Celebration',
      desc: 'Our flagship comprehensive coverage for 2-3 day traditional & modern wedding celebrations.',
      price: '2,85,000',
      period: '/ 2-3 Days',
      featured: true,
      badge: 'MOST POPULAR CHOICE',
      features: [
        '2 Senior Photographers + 2 Master Cinematographers',
        'Full Coverage: Haldi, Mehendi, Sangeet & Pheras',
        'Licensed 4K Aerial Drone Coverage',
        '600+ Signature Retouched Master Photos',
        '15-20 Min Cinematic Feature Film + 60s Reel',
        'Handcrafted Italian Leather Photobook (40 Pages)',
        'Rapid 48-Hour Sneak-Peek Reel Delivery'
      ]
    },
    {
      id: 'imperial',
      name: 'Imperial Legacy',
      category: 'Destination & Palace Weddings',
      desc: 'The ultimate bespoke production for high-profile destination weddings with maximum creative scale.',
      price: '4,50,000',
      period: '/ 3-4 Days',
      featured: false,
      features: [
        '4 Photographers + 3 Cinematographers + FPV Pilot',
        'Unlimited Multi-Day Destination Coverage',
        'Same-Day Video Edit for Dinner Reception Screen',
        '1000+ Signature Master Retouched Photos',
        '40 Min Full Documentary + 5 Min Cinematic Trailer',
        '2 Master Leather Albums + 2 Parent Gift Albums',
        'Custom Engraved Wood & Crystal SSD with All RAWs'
      ]
    }
  ];

  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">TRANSPARENT INVESTMENT</div>
          <h2 className="section-title">
            Curated Wedding &amp; Event <span className="text-gold">Packages</span>
          </h2>
          <p className="section-subtitle">
            Every celebration is unique, but our tailored packages provide a clear starting foundation with zero hidden charges.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`package-card ${pkg.featured ? 'featured' : ''}`}
            >
              {pkg.featured && (
                <div className="featured-badge">
                  <Star size={12} fill="#0b0c10" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div className="package-header">
                <span className="pkg-category">{pkg.category}</span>
                <h3 className="pkg-name">{pkg.name}</h3>
                <p className="pkg-desc">{pkg.desc}</p>
                
                <div className="pkg-price">
                  <span className="currency">₹</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="period">{pkg.period}</span>
                </div>
              </div>

              <div className="pkg-divider" />

              <ul className="pkg-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check">
                      <Check size={16} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`btn btn-block ${pkg.featured ? 'btn-gold' : 'btn-outline-gold'}`}
                onClick={() => onSelectPackage(`${pkg.name} (₹${pkg.price})`)}
              >
                <span>{pkg.featured ? 'Reserve The Royal Cinema' : `Choose ${pkg.name}`}</span>
                <ArrowRight size={16} className="btn-arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
