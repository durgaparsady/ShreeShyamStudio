import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ isOpen, activeIndex, items, onClose, onNavigate }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + items.length) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, activeIndex, items, onClose, onNavigate]);

  if (!isOpen || !items || !items[activeIndex]) return null;

  const currentItem = items[activeIndex];

  return (
    <div className="lightbox-modal active" role="dialog" aria-modal="true">
      <div className="lightbox-backdrop" onClick={onClose} />
      
      <div className="lightbox-dialog">
        <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
          <X size={28} />
        </button>

        <button 
          className="lightbox-nav prev"
          onClick={() => onNavigate((activeIndex - 1 + items.length) % items.length)}
          aria-label="Previous photo"
        >
          <ChevronLeft size={30} />
        </button>

        <button 
          className="lightbox-nav next"
          onClick={() => onNavigate((activeIndex + 1) % items.length)}
          aria-label="Next photo"
        >
          <ChevronRight size={30} />
        </button>

        <div className="lightbox-content">
          <div className="lightbox-img-box">
            <img src={currentItem.image} alt={currentItem.title} />
          </div>

          <div className="lightbox-caption">
            <h3>{currentItem.title}</h3>
            <p>{currentItem.desc}</p>
            <div className="lightbox-specs">
              {currentItem.specs.map((s, idx) => (
                <span key={idx}>• {s}</span>
              ))}
            </div>
            <div className="lightbox-counter">
              {activeIndex + 1} of {items.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
