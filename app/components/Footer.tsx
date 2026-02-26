"use client";
import React from 'react';
import Link from 'next/link';
import { Zap, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050614] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-blue-500" />
            <span className="font-bold text-xl">SIC-TGPCET</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Empowering students to innovate, research, and solve real-world problems through collaboration and cutting-edge technology.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Facebook size={18}/>} />
            <SocialIcon icon={<Twitter size={18}/>} />
            <SocialIcon icon={<Instagram size={18}/>} />
            <SocialIcon icon={<Linkedin size={18}/>} />
            <SocialIcon icon={<Github size={18}/>} />
          </div>
        </div>

        <FooterColumn title="Quick Links" links={['About', 'Team', 'Events', 'Projects']} />
        <FooterColumn title="Resources" links={['Gallery', 'Achievements', 'Resources', 'Industry Partners']} />
        
        <div>
          <h4 className="font-bold mb-6">Contact Us</h4>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-3"><Mail size={16} className="text-cyan-400"/> tgpcetideahub@gmail.com</div>
            <div className="flex items-start gap-3"><MapPin size={16} className="text-cyan-400"/> AICTE ideaLab, Building A<br/>University Campus</div>
            <button className="mt-4 border border-cyan-400/50 text-cyan-400 px-6 py-2 hover:bg-cyan-400 hover:text-black transition text-sm rounded">Get in Touch</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex justify-between text-[10px] text-gray-600 uppercase tracking-widest">
        <p>© 2026 Student Innovation Club. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/announcements">Announcements</Link>
          <Link href="/join">Join Us</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition cursor-pointer">
      {icon}
    </div>
  );
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div>
      <h4 className="font-bold mb-6">{title}</h4>
      <ul className="space-y-3 text-sm text-gray-500">
        {links.map(link => (
          <li key={link}>
            <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-cyan-400 transition">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}