"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = [
    {
      id: 1,
      title: "TECHSPARK 2026",
      date: "Oct 26, 2026",
      time: "10:00 AM",
      location: "Main Auditorium",
      image: "/events/summit.jpg", // Place in public/events/
      type: "upcoming",
      desc: "Join us for keynote speakers from leading tech companies and networking opportunities."
    },
    {
      id: 2,
      title: "Startup Pitch Competition",
      date: "Nov 08, 2026",
      time: "02:00 PM",
      location: "Innovation Lab",
      image: "/events/pitch.jpg",
      type: "upcoming",
      desc: "Witness innovative startups present their groundbreaking ideas to industry experts."
    },
    {
      id: 3,
      title: "AI Hackathon 2025",
      date: "Jan 15, 2025",
      time: "09:00 AM",
      location: "Tech Center",
      image: "/events/hackathon.jpg",
      type: "past",
      desc: "A 48-hour challenge to build AI solutions for real-world problems."
    }
  ];

  const filteredEvents = events.filter(event => event.type === activeTab);

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white pt-24 pb-20 px-6">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 uppercase">
          Events
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto tracking-widest text-sm uppercase">
          Workshops, hackathons, competitions, and innovation challenges
        </p>
      </div>

      {/* FILTER TABS */}
      <div className="flex justify-center gap-4 mb-16">
        <button 
          onClick={() => setActiveTab('upcoming')}
          className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'upcoming' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
        >
          Upcoming Events
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'past' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
        >
          Past Events
        </button>
      </div>

      {/* EVENTS GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: any }) {
  return (
    <div className="glass-card group flex flex-col rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-400/30 transition-all duration-500">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 animate-pulse z-0" />
        {/* If you don't have images yet, this colored overlay acts as a placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1e] to-transparent z-10" />
        <Image 
          src={event.image} 
          alt={event.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
          <span className="flex items-center gap-1"><Calendar size={12}/> {event.date}</span>
          <span className="flex items-center gap-1"><Clock size={12}/> {event.time}</span>
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{event.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{event.desc}</p>
        
        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-gray-500"><MapPin size={14} className="text-purple-500"/> {event.location}</span>
          <button className="text-cyan-400 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
            VIEW DETAILS <ArrowRight size={14}/>
          </button>
        </div>
      </div>
    </div>
  );
}