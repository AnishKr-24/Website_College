import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppSection = () => {
  const whatsappNumber = "+918110897011,"; // WhatsApp Number

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 flex items-center gap-2"
    >
      <FaWhatsapp className="text-xl sm:text-2xl" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with Us</span>
    </a>
  );
};

export default WhatsAppSection;
