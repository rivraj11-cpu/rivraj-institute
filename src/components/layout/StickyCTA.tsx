"use client";

import React from "react";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export const StickyCTA = () => {
  return (
    <aside aria-label="Quick contact and admission" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href="/contact"
        aria-label="Online admission"
        className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs shadow-2xl hover:bg-blue-500 hover:scale-105 transition-all duration-300 border border-blue-400/40"
      >
        <Sparkles className="w-4 h-4" /> Admission Open
      </Link>

      <a
        href="tel:+918445395425"
        aria-label="Call institute at +918445395425"
        className="w-13 h-13 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-luxury-gold hover:scale-110 transition-transform duration-300"
      >
        <Phone className="w-6 h-6 fill-black" />
      </a>

      <a
        href="https://wa.me/918445395425?text=Hello%20Rahul%20Sir%2C%20mujhe%20Rivraj%20Institute%20k%20baare%20me%20jaankari%20chahiye"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </aside>
  );
};
