import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight, Sparkles, Sliders, Sun } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPos(percentage);
  }, []);

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="section retouch-section" id="retouch">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">OUR COLOR SCIENCE & CRAFT</div>
          <h2 className="section-title">
            The Magic of <span className="text-gold">Post-Production</span>
          </h2>
          <p className="section-subtitle">
            See the transformative difference between unedited camera RAW capture and our signature Shree Shyam fine-art grade. Drag the slider to reveal!
          </p>
        </div>

        <div className="comparison-container">
          <div 
            className="comparison-wrapper"
            ref={containerRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseUp}
            onTouchMove={onTouchMove}
          >
            {/* After Layer (Full Master Grade) */}
            <div className="img-layer after-layer">
              <img 
                src="/images/hero_wedding.jpg" 
                alt="Master color graded wedding couple" 
                draggable="false"
              />
              <span className="layer-badge badge-after">
                ★ SHREE SHYAM SIGNATURE GRADE
              </span>
            </div>

            {/* Before Layer (Simulated RAW Flat Log) */}
            <div 
              className="img-layer before-layer"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src="/images/hero_wedding.jpg" 
                className="raw-filter"
                alt="Raw camera unedited capture" 
                draggable="false"
              />
              <span className="layer-badge badge-before">
                RAW UNGRADED LOG
              </span>
            </div>

            {/* Split Divider Handle */}
            <div 
              className="slider-handle"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="handle-line" />
              <div className="handle-circle">
                <ChevronsLeftRight size={20} />
              </div>
              <div className="handle-line" />
            </div>
          </div>

          {/* Retouch Highlights Cards */}
          <div className="retouch-highlights">
            <div className="retouch-card">
              <div className="rc-number">01</div>
              <h4>Skin Tone Radiance</h4>
              <p>Natural melanin balance and gentle micro-texture retouching without artificial plastic smoothing.</p>
            </div>

            <div className="retouch-card">
              <div className="rc-number">02</div>
              <h4>Dynamic Range Recovery</h4>
              <p>Highlights roll off gently into skies while deep shadows preserve the rich fabric of lehengas and tuxedos.</p>
            </div>

            <div className="retouch-card">
              <div className="rc-number">03</div>
              <h4>Fine Art Color Harmony</h4>
              <p>Custom film-emulation LUTs engineered specifically for warm Indian royal lighting, candle chandeliers, and fireworks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
