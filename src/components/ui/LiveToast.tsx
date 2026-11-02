"use client";

import React, { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ALERTS = [
  { title: "Admission Enrolled", desc: "Aman Yadav joined UP Police 8:00 AM Batch" },
  { title: "Test Result Published", desc: "Sunday SSC GD OMR Mock Test Ranklist Live" },
  { title: "Free Demo Booked", desc: "Priya S. from Shikohabad reserved a Demo Seat" },
  { title: "Railway Batch Alert", desc: "RRB NTPC New Morning Slot filling fast" }
];

export const LiveToast = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
      setIndex((prev) => (prev + 1) % ALERTS.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside aria-label="Institute activity notifications">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 max-w-xs bg-luxury-slate/95 border border-luxury-gold/40 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-luxury-gold/20 border border-luxury-gold/40 flex items-center justify-center text-luxury-gold shrink-0">
              <Zap className="w-5 h-5 fill-luxury-gold" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">{ALERTS[index].title}</p>
              <p className="text-[11px] text-gray-300 leading-tight mt-0.5">{ALERTS[index].desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
