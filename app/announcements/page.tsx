"use client";
import React from 'react';
import { Bell, Calendar, ArrowUpRight, Megaphone, Info } from 'lucide-react';

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      type: "Meeting",
      status: "Active",
      title: "Core Committee Strategy Meet",
      date: "Oct 30, 2026",
      desc: "Join us for our monthly innovation planning session. We'll discuss new R&D initiatives and upcoming hackathon schedules.",
    },
    {
      id: 2,
      type: "Event",
      status: "Active",
      title: "Annual Tech Symposium",
      date: "Nov 15, 2026",
      desc: "Get ready for the biggest event of the year! Featuring live project demos, guest speakers, and industry networking.",
    },
    {
      id: 3,
      type: "Opportunity",
      status: "Active",
      title: "Winter Internship Drive",
      date: "Dec 01, 2026",
      desc: "Apply for exclusive research internships with our industry partners. Open to all second and third-year students.",
    },
    {
      id: 4,
      type: "Update",
      status: "Active",
      title: "New Lab Equipment Arrival",
      date: "Oct 25, 2026",
      desc: "The new high-performance computing cluster is now live. Contact the lab head for access credentials.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white pt-24 pb-20 px-6">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 uppercase">
          Announcements
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto tracking-widest text-sm uppercase">
          Stay updated with the latest news, meetings, and opportunities
        </p>
      </div>

      {/* ANNOUNCEMENT GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {announcements.map((item) => (
          <AnnouncementCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function AnnouncementCard({ item }: { item: any }) {
  return (
    <div className="glass-card group relative p-8 rounded-3xl border border-white/5 hover:border-cyan-400/30 transition-all duration-500 bg-white/5">
      
      {/* Top Status Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Bell size={20} />
          </div>
          <span className="px-3 py-1 rounded-lg bg-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-widest border border-purple-500/30">
            {item.type}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500 text-[10px] font-mono uppercase tracking-widest">{item.status}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
        {item.title}
      </h3>
      
      <div className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-4">
        <Calendar size={14} />
        {item.date}
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-8">
        {item.desc}
      </p>

      {/* Action Footer */}
      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
        <button className="flex items-center gap-2 text-[10px] font-bold text-cyan-400 hover:text-white transition-colors uppercase tracking-[0.2em]">
          More Information <ArrowUpRight size={14} />
        </button>
        <Info size={16} className="text-gray-700" />
      </div>

      {/* Corner interface detail */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
      </div>
    </div>
  );
}