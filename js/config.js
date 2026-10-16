/**
 * SHIV MENS - Brand & Business Configuration
 * Centralized configuration for contact details, social links, and store information.
 * Single source of truth across all pages.
 */

const SHIV_CONFIG = {
  brand: {
    name: "SHIV MENS",
    legalName: "Shiv Mens",
    tagline: "Style That Speaks For You",
    description: "Curated men's fashion in Nagpur featuring premium denim, linen co-ords, tailored shirts, relaxed trousers, and festive ethnic wear.",
    establishedCity: "Nagpur, Maharashtra, India",
    monogram: "Sm"
  },
  contact: {
    primaryPhone: "+91 88300 12212",
    secondaryPhone: "+91 94228 08260",
    phoneRawPrimary: "8830012212",
    phoneRawSecondary: "9422808260",
    whatsappNumber: "918830012212", // International normalized format for wa.me
    whatsappDefaultMessage: "Hi SHIV MENS, I would like to know more about your collection.",
    address: {
      landmark: "Sai Vasanshah Square",
      area: "Jaripatka",
      city: "Nagpur",
      state: "Maharashtra",
      country: "India",
      pincode: "440014",
      fullAddress: "Sai Vasanshah Square, Jaripatka, Nagpur, Maharashtra 440014, India"
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sai+Vasanshah+Square+Jaripatka+Nagpur",
    googleMapsEmbedQuery: "Sai+Vasanshah+Square+Jaripatka+Nagpur"
  },
  social: {
    instagram: {
      handle: "@shivmens_nagpur",
      url: "https://www.instagram.com/shivmens_nagpur"
    },
    facebook: {
      name: "Shiv Mens Nagpur",
      url: "https://www.facebook.com/shivmens_nagpur"
    }
  },
  payment: {
    upiId: "mukeshkngp-1@oksbi",
    payeeName: "Mukesh Kukreja / Shiv Mens"
  },
  hours: {
    storeHours: "Monday to Sunday: 11:00 AM – 10:00 PM",
    customerSupport: "WhatsApp assistance available 10:00 AM – 9:00 PM"
  }
};

/**
 * Helper to construct WhatsApp inquiry link
 * @param {string} [customMessage]
 * @returns {string}
 */
function getWhatsAppUrl(customMessage) {
  const msg = customMessage || SHIV_CONFIG.contact.whatsappDefaultMessage;
  return `https://wa.me/${SHIV_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

// Export for module use or attach to window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SHIV_CONFIG, getWhatsAppUrl };
}
