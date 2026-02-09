import React, { useState } from 'react';
import { TOOLS } from '../constants';
import { Cpu, HardDrive } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ScrollReveal } from '../components/ScrollReveal';

export const Tools: React.FC = () => {
  const [cores, setCores] = useState(4);
  const [ram, setRam] = useState(8);

  const getReadiness = () => {
    if (cores >= 8 && ram >= 16) return { text: "Optimal for Advanced Labs", color: "text-cyber-green border-cyber-green/30 bg-cyber-green/10 shadow-[0_0_15px_rgba(0,255,136,0.2)]" };
    if (cores >= 4 && ram >= 8) return { text: "Capable of Basic Labs", color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10 shadow-[0_0_15px_rgba(250,204,21,0.2)]" };
    return { text: "Upgrade Recommended", color: "text-red-500 border-red-500/30 bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.2)]" };
  };

  const status = getReadiness();

  return (
    <div className="space-y-12">
      <ScrollReveal>
        <h1 className="text-3xl font-bold text-white mb-4">Tool Arsenal</h1>
        <p className="text-gray-400">The software and hardware stack you will master.</p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Tool Complexity Chart */}
        <ScrollReveal delay={0.1} className="glass-panel rounded-xl p-6 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-shadow">
          <h3 className="text-xl font-bold text-white mb-6">Learning Curve Complexity</h3>
          <div className="h-64">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={TOOLS} layout="vertical">
                 <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
                 <XAxis type="number" domain={[0, 10]} stroke="#666" tickLine={false} axisLine={false} />
                 <YAxis dataKey="name" type="category" width={100} stroke="#999" fontSize={12} tickLine={false} axisLine={false} />
                 <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(26, 26, 26, 0.9)', 
                      backdropFilter: 'blur(8px)',
                      borderColor: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      borderRadius: '8px',
                      boxShadow: '0 0 15px rgba(0, 212, 255, 0.2)'
                    }}
                    itemStyle={{ color: '#00d4ff' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                 />
                 <Bar dataKey="complexity" fill="#00d4ff" barSize={20} radius={[0, 4, 4, 0]} animationDuration={1500} />
               </BarChart>
             </ResponsiveContainer>
          </div>
        </ScrollReveal>

        {/* Hardware Calc */}
        <ScrollReveal delay={0.2} className="glass-panel rounded-xl p-6 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-shadow">
          <h3 className="text-xl font-bold text-white mb-6">Lab Rig Calculator</h3>
          <div className="space-y-8">
            <div>
              <label className="flex items-center text-sm font-bold text-gray-400 mb-4">
                <Cpu className="w-4 h-4 mr-2 text-cyber-neon" /> CPU Cores: <span className="text-white ml-2">{cores}</span>
              </label>
              <input 
                type="range" min="2" max="16" step="2" value={cores}
                onChange={(e) => setCores(parseInt(e.target.value))}
                className="w-full accent-cyber-neon bg-white/10 h-2 rounded-lg appearance-none cursor-pointer hover:bg-white/20 transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_10px_rgba(0,212,255,0.3)]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                <span>2 Cores</span>
                <span>16 Cores</span>
              </div>
            </div>
            <div>
              <label className="flex items-center text-sm font-bold text-gray-400 mb-4">
                <HardDrive className="w-4 h-4 mr-2 text-cyber-neon" /> RAM (GB): <span className="text-white ml-2">{ram}</span>
              </label>
              <input 
                type="range" min="4" max="64" step="4" value={ram}
                onChange={(e) => setRam(parseInt(e.target.value))}
                className="w-full accent-cyber-neon bg-white/10 h-2 rounded-lg appearance-none cursor-pointer hover:bg-white/20 transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_10px_rgba(0,212,255,0.3)]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                <span>4 GB</span>
                <span>64 GB</span>
              </div>
            </div>
            
            <div className={`p-4 rounded-lg border backdrop-blur-md transition-all duration-500 text-center ${status.color}`}>
              <span className="font-bold text-lg">{status.text}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};