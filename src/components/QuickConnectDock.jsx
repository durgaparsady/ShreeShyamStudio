import React, { useState } from 'react';
import { Phone, Mail, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../contactConfig';
import WhatsAppIcon from './WhatsAppIcon';

export default function QuickConnectDock() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (e, text, id) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const contactChannels = [
    {
      id: 'instagram',
      name: 'Instagram Diary',
      status: 'BTS & Daily Reels',
      title: 'Follow Our Visual Diary',
      handle: STUDIO_CONFIG.instagramHandle,
      rawCopy: STUDIO_CONFIG.instagramHandle,
      sub: 'Behind-the-scenes stories, 4K wedding reels & latest photo albums.',
      actionText: 'Open Instagram',
      href: STUDIO_CONFIG.instagramUrl,
      target: '_blank',
      themeClass: 'theme-insta',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Direct',
      status: 'Instant Reply • 24/7',
      title: 'Chat with Lead Team',
      handle: STUDIO_CONFIG.phone,
      rawCopy: STUDIO_CONFIG.phone,
      sub: 'Fastest consultation, date reservations & customized estimates.',
      actionText: 'Chat on WhatsApp',
      href: getWhatsAppLink('Hi Wedding Pictures by Pratham! I saw your website and would like to inquire about wedding photography & cinematic films.'),
      target: '_blank',
      themeClass: 'theme-wa',
      icon: <WhatsAppIcon size={22} />
    },
    {
      id: 'phone',
      name: 'Phone Consultation',
      status: 'Lead Cinematographer',
      title: 'Speak with Pratham Gupta',
      handle: STUDIO_CONFIG.phone,
      rawCopy: STUDIO_CONFIG.phoneClean,
      sub: 'Direct voice conversation to discuss your wedding schedule & vision.',
      actionText: 'Call Directly',
      href: `tel:${STUDIO_CONFIG.phoneClean}`,
      target: '_self',
      themeClass: 'theme-phone',
      icon: <Phone size={22} />
    },
    {
      id: 'email',
      name: 'Official Email',
      status: 'Detailed Proposals',
      title: 'Send Event Brief',
      handle: STUDIO_CONFIG.email,
      rawCopy: STUDIO_CONFIG.email,
      sub: 'Send full multi-day itineraries, moodboards & custom requirements.',
      actionText: 'Compose Email',
      href: `mailto:${STUDIO_CONFIG.email}?subject=Wedding%20Photography%20Inquiry%20-%20Wedding%20Pictures%20by%20Pratham`,
      target: '_self',
      themeClass: 'theme-email',
      icon: <Mail size={22} />
    }
  ];

  return (
    <section className="section quick-connect-section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">
            <Sparkles size={12} className="inline-sparkle" />
            DIRECT STUDIO ACCESS
          </div>
          <h2 className="section-title">
            Connect With Us <span className="text-gold">Instantly</span>
          </h2>
          <p className="section-subtitle">
            Choose your preferred channel below. Tap any card to open directly in your phone app or copy contact info with one click.
          </p>
        </div>

        <div className="connect-grid">
          {contactChannels.map((channel) => (
            <div
              key={channel.id}
              className={`connect-card ${channel.themeClass}`}
              id={`connect-${channel.id}`}
            >
              <div className="connect-card-header">
                <div className="connect-icon-wrapper">
                  {channel.icon}
                </div>
                <div className="connect-status-badge">
                  <span className="status-dot"></span>
                  <span>{channel.status}</span>
                </div>
              </div>

              <div className="connect-card-body">
                <span className="connect-channel-label">{channel.name}</span>
                <h3 className="connect-headline">{channel.title}</h3>
                
                {/* Elegant Full-Width Handle Pill that NEVER truncates */}
                <div className="connect-pill-wrapper">
                  <span className="connect-handle-text" title={channel.handle}>
                    {channel.handle}
                  </span>
                  <button 
                    type="button"
                    className="copy-mini-btn"
                    onClick={(e) => handleCopy(e, channel.rawCopy, channel.id)}
                    title="Copy to clipboard"
                    aria-label={`Copy ${channel.handle}`}
                  >
                    {copiedId === channel.id ? (
                      <Check size={13} className="text-success" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </div>

                <p className="connect-sub">{channel.sub}</p>
              </div>

              <div className="connect-card-footer">
                <a
                  href={channel.href}
                  target={channel.target}
                  rel={channel.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="action-btn-link"
                >
                  <span>{channel.actionText}</span>
                  <ArrowUpRight size={15} className="action-arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
