import React from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const { whatsapp } = clinicConfig;

  if (!whatsapp || !whatsapp.enabled || !whatsapp.number) {
    return null;
  }

  const encodedMessage = encodeURIComponent(whatsapp.message || 'Hello, I would like to inquire about dental appointments.');
  const whatsappUrl = `https://wa.me/${whatsapp.number}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with clinic on WhatsApp"
      className="fixed bottom-20 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="text-sm font-medium pr-1 hidden sm:inline-block">WhatsApp Chat</span>
    </a>
  );
};
