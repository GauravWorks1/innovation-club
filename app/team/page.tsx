"use client";
import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Krunal Sawarkar",
      role: "President",
      image: "/team/Krunal.jpg", // Place images in public/team/
      github: "#",
      linkedin: "#",
      skills: ["??", "?", "?"]
    },
    {
      name: "Gaurav Dhawas",
      role: "technical lead",
      image: "/team/Gaurav.jpg",
      github: "#",
      linkedin: "#",
      skills: ["Python", "Data Science", "web development"]
    },
    // Add more members here
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          OUR ARCHITECTS
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
           The minds behind the Student innovation council
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

function TeamCard({ member }: { member: any }) {
  return (
    <div className="glass-card group relative p-6 rounded-3xl border border-white/5 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
      
      <div className="relative z-10">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 border border-white/10">
          <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder while loading */}
          <Image 
            src={member.image} 
            alt={member.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
        <p className="text-cyan-400 font-mono text-xs uppercase tracking-tighter mb-4">{member.role}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {member.skills.map((skill: string) => (
            <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 border border-white/10">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <SocialLink icon={<Github size={18}/>} href={member.github} />
          <SocialLink icon={<Linkedin size={18}/>} href={member.linkedin} />
          <SocialLink icon={<Mail size={18}/>} href={`mailto:#`} />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: any, href: string }) {
  return (
    <a href={href} className="text-gray-500 hover:text-cyan-400 transition-colors">
      {icon}
    </a>
  );
}