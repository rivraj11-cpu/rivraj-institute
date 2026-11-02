"use client";

import React, { useState } from "react";
import { Trophy } from "lucide-react";

const SAMPLE_RESULTS = [
  { name: "Amit Sharma", exam: "UP Police", post: "Civil Police Constable", roll: "RIV-UPP-101", year: "2024", rank: "District Rank 1" },
  { name: "Pooja Verma", exam: "SSC GD", post: "CISF Constable", roll: "RIV-GD-204", year: "2024", rank: "AIR 142" },
  { name: "Vikram Yadav", exam: "Railway", post: "NTPC Station Master", roll: "RIV-RLY-318", year: "2023", rank: "Level 6 Selected" },
  { name: "Neha Baghel", exam: "Teaching", post: "UPTET / CTET Primary", roll: "RIV-TET-409", year: "2023", rank: "132/150 Score" },
];

export default function ResultsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? SAMPLE_RESULTS : SAMPLE_RESULTS.filter((r) => r.exam === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest font-bold">
          Proven Track Record
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">Student Selections & Rank Holders</h1>
        <p className="text-gray-400 text-sm">
          Every selection is a testimony to our students' sheer commitment and Rahul Raj Sir's strategic mentoring.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {["All", "UP Police", "SSC GD", "Railway", "Teaching"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filter === cat
                ? "bg-gold-gradient text-black"
                : "bg-white/5 text-gray-300 border border-white/10 hover:border-luxury-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-luxury-slate/60 border border-white/10 space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-luxury-gold/20 flex items-center justify-center text-luxury-gold font-bold">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-luxury-gold px-2 py-0.5 rounded bg-luxury-gold/10">
                {item.year}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">{item.name}</h3>
              <p className="text-xs text-luxury-gold font-medium">{item.post}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{item.exam} Examination</p>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs text-gray-400 font-mono">
              <span>Roll: {item.roll}</span>
              <span className="text-white font-bold">{item.rank}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
