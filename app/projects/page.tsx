"use client";
import React from 'react';
import { Plus, Lightbulb, ExternalLink, Code2, Users } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Smart Campus Navigation",
      desc: "An interactive mobile application designed to help new students navigate the university campus efficiently.",
      tech: "React Native, Google Maps API, Firebase",
      team: "Alice Johnson, Bob Williams",
    },
    {
      title: "Eco-Friendly Waste Sorter",
      desc: "An AI-powered robotic arm that automatically sorts recyclable materials from general waste.",
      tech: "Python, TensorFlow, Raspberry Pi",
      team: "David Lee, Emily Chen",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white pt-24 pb-20 px-6">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 uppercase">
          Project Showcase
        </h1>
        <p className="text-gray-400 mb-10 tracking-widest text-sm uppercase">
          Innovative student projects pushing the boundaries of technology
        </p>

        {/* SUBMIT PROJECT BUTTON WITH YOUR LINK */}
        <a 
          href="https://forms.gle/CNEvDabGsmteDDmm6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 uppercase text-sm"
        >
          <Plus size={18} /> Submit Your Project
        </a>
      </div>

      {/* PROJECTS GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-cyan-400/30 transition-all duration-500 bg-white/5">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
        <Lightbulb size={24} className="text-white" />
      </div>

      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3 text-cyan-400 text-[10px] font-mono uppercase">
          <Code2 size={14} /> {project.tech}
        </div>
        <div className="flex items-center gap-3 text-purple-400 text-[10px] font-mono uppercase">
          <Users size={14} /> {project.team}
        </div>
      </div>

      <button className="flex items-center gap-2 text-cyan-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
        View Details <ExternalLink size={14} />
      </button>
    </div>
  );
}