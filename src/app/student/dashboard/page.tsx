"use client";

import React from "react";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="p-6 rounded-3xl bg-luxury-slate/60 border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-luxury-gold font-mono text-xs uppercase tracking-wider font-bold">
            STUDENT PORTAL
          </span>
          <h1 className="text-2xl font-bold text-white">Welcome, Saurabh Kumar</h1>
          <p className="text-xs text-gray-400 font-mono mt-0.5">
            Enrolled Batch: <strong className="text-white">UP Police Constable (08:00 AM)</strong> | Roll: RIV-UPP-2026-88
          </p>
        </div>
        <Link href="/" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white">
          Sign Out
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-luxury-slate/40 border border-white/10 space-y-2">
          <span className="text-xs text-gray-400">Latest Sunday Mock Test</span>
          <div className="text-2xl font-black text-luxury-gold">238.5 / 300</div>
          <span className="text-[11px] text-emerald-400 block">Rank #3 in Shikohabad Center</span>
        </div>
        <div className="p-6 rounded-2xl bg-luxury-slate/40 border border-white/10 space-y-2">
          <span className="text-xs text-gray-400">Classroom Attendance</span>
          <div className="text-2xl font-black text-white">96.4%</div>
          <span className="text-[11px] text-gray-400 block">Active 08:00 AM Morning Slot</span>
        </div>
      </div>
    </div>
  );
}
