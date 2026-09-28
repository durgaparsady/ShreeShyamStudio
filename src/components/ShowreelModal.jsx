import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2 } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(102); // 01:42 start
  const totalDuration = 342; // 05:42

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= totalDuration ? 0 : prev + 1));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / totalDuration) * 100;

  return (
    <div className="video-modal active" role="dialog" aria-modal="true">
      <div className="video-backdrop" onClick={onClose} />

      <div className="video-dialog">
        <button className="video-close" onClick={onClose} aria-label="Close video">
          <X size={30} />
        </button>

        <div className="video-player-container">
          <div className="simulated-player" onClick={() => setIsPlaying(!isPlaying)}>
            <img 
              src="/images/royal_wedding.jpg" 
              alt="Film preview frame" 
              className="video-frame-img" 
            />

            {/* Cinemascope 2.39:1 letterbox bars */}
            <div className="cinemascope-bar top" />
            <div className="cinemascope-bar bottom" />

            {/* HUD Top Bar */}
            <div className="video-hud top">
              <span className="hud-rec">
                <span className="hud-dot" /> LIVE 4K UHD
              </span>
              <span className="hud-time">
                {formatTime(currentTime)} / {formatTime(totalDuration)}
              </span>
              <span className="hud-fps">24.000 FPS • PRORES 422 HQ</span>
            </div>

            {/* Play/Pause Overlay Indicator */}
            {!isPlaying && (
              <div className="video-overlay-play">
                <div className="player-big-btn">
                  <Play size={32} fill="#0b0c10" />
                </div>
              </div>
            )}

            {/* HUD Bottom Bar */}
            <div className="video-hud bottom" onClick={(e) => e.stopPropagation()}>
              <div 
                className="hud-progress-bar"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newPercent = clickX / rect.width;
                  setCurrentTime(Math.floor(newPercent * totalDuration));
                }}
              >
                <div 
                  className="hud-progress-fill" 
                  style={{ width: `${progressPercent}%` }} 
                />
              </div>

              <div className="hud-controls-row">
                <button 
                  className="hud-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <><Pause size={14} /> Pause</>
                  ) : (
                    <><Play size={14} fill="currentColor" /> Play</>
                  )}
                </button>

                <div className="hud-title-text">
                  Aarav &amp; Meera • “Two Souls, One Sacred Fire”
                </div>

                <div className={`hud-sound-wave ${isPlaying ? 'playing' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
