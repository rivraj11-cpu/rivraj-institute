"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [admissions, setAdmissions] = useState([
    { id: "1", name: "Ramesh Yadav", mobile: "+91-8445395425", course: "UP Police", city: "Shikohabad", status: "New" },
    { id: "2", name: "Sneha Baghel", mobile: "+91-9876543210", course: "CTET", city: "Firozabad", status: "Contacted" },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest font-bold">
            SYSTEM CONTROL
          </span>
          <h1 className="text-2xl font-bold text-white">Rivraj Institute Admin Panel</h1>
        </div>
        <Link href="/" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
          Exit Admin
        </Link>
      </div>

      <div className="p-6 rounded-3xl bg-luxury-slate/60 border border-white/10 space-y-4">
        <h2 className="text-lg font-bold text-white">Recent Admission Leads</h2>
        <table className="w-full text-left text-xs text-gray-300 font-mono">
          <thead>
            <tr className="text-luxury-gold border-b border-white/10">
              <th className="p-2">Name</th>
              <th className="p-2">Mobile</th>
              <th className="p-2">Course</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map((row) => (
              <tr key={row.id} className="border-b border-white/5">
                <td className="p-2 text-white">{row.name}</td>
                <td className="p-2">{row.mobile}</td>
                <td className="p-2 text-luxury-gold">{row.course}</td>
                <td className="p-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
