import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Globe, Cpu, Award } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Home: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <ScrollReveal className="text-center space-y-8 py-10 min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
          Master Cybersecurity with <span className="text-cyber-neon drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]">Allegorix</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Build enterprise-grade networks, simulate advanced attacks, and secure infrastructure in a risk-free virtual environment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link to="/course" className="px-8 py-4 bg-cyber-neon text-black font-bold rounded hover:bg-cyan-300 transition-all flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)]">
            Explore Curriculum <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link to="/labs" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center hover:border-cyber-neon/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:text-cyber-neon">
            View Labs
          </Link>
        </div>
      </ScrollReveal>

      {/* Stats Section - Glass Strip */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-panel rounded-2xl p-8 shadow-2xl transform hover:scale-[1.01] transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] hover:border-cyber-neon/20">
          {[
            { label: 'Hands-on Labs', value: '46+' },
            { label: 'Course Hours', value: '150h' },
            { label: 'Tools Mastered', value: '25+' },
            { label: 'Security+ Ready', value: '100%' },
          ].map((stat, i) => (
            <div key={i} className="text-center relative">
               <div className="text-3xl md:text-4xl font-mono font-bold text-cyber-green mb-2 drop-shadow-md">{stat.value}</div>
               <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
               {i !== 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>}
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Globe, title: "Real-World Scenarios", desc: "Replicate Fortune 500 network topologies and attack vectors." },
          { icon: Cpu, title: "Deep GNS3 Integration", desc: "Master the industry-standard network emulation platform." },
          { icon: Award, title: "Career Focused", desc: "Curriculum aligned with Security+, CCNA, and CEH objectives." }
        ].map((feat, i) => (
          <ScrollReveal key={i} delay={i * 0.2}>
            <div className="glass-panel p-8 rounded-xl h-full transition-all group hover:border-cyber-neon/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]">
              <div className="bg-cyber-dark/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                <feat.icon className="w-8 h-8 text-cyber-neon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-neon transition-colors drop-shadow-sm">{feat.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <div className="glass-panel rounded-2xl p-12 text-center relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-shadow">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-purple/20 blur-[80px] rounded-full group-hover:bg-cyber-purple/30 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-neon/10 blur-[80px] rounded-full group-hover:bg-cyber-neon/20 transition-colors duration-700"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to secure the network?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Join 500+ professionals advancing their careers through hands-on practice.</p>
            <Link to="/register" className="inline-block px-8 py-3 bg-cyber-green text-black font-bold rounded-lg hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_35px_rgba(0,255,136,0.6)]">
              Start Your Journey
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};