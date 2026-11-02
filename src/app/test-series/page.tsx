"use client";

import React, { useState } from "react";
import { RotateCcw, Calendar } from "lucide-react";

export default function TestSeriesPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const handleSelect = (qNum: number, option: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qNum]: option }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest font-bold">
          Testing Methodology
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">OMR Practice & Mock Exam Schedule</h1>
        <p className="text-gray-400 text-sm">
          Real offline examination simulation with timed tests, negative marking, and prompt rank list declaration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 p-6 rounded-3xl bg-luxury-slate/60 border border-white/10 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-white">Interactive OMR Sheet Simulator</h2>
              <p className="text-xs text-gray-400">Practice bubble filling to avoid exam errors</p>
            </div>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg border border-white/20 text-xs font-mono text-gray-300 hover:text-white flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/5 space-y-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((q) => (
              <div key={q} className="flex items-center justify-between py-1 border-b border-white/5 text-xs">
                <span className="text-gray-400 font-mono w-8">Q.{q}</span>
                <div className="flex gap-4">
                  {["A", "B", "C", "D"].map((opt) => {
                    const isSelected = selectedAnswers[q] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(q, opt)}
                        className={`w-7 h-7 rounded-full text-xs font-mono font-bold border transition-all ${
                          isSelected
                            ? "bg-black text-white border-luxury-gold shadow-[inset_0_0_8px_#D4AF37]"
                            : "border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold/20"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            *Offline batches at Rivraj Institute complete 150-question mock tests every Sunday on standardized OMR sheets.
          </p>
        </div>

        <div className="lg:col-span-5 p-6 rounded-3xl bg-luxury-slate/60 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-luxury-gold">
            <Calendar className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">Weekly Test Schedule</h2>
          </div>

          <div className="space-y-3 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-luxury-gold font-mono font-bold block">Sunday • 08:30 AM</span>
              <strong className="text-white text-sm block mt-1">UP Police Constable Full Mock</strong>
              <span className="text-gray-400">150 Questions • 300 Marks • Negative Marking Applied</span>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-luxury-gold font-mono font-bold block">Tuesday • 04:00 PM</span>
              <strong className="text-white text-sm block mt-1">SSC GD Special Speed Drill</strong>
              <span className="text-gray-400">80 Questions • 60 Minutes Time Constraint</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
