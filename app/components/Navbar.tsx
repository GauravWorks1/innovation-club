"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Define all your links in one array for easy management
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Events', href: '/events' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Industry', href: '/industry' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/10 bg-[#0a0b1e]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap size={24} fill="white" />
          </div>
          <div className="leading-tight font-bold text-xl tracking-tight hidden sm:block">
            Innovation<br/><span className="font-light">Club</span>
          </div>
        </Link>
        
        {/* DESKTOP NAVIGATION (Visible on lg screens and up) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[10px] uppercase tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-cyan-400 transition whitespace-nowrap">
              {link.name}
            </Link>
          ))}
          <Link href="/join" className="bg-cyan-500/10 border border-cyan-500/50 px-4 py-2 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
            Join Us
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON (Visible only on small screens) */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU PANEL */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#0a0b1e] border-b border-white/10 shadow-2xl z-[99]">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-sm font-medium tracking-widest text-gray-300 hover:text-cyan-400 py-2 border-b border-white/5 uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/join" 
              onClick={() => setIsOpen(false)}
              className="bg-cyan-500 text-black text-center font-bold py-4 rounded-lg tracking-widest mt-2"
            >
              JOIN US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}