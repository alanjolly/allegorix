import React, { useState } from 'react';
import { Calendar as CalIcon, Clock, Target } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Schedule: React.FC = () => {
  const [pace, setPace] = useState(16);

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <ScrollReveal className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Study Planner</h1>
        <p className="text-gray-400">Customize your learning velocity based on your availability.</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="glass-panel rounded-2xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-cyber-neon/10 p-3 rounded-full border border-cyber-neon/20 shadow-[0_0_10px_rgba(0,212,255,0.2)]">
                <Clock className="w-6 h-6 text-cyber-neon" />
              </div>
              <div>
                <h3 className="text-white font-bold">Target Completion</h3>
                <p className="text-gray-400 text-sm">{pace} Weeks</p>
              </div>
            </div>
            
            <div className="flex bg-black/40 rounded-lg p-1 border border-white/5 backdrop-blur-sm">
              {[12, 16, 24, 32].map((w) => (
                <button
                  key={w}
                  onClick={() => setPace(w)}
                  className={`px-4 py-2 rounded font-medium text-sm transition-all border ${
                    pace === w 
                      ? 'bg-cyber-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] border-transparent' 
                      : 'text-gray-400 border-transparent hover:text-cyber-neon hover:bg-white/5 hover:shadow-[0_0_10px_rgba(0,212,255,0.2)] hover:border-cyber-neon/30'
                  }`}
                >
                  {w} Weeks
                </button>
              ))}
            </div>
          </div>

          <div className="relative pt-8 pb-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10 rounded top-[45px]"></div>
            
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((block) => (
                <div key={block} className="relative pt-8 group">
                  <div className={`absolute top-[4px] left-0 w-4 h-4 rounded-full border-2 z-10 transition-colors duration-300 ${block <= 2 ? 'bg-cyber-neon border-cyber-neon shadow-[0_0_10px_rgba(0,212,255,0.5)]' : 'bg-black border-gray-600'}`}></div>
                  <h4 className="text-white font-bold mb-2 group-hover:text-cyber-neon transition-colors drop-shadow-sm">Block {block}</h4>
                  <div className="text-xs text-gray-400 bg-white/5 p-3 rounded border border-white/5 backdrop-blur-sm group-hover:border-cyber-neon/30 transition-all group-hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                    <p className="font-mono text-cyber-neon mb-1">Weeks {Math.ceil(((block -1) * pace)/4) + 1}-{Math.ceil((block * pace)/4)}</p>
                    <ul className="list-disc list-inside space-y-1 opacity-80">
                      <li>12 Labs</li>
                      <li>1 Capstone</li>
                      <li>{pace === 12 ? '15h' : '10h'}/week</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* GitHub Style Heatmap Simulation */}
      <ScrollReveal delay={0.2} className="space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center">
          <Target className="w-5 h-5 mr-2 text-cyber-green" /> 
          Daily Consistency Tracker
        </h3>
        <div className="glass-panel p-6 rounded-xl overflow-x-auto hover:border-cyber-green/30 transition-colors">
          <div className="flex gap-1 min-w-[600px]">
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                   const active = Math.random() > 0.7;
                   return (
                     <div 
                       key={dayIndex} 
                       className={`w-3 h-3 rounded-sm transition-opacity duration-500 hover:opacity-100 ${active ? 'bg-cyber-green/60 shadow-[0_0_5px_rgba(0,255,136,0.3)]' : 'bg-white/5 hover:bg-white/10'}`}
                       title={`Day ${weekIndex * 7 + dayIndex}`}
                     ></div>
                   )
                })}
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center mt-4 text-xs text-gray-500 gap-2 font-mono">
            <span>Less</span>
            <div className="w-3 h-3 bg-white/5 rounded-sm"></div>
            <div className="w-3 h-3 bg-cyber-green/60 rounded-sm"></div>
            <span>More</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};