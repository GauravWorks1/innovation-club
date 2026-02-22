"use client";
import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0b1e]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap size={24} fill="white" />
          </div>
          <div className="leading-tight font-bold text-xl tracking-tight">
            Innovation<br/><span className="font-light">Club</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="/team" className="hover:text-cyan-400 transition">Team</Link>
          <Link href="/events" className="hover:text-cyan-400 transition">Events</Link>
          <Link href="/projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="/gallery" className="hover:text-cyan-400 transition">Gallery</Link>
          <Link href="/achievements" className="hover:text-cyan-400 transition">Achievements</Link>
          <Link href="/announcements" className="hover:text-cyan-400 transition">Announcements</Link>
          <Link href="/industry" className="hover:text-cyan-400 transition">Industry</Link>
          <Link href="/resources" className="hover:text-cyan-400 transition">Resources</Link>
          <Link href="/join" className="bg-cyan-500/10 border border-cyan-500/50 px-4 py-2 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">Join Us</Link>
        </div>
      </div>
    </nav>
  );
}