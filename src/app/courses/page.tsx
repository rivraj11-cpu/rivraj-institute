import React from "react";
import Link from "next/link";
import { COURSES_DATA } from "@/data/courses";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "All Courses | Rivraj Institute Shikohabad",
  description: "Browse all 13 competitive exam courses offered at Rivraj Institute Shikohabad under Rahul Raj Sir.",
};

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest font-bold">
          Complete Program Catalog
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          Our Comprehensive Coaching Programs
        </h1>
        <p className="text-gray-400 text-sm">
          Select your target examination below to view detailed syllabi, fee structures, and batch timings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES_DATA.map((c) => (
          <div
            key={c.slug}
            className="rounded-2xl bg-luxury-slate/60 border border-white/10 p-6 flex flex-col justify-between hover:border-luxury-gold transition-all"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-mono font-bold text-luxury-gold px-2.5 py-1 rounded bg-luxury-gold/10">
                  {c.duration}
                </span>
                <span className="text-xs text-gray-400 font-mono">{c.batchTiming}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
              <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">{c.overview}</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-gray-400 block">Tuition Fee</span>
                <span className="text-base font-extrabold text-luxury-gold">{c.fees}</span>
              </div>
              <Link
                href={`/courses/${c.slug}`}
                className="px-4 py-2 rounded-lg bg-gold-gradient text-black text-xs font-bold hover:scale-105 transition-transform"
              >
                View Syllabus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
