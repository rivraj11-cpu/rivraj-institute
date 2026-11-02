"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    city: "Shikohabad",
    course: "UP Police",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.from("admissions").insert([
        {
          full_name: formData.name,
          mobile: formData.mobile,
          whatsapp: formData.whatsapp || formData.mobile,
          city: formData.city,
          course: formData.course,
          message: formData.message,
        },
      ]);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest font-bold">
          Direct Connect
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">Campus Location & Online Admission</h1>
        <p className="text-gray-400 text-sm">
          Fill out the admission registration form below or visit our Shikohabad campus for personal counseling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 p-8 rounded-3xl bg-luxury-slate/60 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Online Admission / Demo Booking</h2>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-luxury-gold/10 border border-luxury-gold/40 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-luxury-gold mx-auto" />
              <h3 className="text-lg font-bold text-white">Application Received Successfully!</h3>
              <p className="text-xs text-gray-300">
                Our counseling team and Rahul Raj Sir's office will reach out to you at{" "}
                <strong className="text-luxury-gold">{formData.mobile}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-luxury-gold outline-none"
                    placeholder="e.g. Rahul Kumar"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Calling Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-luxury-gold outline-none"
                    placeholder="+91-8445395425"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1">Target Examination *</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-luxury-gold outline-none"
                >
                  <option value="UP Police">UP Police Constable & SI</option>
                  <option value="SSC GD">SSC GD Constable</option>
                  <option value="SSC CGL">SSC CGL / CHSL</option>
                  <option value="Railway">Railway RRB NTPC / Group D</option>
                  <option value="Teaching">CTET / UPTET / Super TET</option>
                  <option value="Lekhpal">UP Lekhpal / PET</option>
                  <option value="Banking">Banking (IBPS / SBI)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gold-gradient text-black font-extrabold text-xs shadow-luxury-gold hover:scale-101 transition-all flex items-center justify-center gap-2"
              >
                {loading ? "Submitting..." : <><Send className="w-4 h-4" /> Submit Application</>}
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-luxury-slate/60 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white">Campus Headquarters</h3>
            
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <p>
                  Near Shokiram Petrol Pump, NH-19, Subhash Tiraha, Shaihajalpur, Shikohabad, Uttar Pradesh - 283135
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-luxury-gold shrink-0" />
                <p>Daily Batches Start at 08:00 AM • Open till 07:00 PM</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="tel:+918445395425" className="font-mono text-luxury-gold font-bold text-sm">+91-8445395425</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
