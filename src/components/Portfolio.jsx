import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';

export default function Portfolio({ onOpenLightbox, onOpenBooking: _onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stories (9)' },
    { id: 'weddings', label: 'Royal Weddings' },
    { id: 'haldi', label: 'Haldi & Sangeet' },
    { id: 'prewedding', label: 'Pre-Wedding' },
    { id: 'portraits', label: 'Fine Art Portraits' },
    { id: 'corporate', label: 'Galas & Events' },
  ];

  const portfolioItems = [
    {
      id: 0,
      category: 'weddings',
      badge: 'Royal Mandap',
      title: 'Aarav & Meera',
      meta: 'City Palace, Udaipur • 3-Day Royal Affair',
      specs: ['Sony FX6 Cinema', '50mm f/1.2 GM'],
      image: '/images/royal_wedding.jpg',
      desc: 'A breathtaking floral mandap illuminated with thousands of candle lanterns under the starlit Udaipur sky.'
    },
    {
      id: 1,
      category: 'haldi',
      badge: 'Haldi Festivities',
      title: 'Rohan & Ananya',
      meta: 'Jaipur Fort Courtyard • Marigold Petal Shower',
      specs: ['Sony FX3', '35mm f/1.4 GM • 120fps'],
      image: '/images/haldi_sangeet.jpg',
      desc: 'Unfiltered joy captured at 120 frames per second as marigold petals cascade over the laughing bride and groom.'
    },
    {
      id: 2,
      category: 'weddings',
      badge: 'Golden Hour Vows',
      title: 'Kabir & Tara',
      meta: 'Ravello Coastline • Sunset Terrace Vows',
      specs: ['Hasselblad H6D', '85mm f/1.4'],
      image: '/images/hero_wedding.jpg',
      desc: 'Golden hour warm light casting romantic silhouettes against ancient stone balustrades.'
    },
    {
      id: 3,
      category: 'portraits',
      badge: 'Fine Art Monochrome',
      title: 'Elena • The Bridal Solitude',
      meta: 'Studio Atelier • Rembrandt Chiaroscuro',
      specs: ['Medium Format', '100mm Macro f/2.8'],
      image: '/images/editorial_portrait.jpg',
      desc: 'Timeless black and white studio portrait with delicate lace embroidery and emotional depth.'
    },
    {
      id: 4,
      category: 'prewedding',
      badge: 'Pre-Wedding Story',
      title: 'Dev & Simran',
      meta: 'Santorini Cliffs • Sunrise Intimacy',
      specs: ['Sony A1', '24-70mm f/2.8 GM II'],
      image: '/images/pre_wedding.jpg',
      desc: 'Warm morning winds and whitewashed architecture framing an unforgettable destination love story.'
    },
    {
      id: 5,
      category: 'portraits',
      badge: 'Heirloom Details',
      title: 'The Heritage Bands',
      meta: 'Handcrafted Solitaires & Polki Jewels',
      specs: ['90mm f/2.8 Macro', 'Nanlite Studio Soft'],
      image: '/images/ring_details.jpg',
      desc: 'Every sparkle and handcrafted facet captured with ultra-sharp cinema macro glass.'
    },
    {
      id: 6,
      category: 'weddings',
      badge: 'Grand Reception',
      title: 'Karan & Natasha',
      meta: 'The St. Regis • Crystal Ballroom Soiree',
      specs: ['Dual Cine FX6', 'DJI Ronin Gimbal'],
      image: '/images/reception_gala.jpg',
      desc: 'Crystal chandeliers, ambient candlelight, and unforgettable first dances captured in true cinema scope.'
    },
    {
      id: 7,
      category: 'corporate',
      badge: 'Corporate Event',
      title: 'Apex Global Leadership Gala',
      meta: 'Grand Hyatt Convention • 1,200 Attendees',
      specs: ['Multi-Cam Stream', 'Telephoto Master GM'],
      image: '/images/corporate_event.jpg',
      desc: 'Crisp keynote documentation, high-profile award presentations, and VIP networking captured seamlessly.'
    },
    {
      id: 8,
      category: 'portraits',
      badge: 'Behind The Lens',
      title: 'The Cinema Production Rig',
      meta: 'Carbon Fiber Gimbal & Anamorphic Prime Setup',
      specs: ['6K RAW Recording', 'Wireless Focus Pulling'],
      image: '/images/cinematic_camera.jpg',
      desc: 'Our studio in action: deploying cinema-grade stabilized rigs for butter-smooth gliding camera movements.'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">THE VISUAL ARCHIVE</div>
          <h2 className="section-title">
            Moments That Resonate For <span className="text-gold">Eternity</span>
          </h2>
          <p className="section-subtitle">
            From regal palace pheras and electrifying Sangeet dances to quiet, intimate pre-wedding glances—explore our curated portfolio.
          </p>

          {/* Filter Tabs */}
          <div className="portfolio-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-card"
              onClick={() => onOpenLightbox(item.id, portfolioItems)}
            >
              <div className="card-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="card-overlay">
                  <span className="card-badge">{item.badge}</span>
                  
                  <div className="card-info">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-meta">{item.meta}</p>
                    <div className="card-specs">
                      {item.specs.map((spec, sIdx) => (
                        <span key={sIdx}>{spec}</span>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="card-zoom-btn"
                    aria-label={`View ${item.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(item.id, portfolioItems);
                    }}
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
