import React from "react";

export const metadata = {
  title: "Campus Gallery | Rivraj Institute Shikohabad",
  description: "View classroom photos, Sunday mock exam halls, seminars, and student activities at Rivraj Institute.",
};

export default function GalleryPage() {
  const images = [
    { title: "Daily 8:00 AM Morning Batch Lecture", cat: "Classrooms" },
    { title: "Sunday OMR Mock Test Session", cat: "Mock Exams" },
    { title: "Student Guidance & Counseling Desk", cat: "Activities" },
    { title: "Selected Candidates Felicitation Ceremony", cat: "Events" },
    { title: "Speed Maths Workshop by Rahul Sir", cat: "Seminars" },
    { title: "Self Study Library & Research Chamber", cat: "Infrastructure" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest font-bold">
          Campus Life
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">Institute Gallery & Events</h1>
        <p className="text-gray-400 text-sm">Glimpses into our academic atmosphere, testing routines, and campus events.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="rounded-2xl bg-luxury-slate/60 border border-white/10 overflow-hidden group">
            <div className="h-56 bg-luxury-dark/90 flex flex-col items-center justify-center p-6 text-center border-b border-white/5 relative">
              <span className="text-xs text-luxury-gold font-mono uppercase tracking-wider mb-2">{img.cat}</span>
              <p className="text-sm font-bold text-white">{img.title}</p>
            </div>
            <div className="p-3 bg-black/60 flex justify-between items-center text-xs text-gray-400 font-mono">
              <span>Shikohabad Campus</span>
              <span className="text-luxury-gold">Rivraj Institute</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
