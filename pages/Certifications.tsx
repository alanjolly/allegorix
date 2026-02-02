import React from 'react';
import { CERTS } from '../constants';
import { Award, Briefcase } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Certifications: React.FC = () => {
  return (
    <div className="space-y-12">
      <ScrollReveal className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Certification Roadmap</h1>
        <p className="text-gray-400">How this course aligns with industry standards.</p>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12 py-4">
        {CERTS.map((cert, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <div className="relative pl-8 md:pl-12 group">
              <div 
                className="absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 bg-black transition-transform duration-300 group-hover:scale-125"
                style={{ borderColor: cert.color }}
              ></div>
              
              <div className="glass-panel p-6 rounded-xl hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-2">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <div>
                     <h3 className="text-xl font-bold text-white flex items-center">
                       <Award className="w-5 h-5 mr-2" style={{ color: cert.color }} />
                       {cert.name}
                     </h3>
                     <span className="text-sm text-gray-500">{cert.provider}</span>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm font-mono px-3 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                    Target: Block {cert.readinessBlock}
                  </div>
                </div>
                
                <div className="w-full bg-black/40 rounded-full h-2 mb-2 overflow-hidden">
                  <div 
                    className="h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    style={{ width: `${(index + 1) * 25}%`, backgroundColor: cert.color }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 text-right font-mono">Coverage: {(index + 1) * 25}%</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-8">
         <ScrollReveal delay={0.6} className="glass-panel p-6 rounded-xl border border-cyber-purple/30 bg-cyber-purple/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyber-purple/20 blur-2xl rounded-full"></div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center relative z-10">
              <Briefcase className="w-5 h-5 mr-2 text-cyber-purple" /> Career Outcomes
            </h3>
            <ul className="space-y-3 text-gray-300 relative z-10">
              <li className="flex items-center"><span className="w-2 h-2 bg-cyber-purple rounded-full mr-2 shadow-[0_0_5px_rgba(139,92,246,0.5)]"></span>SOC Analyst L1</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyber-purple rounded-full mr-2 shadow-[0_0_5px_rgba(139,92,246,0.5)]"></span>Network Administrator</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyber-purple rounded-full mr-2 shadow-[0_0_5px_rgba(139,92,246,0.5)]"></span>Junior Penetration Tester</li>
            </ul>
         </ScrollReveal>

         <ScrollReveal delay={0.7} className="glass-panel p-6 rounded-xl flex items-center justify-center text-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">$85k+</h3>
              <p className="text-gray-400">Average starting salary for roles requiring these skills.</p>
            </div>
         </ScrollReveal>
      </div>
    </div>
  );
};