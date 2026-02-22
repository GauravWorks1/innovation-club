"use client";
import React from 'react';
import { Rocket, Target, Lightbulb, Users, GraduationCap, Cpu, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white pt-32 pb-20 px-6">
      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
          About Us
        </h1>
        <p className="text-xl text-gray-400 font-light tracking-wide">
          Pioneering innovation and fostering a culture of research among students
        </p>
      </div>

      {/* --- VISION & MISSION SECTION (Cards) --- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-32">
        {/* Vision Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 transition-all group">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <Rocket size={32} />
          </div>
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            To create a culture of innovation, research, and problem-solving among students. We envision a future where every student has the opportunity to transform their ideas into reality, contributing to technological advancement and societal progress through collaborative innovation and cutting-edge research.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-purple-500/50 transition-all group">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <Target size={32} />
          </div>
          <h2 className="text-4xl font-bold text-purple-500 mb-6">Our Mission</h2>
          <ul className="space-y-6">
            <MissionItem text="Promote student research and innovation across all disciplines" />
            <MissionItem text="Connect students with real-world industry problems and challenges" />
            <MissionItem text="Conduct innovation events, workshops, and hackathons" />
            <MissionItem text="Support startup ideas and entrepreneurial ventures" />
          </ul>
        </div>
      </div>

      {/* --- WHAT WE DO SECTION --- */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-16">
          What We <span className="text-cyan-400">Do</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Lightbulb size={28} />} 
            title="Innovation Workshops" 
            desc="Hands-on sessions covering emerging technologies, design thinking, and problem-solving methodologies." 
          />
          <FeatureCard 
            icon={<Users size={28} />} 
            title="Collaborative Projects" 
            desc="Team-based projects that tackle real-world challenges with industry mentorship and guidance." 
          />
          <FeatureCard 
            icon={<Rocket size={28} />} 
            title="Startup Incubation" 
            desc="Support for student entrepreneurs with mentorship, resources, and networking opportunities." 
          />
          <FeatureCard 
            icon={<Target size={28} />} 
            title="Hackathons" 
            desc="Competitive coding events that push boundaries and foster rapid innovation and creativity." 
          />
          <FeatureCard 
            icon={<GraduationCap size={28} />} 
            title="Research Support" 
            desc="Resources and guidance for students pursuing research in various technological domains." 
          />
          <FeatureCard 
            icon={<Cpu size={28} />} 
            title="Industry Connect" 
            desc="Bridge between academia and industry through partnerships, internships, and collaborative projects." 
          />
        </div>
      </div>
    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function MissionItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-4 text-gray-400 group/item">
      <div className="mt-1.5"><ChevronRight size={18} className="text-purple-500" /></div>
      <span className="text-lg group-hover/item:text-white transition-colors">{text}</span>
    </li>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-[#16172d] border border-white/5 rounded-2xl p-8 hover:bg-[#1c1d3a] transition-colors border-b-4 hover:border-b-cyan-400">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}