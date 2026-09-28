import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      names: 'Mahima & Sanidhya yadav',
      meta: 'The Leela Palace, Udaipur • Married Aug 2026',
      image: '/images/royal_wedding.jpg',
      quote: '“Shree Shyam Studio captured our Udaipur wedding in a way that feels straight out of a Sanjay Leela Bhansali movie! Watching our 18-minute film brings tears to everyone who sees it. Their team was discreet, polite, and calm throughout the chaos.”'
    },
    {
      id: 2,
      names: 'Krishna & Sourabh kushwah',
      meta: 'W Goa Destination Wedding • Married Nov 2025',
      image: '/images/hero_wedding.jpg',
      quote: '“The 48-hour sneak-peek trailer literally blew up on Instagram! Our friends couldn’t believe the colors and drone angles of our Goa beach vows. When we received the Italian leather album, it felt like an heirloom our grandchildren will treasure.”'
    },
    {
      id: 3,
      names: 'Roshni (laddoo) & Pratham Gupta',
      meta: 'Rambagh Palace, Jaipur • Married Jan 2026',
      image: '/images/haldi_sangeet.jpg',
      quote: '“As someone who is camera shy, I was nervous about posing. The Shree Shyam Studio team made us laugh naturally and captured genuine candid smiles during our Haldi. They are truly artists, not just camera operators. 10/10 recommend!”'
    }
  ];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">UNFILTERED WORDS FROM OUR COUPLES</div>
          <h2 className="section-title">
            Stories Told With <span className="text-gold">Heart &amp; Soul</span>
          </h2>
          <p className="section-subtitle">
            Over 450 weddings and corporate galas documented. Here is what families remember most about our team.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r) => (
            <div key={r.id} className="review-card">
              <div className="review-header">
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>
                <Quote size={24} className="review-quote-icon" />
              </div>

              <p className="review-quote">{r.quote}</p>

              <div className="review-author">
                <div 
                  className="author-avatar"
                  style={{ backgroundImage: `url('${r.image}')` }}
                />
                <div className="author-info">
                  <h5>{r.names}</h5>
                  <span>{r.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
