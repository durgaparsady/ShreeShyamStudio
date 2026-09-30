import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      names: 'Pooja & Yashwardhan Patidar',
      meta: 'Sheraton Grand Palace, Indore • Married Nov 2025',
      location: 'Indore',
      image: '/images/royal_wedding.jpg',
      quote: '“Wedding Pictures by Pratham captured our wedding at Sheraton Grand Palace Indore in a way that feels straight out of a royal Sanjay Leela Bhansali movie! Watching our 18-minute film brings happy tears to everyone who sees it. Pratham and his Indore team were discreet, polite, and calm throughout the grand celebrations.”'
    },
    {
      id: 2,
      names: 'Aayushi & Siddharth Jain',
      meta: 'Brilliant Convention Centre (BCC), Indore • Married Jan 2026',
      location: 'Indore',
      image: '/images/hero_wedding.jpg',
      quote: '“The 48-hour sneak-peek trailer of our Sangeet at BCC literally blew up on Instagram! Our friends and family couldn’t believe the rich colors, slow-mo gimbal shots, and drone angles. When we received the Italian leather album, it felt like a family heirloom our grandchildren will treasure. Pratham is simply phenomenal!”'
    },
    {
      id: 3,
      names: 'Radhika & Varun Agrawal',
      meta: 'Sayaji Hotel & Amber Garden, Indore • Married Dec 2025',
      location: 'Indore',
      image: '/images/haldi_sangeet.jpg',
      quote: '“As someone who is camera shy, I was very nervous about posing. Pratham and the Wedding Pictures crew made us laugh naturally and captured genuine candid smiles during our Haldi & Phere. They are truly artists, not just camera operators. 10/10 recommend to all Indore couples!”'
    }
  ];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">UNFILTERED WORDS FROM OUR INDORE COUPLES</div>
          <h2 className="section-title">
            Stories Told With <span className="text-gold">Heart &amp; Soul</span>
          </h2>
          <p className="section-subtitle">
            Over 450 weddings and corporate galas documented across Indore and luxury destinations. Here is what families remember most about our team.
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
                  <span className="author-meta">
                    <MapPin size={12} className="inline-pin text-gold" />
                    {r.meta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
