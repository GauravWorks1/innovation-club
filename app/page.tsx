"use client";
import React from 'react';
import { 
  Globe, Handshake, Zap, Rocket, 
  Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, ChevronRight 
} from 'lucide-react';

export default function InnovationClub() {
  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white selection:bg-cyan-500/30">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0b1e]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap size={24} fill="white" />
            </div>
            <div className="leading-tight font-bold text-xl tracking-tight">
              Innovation<br/><span className="font-light">Club</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[13px] uppercase tracking-widest text-gray-400">
            <a href="#" className="text-cyan-400 border-b border-cyan-400 pb-1">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#team" className="hover:text-white transition">Team</a>
            <a href="#events" className="hover:text-white transition">Events</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#achievements" className="hover:text-white transition">Achievements</a>
            <button className="bg-white/5 border border-white/20 px-4 py-2 hover:bg-white/10 transition">Join Us</button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (Image 1) --- */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
            THE<br />DIGITAL<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              NEXUS
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md border-l-2 border-purple-500 pl-4 mb-10">
            Empowering the next generation of innovators to research, build, and deploy solutions for a complex world.
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-400 text-black font-bold px-8 py-4 flex items-center gap-2 hover:bg-cyan-300 transition">
              INITIATE SEQUENCE <ChevronRight size={20} />
            </button>
            <button className="border border-cyan-400/50 text-cyan-400 font-mono px-8 py-4 hover:bg-cyan-400/10 transition">
              ACCESS DATA {`>_`}
            </button>
          </div>
        </div>

        {/* Visual Element (The Globe from SS1) */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-4 border border-cyan-500/20 rounded-full animate-pulse"></div>
          <div className="w-80 h-80 bg-gradient-to-tr from-purple-900/40 to-cyan-900/40 rounded-full flex items-center justify-center border border-white/10">
             <div className="text-center font-mono text-[10px] text-cyan-400 uppercase tracking-[0.2em]">
                COORD: 34.0522° N <br/>
                STATUS: ACTIVE
             </div>
          </div>
        </div>
      </section>

      {/* --- CORE DIRECTIVES (Image 2 & 3) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-cyan-400 font-mono text-sm tracking-widest">//01 ——</span>
            <h2 className="text-6xl font-bold mt-4 mb-8">CORE<br/>DIRECTIVES</h2>
            <p className="text-gray-400 text-lg">
               We are not just a club; we are an incubator for the next industrial revolution.
            </p>
            
            {/* Stats (Image 3) */}
            <div className="flex gap-12 mt-12">
              <div>
                <div className="text-5xl font-bold text-purple-500">50+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">Projects Shipped</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-400">200+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">Active Members</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <DirectiveCard icon={<Globe />} title="Promote Research" desc="Facilitating student-led research papers and publications." />
            <DirectiveCard icon={<Handshake />} title="Industry Connection" desc="Bridging the gap between academic theory and corporate reality." />
            <DirectiveCard icon={<Zap />} title="Innovation Events" desc="Hosting hackathons, ideathons, and maker faires." />
            <DirectiveCard icon={<Rocket />} title="Startup Support" desc="Providing mentorship and resources for student entrepreneurs." />
          </div>
        </div>
      </section>

      {/* --- FOOTER (Image 4) --- */}
      <footer className="bg-[#050614] border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="text-blue-500" />
              <span className="font-bold text-xl">Innovation Club</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering students to innovate, research, and solve real-world problems through cutting-edge technology.
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
              <div className="flex items-center gap-3"><Mail size={16} className="text-cyan-400"/> innovation@university.edu</div>
              <div className="flex items-start gap-3"><MapPin size={16} className="text-cyan-400"/> Innovation Lab, Building A<br/>University Campus</div>
              <button className="mt-4 border border-cyan-400/50 text-cyan-400 px-6 py-2 hover:bg-cyan-400 hover:text-black transition text-sm">Get in Touch</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex justify-between text-xs text-gray-600 uppercase tracking-widest">
          <p>© 2026 Student Innovation Club. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Announcements</a>
            <a href="#">Join Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function DirectiveCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="glass-card p-6 border border-white/5 hover:border-cyan-400/50 transition-all group">
      <div className="flex gap-6 items-center">
        <div className="p-3 bg-white/5 text-cyan-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-lg mb-1">{title}</h4>
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition">
      {icon}
    </a>
  );
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div>
      <h4 className="font-bold mb-6">{title}</h4>
      <ul className="space-y-3 text-sm text-gray-500">
        {links.map(link => <li key={link} className="hover:text-cyan-400 cursor-pointer">{link}</li>)}
      </ul>
    </div>
  );
}