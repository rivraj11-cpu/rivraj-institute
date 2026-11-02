import React from "react";
import { notFound } from "next/navigation";
import { COURSES_DATA } from "@/data/courses";
import { Clock, Calendar, CheckCircle2, Phone, MessageCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES_DATA.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const course = COURSES_DATA.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title} Coaching in Shikohabad | Rivraj Institute`,
    description: course.overview,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = COURSES_DATA.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-white/10 pb-8">
        <div className="inline-block px-3 py-1 rounded bg-luxury-gold/10 text-luxury-gold text-xs font-mono font-bold">
          {course.category}
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">{course.title}</h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{course.overview}</p>

        <div className="flex flex-wrap gap-6 pt-4 text-xs font-mono text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-luxury-gold" />
            <span>Batch Timing: <strong className="text-white">{course.batchTiming}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-luxury-gold" />
            <span>Course Duration: <strong className="text-white">{course.duration}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Tuition Fee: <strong className="text-luxury-gold text-sm">{course.fees}</strong></span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Detailed Course Syllabus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.syllabus.map((item, index) => (
            <div key={index} className="p-4 rounded-xl bg-luxury-slate/60 border border-white/10 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-luxury-gold/20 text-luxury-gold font-bold text-xs flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <p className="text-xs text-gray-200 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-luxury-slate border border-luxury-gold/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">Enroll In This Batch</h3>
          <p className="text-xs text-gray-400 mt-1">Visit campus or enquire instantly via call or WhatsApp.</p>
        </div>
        <div className="flex gap-3">
          <a
            href="tel:+918445395425"
            className="px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" /> Call: +91-8445395425
          </a>
          <a
            href={`https://wa.me/918445395425?text=Hello%20Rahul%20Sir%2C%20mujhe%20${encodeURIComponent(course.title)}%20batch%20join%20karna%20hai`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
