import React from "react";
import Link from "next/link";
import { COURSES_DATA } from "@/data/courses";
import { CheckCircle2, Star, ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const featuredCourses = COURSES_DATA.slice(0, 6);

  return (
    <div className="space-y-24 pb-20">
      <section className="relative pt-12 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,transparent_70%)] -z-10" />

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Admissions Open For New 2026-2027 Batches
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            सरकारी नौकरी में निश्चित सफलता, <br />
            <span className="bg-gold-metallic bg-clip-text text-transparent">
              राहुल राज सर
            </span>{" "}
            के मार्गदर्शन में
          </h1>

          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            SSC, UP Police, Railway, Banking एवं Teaching (CTET/UPTET) परीक्षाओं के लिए 
            शिकोहाबाद का सबसे विश्वसनीय कोचिंग संस्थान। 8:00 AM से नया फ्रेश बैच प्रारंभ।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="tel:+918445395425"
              className="px-8 py-3.5 rounded-full bg-gold-gradient text-black font-extrabold text-sm shadow-luxury-gold hover:scale-105 transition-transform"
            >
              Call Now: +91-8445395425
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/20 hover:border-luxury-gold transition-all"
            >
              Book Free Demo Class
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-luxury-slate/60 border border-white/10 backdrop-blur-xl">
              <div className="text-2xl font-black text-luxury-gold">1,250+</div>
              <div className="text-xs text-gray-400 font-medium">Final Selections</div>
            </div>
            <div className="p-4 rounded-2xl bg-luxury-slate/60 border border-white/10 backdrop-blur-xl">
              <div className="text-2xl font-black text-white">08:00 AM</div>
              <div className="text-xs text-gray-400 font-medium">Daily Fresh Batch</div>
            </div>
            <div className="p-4 rounded-2xl bg-luxury-slate/60 border border-white/10 backdrop-blur-xl">
              <div className="text-2xl font-black text-luxury-gold">100%</div>
              <div className="text-xs text-gray-400 font-medium">OMR Mock Simulation</div>
            </div>
            <div className="p-4 rounded-2xl bg-luxury-slate/60 border border-white/10 backdrop-blur-xl">
              <div className="text-2xl font-black text-white">9+ Years</div>
              <div className="text-xs text-gray-400 font-medium">Mentorship Legacy</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-luxury-gold text-xs font-mono font-bold tracking-widest uppercase">
              About Rivraj Institute
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Shikohabad's Center of Excellence for Competitive Aspirants
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Rivraj Institute provides comprehensive preparation for all major central and state government recruitment exams. 
              We bridge the gap between hard work and selection through scientific time management, pattern-based notes, and intensive mock drills.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>Topic-wise conceptual clarity with speed-calculation shortcut tricks</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>Weekly OMR based real examination simulation with instant ranking</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>Dedicated self-study library and doubt resolution counter</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-1 bg-gradient-to-tr from-luxury-gold/40 to-transparent">
            <div className="rounded-[22px] bg-luxury-slate p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-luxury-gold/20 flex items-center justify-center text-luxury-gold font-black text-2xl border border-luxury-gold/30">
                  R
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Shikohabad Campus</h3>
                  <p className="text-xs text-gray-400">Near Shokiram Petrol Pump, NH-19</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Morning Session:</span>
                  <strong className="text-luxury-gold">08:00 AM - 12:00 PM</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Afternoon Session:</span>
                  <strong className="text-luxury-gold">01:00 PM - 05:00 PM</strong>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full block text-center py-3 rounded-xl bg-gold-gradient text-black font-extrabold text-xs"
              >
                Locate Campus On Google Maps
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-luxury-gold text-xs font-mono font-bold tracking-widest uppercase">
              Targeted Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Top Competitive Exam Batches
            </h2>
          </div>
          <Link
            href="/courses"
            className="mt-4 md:mt-0 text-sm font-bold text-luxury-gold hover:underline inline-flex items-center gap-1"
          >
            View All 13 Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((c) => (
            <div
              key={c.slug}
              className="rounded-2xl bg-luxury-slate/60 border border-white/10 hover:border-luxury-gold/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury-gold"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-mono font-bold text-luxury-gold px-2.5 py-1 rounded bg-luxury-gold/10">
                    {c.duration}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{c.batchTiming.split("-")[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">{c.overview}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-400 block">Total Tuition</span>
                  <span className="text-base font-extrabold text-luxury-gold">{c.fees}</span>
                </div>
                <Link
                  href={`/courses/${c.slug}`}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-gold-gradient hover:text-black text-white text-xs font-bold transition-all"
                >
                  Course Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
