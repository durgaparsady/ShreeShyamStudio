import React from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../contactConfig';
import WhatsAppIcon from './WhatsAppIcon';

export default function QuickConnectDock() {
  const contactChannels = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@shreeshyamstudio',
      sub: 'BTS Reels, Stories & Latest Edits',
      actionText: 'Open Instagram',
      href: STUDIO_CONFIG.instagramUrl,
      target: '_blank',
      color: 'insta-gradient',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '+91 96447 46770',
      sub: 'Fastest 24/7 Consultation & Quotes',
      actionText: 'Chat on WhatsApp',
      href: getWhatsAppLink(),
      target: '_blank',
      color: 'wa-green',
      icon: <WhatsAppIcon size={24} />
    },
    {
      id: 'phone',
      name: 'Direct Call',
      handle: STUDIO_CONFIG.phone,
      sub: 'Speak Directly With Studio Director',
      actionText: 'Call Now',
      href: `tel:${STUDIO_CONFIG.phoneClean}`,
      target: '_self',
      color: 'phone-gold',
      icon: <Phone size={24} />
    },
    {
      id: 'email',
      name: 'Email Inquiry',
      handle: STUDIO_CONFIG.email,
      sub: 'Send Event Briefs & Custom Requests',
      actionText: 'Compose Email',
      href: `mailto:${STUDIO_CONFIG.email}?subject=Wedding%20Photography%20Inquiry%20-%20Shree%20Shyam%20Studio`,
      target: '_self',
      color: 'mail-blue',
      icon: <Mail size={24} />
    }
  ];

  return (
    <section className="section quick-connect-section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">DIRECT STUDIO ACCESS</div>
          <h2 className="section-title">
            Connect With Us <span className="text-gold">Instantly</span>
          </h2>
          <p className="section-subtitle">
            Choose your preferred channel below. Tap any option to open directly in your phone app or browser.
          </p>
        </div>

        <div className="connect-grid">
          {contactChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.target}
              rel={channel.target === '_blank' ? 'noopener noreferrer' : undefined}
              className={`connect-card ${channel.color}`}
              id={`connect-${channel.id}`}
            >
              <div className="connect-card-top">
                <div className="connect-icon-wrapper">
                  {channel.icon}
                </div>
                <div className="connect-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="connect-card-body">
                <span className="connect-label">{channel.name}</span>
                <h3 className="connect-handle">{channel.handle}</h3>
                <p className="connect-sub">{channel.sub}</p>
              </div>

              <div className="connect-card-footer">
                <span className="action-pill">{channel.actionText}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
