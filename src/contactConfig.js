/**
 * CENTRAL STUDIO CONTACT & BRAND CONFIGURATION
 * Wedding Pictures by Pratham
 * 
 * Update any value here (Phone, Email, WhatsApp, Instagram, Address)
 * and it will instantly and automatically update across the ENTIRE website:
 * - Header & Navbar
 * - Hero & Floating actions
 * - Quick Connect Dock
 * - Booking Modal (Email & WhatsApp dispatch)
 * - Footer & CTA banners
 */

export const STUDIO_CONFIG = {
  brandName: 'Wedding Pictures by Pratham',
  shortBrand: 'Wedding Pictures',
  byLine: 'By Pratham',
  founder: 'Pratham Gupta',
  tagline: 'Luxury Wedding Photography & Cinematic Films',

  // Official Instagram Handle & Profile
  instagramUrl: 'https://www.instagram.com/wedding_picturesby_pratham?stkn=MWZobGs0M2xyZjRpeQ==',
  instagramHandle: '@wedding_picturesby_pratham',
  instagramDisplay: 'wedding_picturesby_pratham',

  // WhatsApp Direct
  whatsappNumber: '919644746770',
  whatsappMessage: 'Hi Wedding Pictures by Pratham! I saw your website and would like to inquire about wedding/event photography & films.',

  // Direct Phone Call
  phone: '+91 96447 46770',
  phoneClean: '+919644746770',
  phoneRaw: '9644746770',

  // Official Inquiries Email (configured as the recipient in Web3Forms)
  email: 'prathamgupta913@gmail.com',

  // Web3Forms public access key. The recipient is configured in the Web3Forms dashboard.
  web3FormsEndpoint: 'https://api.web3forms.com/submit',
  web3FormsAccessKey: '7fbd52b6-79b8-4560-802c-5823acc551d6',

  // EmailJS public browser configuration. Add these values after connecting Gmail in EmailJS.
  emailJsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  emailJsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  emailJsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',

  // 🔔 Telegram Instant Phone Alert Configuration (100% Free Lifetime)
  // Put your Bot Token from @BotFather and your Chat ID from @userinfobot here
  telegramBotToken: '',
  telegramChatId: '',

  // Studio Base & Tour HQ
  addressIndore: 'Gauri Nagar, Indore, Madhya Pradesh (452010)',
  destinationBase: 'Available across Indore, Madhya Pradesh, India & Worldwide',

  // Studio Authority Stats
  experience: '10+ Years',
  rating: '4.98 ★ (350+ Verified Celebrations)',
};

/**
 * Returns a direct WhatsApp chat link with optional custom pre-filled message
 */
export const getWhatsAppLink = (customMsg) => {
  const msg = encodeURIComponent(customMsg || STUDIO_CONFIG.whatsappMessage);
  return `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${msg}`;
};

/**
 * Formats a comprehensive wedding booking submission for WhatsApp
 */
export const getBookingWhatsAppLink = (bookingData) => {
  const text = `*💍 NEW WEDDING RESERVATION INQUIRY*
*Studio:* ${STUDIO_CONFIG.brandName}
----------------------------------------
👤 *Client Name:* ${bookingData.name || 'Not provided'}
📱 *WhatsApp / Mobile:* ${bookingData.phone || 'Not provided'}
📧 *Email Address:* ${bookingData.email || 'Not provided'}
🎉 *Event Type:* ${bookingData.eventType || 'Grand Wedding'}
📅 *Target Date:* ${bookingData.eventDate || 'To be finalized'}
📍 *City / Venue:* ${bookingData.location || 'Indore / Destination'}
📦 *Selected Package:* ${bookingData.packagePreset || 'Custom Package'}
📝 *Client Notes / Vision:*
${bookingData.message || 'No additional note provided'}
----------------------------------------
✨ _Sent via ${STUDIO_CONFIG.brandName} Web Portal_`;

  return `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

/**
 * Formats an official inquiry mailto link as instant email fallback
 */
export const getBookingMailtoLink = (bookingData) => {
  const subject = encodeURIComponent(`[Booking Request] ${bookingData.name} - ${bookingData.eventType} (${bookingData.eventDate || 'Upcoming'})`);
  const body = encodeURIComponent(`NEW WEDDING RESERVATION REQUEST
===========================================
Studio: ${STUDIO_CONFIG.brandName}
Founder: ${STUDIO_CONFIG.founder}

CLIENT DETAILS:
- Full Name: ${bookingData.name}
- Mobile / WhatsApp: ${bookingData.phone}
- Email: ${bookingData.email}

CELEBRATION DETAILS:
- Event Category: ${bookingData.eventType}
- Event Date: ${bookingData.eventDate || 'To be decided'}
- City / Venue: ${bookingData.location || 'Indore / Destination'}
- Selected Package: ${bookingData.packagePreset || 'Custom Package'}

ADDITIONAL VISION & NOTES:
${bookingData.message || 'None provided'}
===========================================
Generated from ${STUDIO_CONFIG.brandName} Website`);

  return `mailto:${STUDIO_CONFIG.email}?subject=${subject}&body=${body}`;
};

/**
 * Sends instant alert directly to photographer's phone via Telegram Bot
 */
export const sendTelegramNotification = async (bookingData) => {
  if (!STUDIO_CONFIG.telegramBotToken || !STUDIO_CONFIG.telegramChatId) {
    return false;
  }

  const message = `🔔 *NEW WEDDING RESERVATION INQUIRY!*
━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${bookingData.name || 'Not provided'}
📱 *Phone:* ${bookingData.phone || 'Not provided'}
📧 *Email:* ${bookingData.email || 'Not provided'}
🎉 *Event:* ${bookingData.eventType || 'Grand Wedding'}
📅 *Target Date:* ${bookingData.eventDate || 'To be decided'}
📍 *Venue / City:* ${bookingData.location || 'Indore'}
📦 *Selected Package:* ${bookingData.packagePreset || 'Custom Package'}
📝 *Client Notes:*
${bookingData.message || 'No additional note provided'}
━━━━━━━━━━━━━━━━━━━━
🌐 *Studio:* ${STUDIO_CONFIG.brandName}`;

  try {
    const url = `https://api.telegram.org/bot${STUDIO_CONFIG.telegramBotToken}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: STUDIO_CONFIG.telegramChatId,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      })
    });
    return response.ok;
  } catch (err) {
    console.warn('Telegram alert skipped or failed:', err);
    return false;
  }
};
