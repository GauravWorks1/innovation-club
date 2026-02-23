"use client";
import React, { useState } from 'react';
import { Camera, Maximize2, Filter, Zap } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Workshops', 'Hackathons', 'Guest Lectures', 'Competitions', 'Field Visits'];

  // Placeholder data - replace 'image' with real paths later
  const galleryItems = [
    { id: 1, title: "Robotics Workshop", category: "Workshops", size: "large" },
    { id: 2, title: "AI Hackathon", category: "Hackathons", size: "small" },
    { id: 3, title: "Industry Visit", category: "Field Visits", size: "medium" },
    { id: 4, title: "Cybersecurity Talk", category: "Guest Lectures", size: "medium" },
    { id: 5, title: "Code Relay", category: "Competitions", size: "small" },
    { id: 6, title: "IoT Boot Camp", category: "Workshops", size: "large" },
  ];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white pt-24 pb-20 px-6">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 uppercase">
          Gallery
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto tracking-[0.2em] text-xs uppercase border-y border-white/10 py-4">
          Capturing moments of innovation, collaboration, and achievement
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
              filter === cat 
              ? 'bg-cyan-500 border-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]' 
              : 'bg-white/5 border-white/10 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MASONRY-STYLE GRID */}
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function GalleryCard({ item }: { item: any }) {
  return (
    <div className="break-inside-avoid group relative rounded-3xl overflow-hidden border border-white/5 bg-white/5 aspect-video flex flex-col items-center justify-center transition-all duration-500 hover:border-cyan-500/50">
      
      {/* Animated Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 group-hover:opacity-100 transition-opacity" />
      
      {/* Tech Interface Elements */}
      <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 border-t border-l border-cyan-500" />
      </div>
      <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 border-b border-r border-purple-500" />
      </div>

      {/* Center Icon */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-white/20 group-hover:text-cyan-400/80 transition-all duration-500 scale-100 group-hover:scale-110">
        <Camera size={48} strokeWidth={1} />
        <span className="text-[10px] font-mono tracking-[0.5em] uppercase">Media_Pending</span>
      </div>

      {/* Overlay Info */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1e] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-cyan-400 font-mono text-[10px] mb-2 uppercase tracking-widest">{item.category}</p>
          <h3 className="text-xl font-bold mb-4">{item.title}</h3>
          <div className="flex items-center justify-between">
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-75" />
             </div>
             <Maximize2 size={16} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}