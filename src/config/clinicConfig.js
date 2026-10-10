/**
 * DENTIVA - Central Clinic Configuration
 * 
 * Reusable template configuration.
 * Change all business details from this central file.
 * DO NOT hard-code real business details across components.
 */

export const clinicConfig = {
  name: "DENTIVA",
  tagline: "Confident Smiles. Exceptional Care.",
  subtagline: "Modern dentistry, personalized treatment and a comfortable patient experience designed around your smile.",
  
  contact: {
    phone: "YOUR PHONE",
    email: "YOUR EMAIL",
    location: "YOUR LOCATION",
    hours: "Mon – Fri: 8:00 AM – 7:00 PM | Sat: 9:00 AM – 4:00 PM | Sun: Closed",
    emergencyNote: "Same-day consultation appointments prioritized based on daily availability.",
  },

  whatsapp: {
    enabled: false,
    number: "",
    message: "Hi, I'd like to know more about your dental services and appointment options.",
  },

  map: {
    enabled: false,
    embedUrl: "",
    placeholderNote: "Map view is configurable. Enable in clinicConfig.js with your clinic's Google Maps embed URL.",
  },

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    linkedin: "",
    twitter: "",
  },

  announcement: {
    enabled: true,
    text: "Welcoming new patients — Comprehensive examinations & personalized smile design consultations available.",
    badge: "New Patient Care",
    ctaText: "Book Now",
    ctaTarget: "#booking",
  },

  badges: [
    "Experienced Care",
    "Modern Technology",
    "Personalized Treatment",
    "Comfort-First Environment",
  ],
};
