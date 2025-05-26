"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300 transform ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}