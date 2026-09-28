/**
 * STUDIO CONTACT CONFIGURATION
 * 
 * Replace these values whenever you have your friend's real links!
 * Everything across the website updates automatically from this single file.
 */

export const STUDIO_CONFIG = {
  instagramUrl: 'https://www.instagram.com/wedding_picturesby_pratham?stkn=MWZobGs0M2xyZjRpeQ==', 
  whatsappNumber: '919644746770',
  whatsappMessage: 'Hi Shree Shyam Studio! I saw your website and would like to inquire about wedding/event photography & films.',
  
  // Phone number for direct calls
  phone: '+919644746770',
  phoneClean: '+916263692215',
  email: 'prathamgupta@gmail.com',

  addressIndore: 'Gauri Nagar, Indore, Madhya Pradesh',
};

export const getWhatsAppLink = (customMsg) => {
  const msg = encodeURIComponent(customMsg || STUDIO_CONFIG.whatsappMessage);
  return `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${msg}`;
};
