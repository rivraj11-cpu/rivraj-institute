"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, UserLock, Sparkles } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Results", href: "/results" },
    { name: "Faculty", href: "/faculty" },
    { name: "Test Series", href: "/test-series" },
    { name: "Current Affairs", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-luxury-gold via-luxury-amber to-amber-700 flex items-center justify-center text-black font-extrabold text-2xl shadow-luxury-gold group-hover:scale-105 transition-transform duration-300">
              R
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white block group-hover:text-luxury-amber transition-colors">
                RIVRAJ INSTITUTE
              </span>
              <span className="text-xs text-luxury-gold tracking-widest uppercase font-mono block">
                SHIKOHABAD • UNDER RAHUL RAJ SIR
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-luxury-gold bg-luxury-gold/10 border border-luxury-gold/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-luxury-gold border border-luxury-gold/40 rounded-full hover:bg-luxury-gold/10 transition-all"
            >
              <UserLock className="w-3.5 h-3.5" /> Portal
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-black bg-gold-gradient rounded-full shadow-luxury-gold hover:scale-105 transition-transform"
            >
              <Sparkles className="w-3.5 h-3.5" /> Quick Admission
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-luxury-slate/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:bg-white/10 hover:text-luxury-gold"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-luxury-gold border border-luxury-gold/40 rounded-full"
            >
              Student & Admin Portal
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold text-black bg-gold-gradient rounded-full"
            >
              Apply Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
