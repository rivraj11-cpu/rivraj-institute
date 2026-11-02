"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Shield, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"student" | "admin">("student");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/student/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="p-8 rounded-3xl bg-luxury-slate/80 border border-luxury-gold/40 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-luxury-gold/20 flex items-center justify-center text-luxury-gold mx-auto">
            {role === "admin" ? <Shield className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
          </div>
          <h1 className="text-2xl font-bold text-white">
            {role === "admin" ? "Admin Management Portal" : "Student Learning Portal"}
          </h1>
          <p className="text-xs text-gray-400">Sign in to check test scores, notes, and attendance</p>
        </div>

        <div className="flex p-1 rounded-xl bg-black/60 border border-white/5">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
              role === "student" ? "bg-luxury-gold text-black" : "text-gray-400"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
              role === "admin" ? "bg-luxury-gold text-black" : "text-gray-400"
            }`}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1">
              {role === "admin" ? "Admin Email Address" : "Student Roll Number / Mobile"}
            </label>
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-luxury-gold outline-none"
              placeholder={role === "admin" ? "admin@rivrajinstitute.com" : "e.g. RIV-2024-101"}
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1">Security Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-luxury-gold outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gold-gradient text-black font-extrabold text-xs shadow-luxury-gold hover:scale-101 transition-all flex items-center justify-center gap-2"
          >
            Sign In to Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
