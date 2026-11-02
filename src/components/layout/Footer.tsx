import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center text-black font-extrabold text-xl">
                R
              </div>
              <span className="text-lg font-black text-white">RIVRAJ INSTITUTE</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Shikohabad's premier competitive examination training institute led by Rahul Raj Sir. 
              Equipped with modern classrooms, weekly OMR mocks, and focused pedagogy.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-xs font-mono">
              <Clock className="w-3.5 h-3.5" /> Daily Fresh Batch: 08:00 AM
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-luxury-gold transition-colors">About Institute</Link></li>
              <li><Link href="/courses" className="hover:text-luxury-gold transition-colors">All 13 Courses</Link></li>
              <li><Link href="/results" className="hover:text-luxury-gold transition-colors">Selections & Results</Link></li>
              <li><Link href="/faculty" className="hover:text-luxury-gold transition-colors">Faculty Profiles</Link></li>
              <li><Link href="/test-series" className="hover:text-luxury-gold transition-colors">OMR Test Series</Link></li>
              <li><Link href="/contact" className="hover:text-luxury-gold transition-colors">Campus Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Top Batches
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/up-police" className="hover:text-luxury-gold transition-colors">UP Police Constable Special</Link></li>
              <li><Link href="/courses/ssc-gd" className="hover:text-luxury-gold transition-colors">SSC GD Selection Batch</Link></li>
              <li><Link href="/courses/railway-ntpc" className="hover:text-luxury-gold transition-colors">Railway RRB NTPC</Link></li>
              <li><Link href="/courses/ctet" className="hover:text-luxury-gold transition-colors">CTET Paper I & II</Link></li>
              <li><Link href="/courses/up-si" className="hover:text-luxury-gold transition-colors">UP Sub-Inspector Rankers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <span>
                  Near Shokiram Petrol Pump, NH-19, Subhash Tiraha, Shaihajalpur, Shikohabad, Uttar Pradesh - 283135
                </span>
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="tel:+918445395425" className="hover:text-luxury-gold font-mono font-bold">+91-8445395425</a>
              </p>
              <p className="text-xs text-gray-400">
                (Note: Previous records note secondary location points near Pratapur Rd)
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 RIVRAJ INSTITUTE SHIKOHABAD. Mentored by Rahul Raj Sir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
