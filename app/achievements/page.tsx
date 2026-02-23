"use client";
import React from 'react';
import { Trophy, Award, Star, ExternalLink, ShieldCheck } from 'lucide-react';

export default function AchievementsPage() {
  // Static interface data
  const achievements = [
    {
      id: 1,
      title: "xyz",
      organization: "xyz",
      date: "May 2023",
      tag: "Competition wins",
      desc: "Our club's robotics team secured first place in the national competition, showcasing innovative design and programming skills."
    },
    {
      id: 2,
      title: "abc",
      organization: "abc",
      date: "December 2022",
      tag: "Student awards",
      desc: "Recognized for outstanding contributions to local community service initiatives, accumulating over 500 hours of volunteer work."
    },
    {
      id: 3,
      title: "pqr",
      organization: "pqr",
      date: "March 2023",
      tag: "Competition wins",
      desc: "Developed a sustainable energy solution that was recognized as the most innovative project among 50+ entries."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white pt-24 pb-20 px-6">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 uppercase">
          Achievements
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto tracking-widest text-sm uppercase">
          Celebrating excellence, innovation, and recognition
        </p>
      </div>

      {/* LIST CONTAINER */}
      <div className="max-w-5xl mx-auto space-y-8">
        {achievements.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function AchievementCard({ item }: { item: any }) {
  return (
    <div className="glass-card group relative p-8 rounded-3xl border border-white/5 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all" />
      
      <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
        {/* ICON BOX */}
        <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <Trophy size={32} className="text-white" />
        </div>

        {/* CONTENT */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-purple-400 font-mono text-[10px] uppercase tracking-widest mt-1">
                {item.organization}
              </p>
            </div>
            <div className="text-right">
              <span className="text-gray-500 font-mono text-xs block">{item.date}</span>
            </div>
          </div>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-[10px] font-bold text-cyan-400 uppercase tracking-tighter">
              {item.tag}
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
            {item.desc}
          </p>

          <div className="mt-6 flex items-center gap-6">
            <button className="flex items-center gap-2 text-[10px] font-bold text-cyan-400 hover:text-white transition-colors uppercase tracking-widest">
              View Proof <ExternalLink size={14} />
            </button>
            <div className="flex items-center gap-1 text-[10px] text-gray-600 uppercase tracking-widest">
              <ShieldCheck size={14} className="text-green-500/50" /> Verified
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Interface Detail */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </div>
  );
}