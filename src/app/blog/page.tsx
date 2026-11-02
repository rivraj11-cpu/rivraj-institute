import React from "react";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Current Affairs & Exam Updates | Rivraj Institute Shikohabad",
  description: "Daily GK capsules, UP special current affairs, and recruitment notices for competitive exams.",
};

export default function BlogPage() {
  const posts = [
    {
      category: "Daily Current Affairs",
      title: "Today's Current Affairs Capsule: National & UP Special",
      date: "Daily Update",
      desc: "Key national appointments, sports honors, economic updates, and state welfare policies summarized for competitive exams.",
    },
    {
      category: "Exam Strategy",
      title: "60-Day Comprehensive Strategy for UP Police Re-Exam",
      date: "Strategy Guide",
      desc: "Step-by-step scoring framework designed by Rahul Raj Sir to secure 220+ marks safely.",
    },
    {
      category: "Formula Handout",
      title: "Vedic Math Speed Arithmetic & Percentage-to-Fraction Chart",
      date: "Free Resource",
      desc: "Handy PDF containing shortcut squares, cubes up to 50, and percentage conversion formulas.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest font-bold">
          Knowledge Base
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">Daily Current Affairs & Bulletins</h1>
        <p className="text-gray-400 text-sm">Download official notes, check exam dates, and stay ahead of changes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <div key={i} className="p-6 rounded-2xl bg-luxury-slate/60 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-luxury-gold px-2 py-0.5 rounded bg-luxury-gold/10">
                {p.category}
              </span>
              <h3 className="text-lg font-bold text-white mt-3 mb-2">{p.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">{p.desc}</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-gray-400 font-mono">{p.date}</span>
              <button
                type="button"
                className="text-luxury-gold font-bold inline-flex items-center gap-1 hover:underline"
              >
                Read Capsule <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
