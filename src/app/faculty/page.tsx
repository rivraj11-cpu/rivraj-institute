import React from "react";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Faculty Profiles | Rivraj Institute Shikohabad",
  description: "Meet the specialized faculty members and mentors at Rivraj Institute led by Rahul Raj Sir.",
};

export default function FacultyPage() {
  const mentors = [
    {
      name: "Rahul Raj Sir",
      role: "Founder, Director & Lead Strategist",
      experience: "9+ Years",
      specialization: "Quantitative Aptitude, Reasoning, Speed Math & Competitive Strategy",
      bio: "Master of speed mathematics shortcuts and reasoning concepts. Personally guided hundreds of successful candidates in SSC and UP Police.",
    },
    {
      name: "Dr. V. K. Mishra",
      role: "Senior General Studies Faculty",
      experience: "8+ Years",
      specialization: "Indian Constitution (Polity), Mool Vidhi, Geography & History",
      bio: "Specializes in UP SI Mool Vidhi and Constitutional articles with analytical clarity and case study illustrations.",
    },
    {
      name: "Suman Sharma Ma'am",
      role: "Hindi & Teaching Pedagogy Faculty",
      experience: "6+ Years",
      specialization: "Samanya Hindi Grammar, Sahitya, Child Development & Pedagogy (CDP)",
      bio: "Expert in CTET and UPTET CDP theories and scoring techniques for state recruitment Hindi papers.",
    },
    {
      name: "Er. Rajesh Rathore",
      role: "General Science Specialist",
      experience: "5+ Years",
      specialization: "Physics, Applied Chemistry, NCERT Class 10 Biology",
      bio: "Simplifies science concepts for Railway NTPC and Group D aspirants with real-world examples and numerical problem solving.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-luxury-gold font-mono text-xs uppercase tracking-widest font-bold">
          Mentorship Team
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">Our Dedicated Faculty</h1>
        <p className="text-gray-400 text-sm">
          Subject specialists committed to breaking down difficult examination concepts into simple formulas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mentors.map((m, i) => (
          <div key={i} className="p-8 rounded-3xl bg-luxury-slate/60 border border-white/10 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-luxury-gold/20 flex items-center justify-center text-luxury-gold font-bold text-2xl border border-luxury-gold/40">
                {m.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{m.name}</h3>
                <p className="text-xs text-luxury-gold font-mono">{m.role}</p>
                <div className="inline-flex items-center gap-1 text-[11px] text-gray-400 mt-1">
                  <Clock className="w-3 h-3" /> Experience: {m.experience}
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <p className="text-xs text-gray-200">
                <strong className="text-luxury-gold">Subject Expertise:</strong> {m.specialization}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
