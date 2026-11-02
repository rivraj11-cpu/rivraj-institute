import React from "react";
import { Target, Award } from "lucide-react";

export const metadata = {
  title: "About Us | Rivraj Institute Shikohabad",
  description: "Learn about the history, vision, and mission of Rivraj Institute Shikohabad, spearheaded by Rahul Raj Sir.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest font-bold">
          Our Identity & Purpose
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          About Rivraj Institute Shikohabad
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Established to empower aspirants from Shikohabad and surrounding areas with Delhi-standard 
          competitive exam preparation at affordable fees under Rahul Raj Sir.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Journey & Philosophy</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Rivraj Institute was born out of a clear realization: talented students in Shikohabad and Firozabad district 
            were spending lakhs migrating to metro cities for coaching that often lacked individual attention. 
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Under the visionary leadership of Rahul Raj Sir, Rivraj Institute built an ecosystem that blends high-level 
            arithmetic short-tricks with rigorous weekly OMR testing, making government exam preparation accessible and outcome-driven.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-luxury-slate/60 border border-luxury-gold/30 space-y-6">
          <div className="flex items-start gap-4">
            <Target className="w-8 h-8 text-luxury-gold shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-white">Our Mission</h3>
              <p className="text-xs text-gray-300 leading-relaxed mt-1">
                To maximize candidate selection rates across SSC, UP Police, Banking, and Teaching exams through 
                disciplined training, zero-cost revision notes, and honest mentoring.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-luxury-gold shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-white">Our Vision</h3>
              <p className="text-xs text-gray-300 leading-relaxed mt-1">
                To stand as Uttar Pradesh's most reputed regional center for excellence in competitive examinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
