import React from 'react';
import { LABS } from '../constants';
import { PlayCircle, Award, Activity } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ScrollReveal } from '../components/ScrollReveal';

export const Dashboard: React.FC = () => {
  // Mock Progress
  const progressData = [
    { name: 'Completed', value: 35, color: '#00d4ff' },
    { name: 'Remaining', value: 65, color: '#333' }, // Darker grey for better contrast on glass
  ];

  return (
    <div className="space-y-8">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Command Center</h1>
          <p className="text-gray-400">Welcome back, Student. Systems nominal.</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Global Rank</div>
          <div className="text-xl font-mono text-cyber-neon drop-shadow-md">Top 15%</div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Progress Card */}
        <ScrollReveal className="glass-panel rounded-xl p-6 relative overflow-hidden" delay={0.1}>
          <h3 className="text-lg font-bold text-white mb-2">Course Completion</h3>
          <div className="h-32 flex items-center">
             <div className="w-32 h-32 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={progressData} innerRadius={35} outerRadius={50} paddingAngle={5} dataKey="value" stroke="none">
                      {progressData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-sm">35%</div>
             </div>
             <div className="ml-4 space-y-1">
               <div className="text-sm text-gray-400">16/46 Labs</div>
               <div className="text-sm text-gray-400">2/4 Blocks</div>
             </div>
          </div>
        </ScrollReveal>

        {/* Next Up */}
        <ScrollReveal className="bg-gradient-to-br from-white/10 to-black/40 backdrop-blur-xl border border-cyber-neon/30 rounded-xl p-6 md:col-span-2 flex flex-col justify-between shadow-[0_0_30px_rgba(0,212,255,0.1)] hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-shadow" delay={0.2}>
           <div>
             <div className="flex justify-between items-start">
               <span className="text-xs font-bold text-cyber-neon bg-cyber-neon/10 px-2 py-1 rounded mb-2 inline-block border border-cyber-neon/20 shadow-[0_0_10px_rgba(0,212,255,0.2)]">CONTINUE LEARNING</span>
               <Activity className="w-5 h-5 text-gray-400" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Lab 2.3: Site-to-Site IPSec VPN</h3>
             <p className="text-gray-400 text-sm mb-4">You left off at Step 4: Configuring Crypto Maps.</p>
           </div>
           <button className="flex items-center text-black bg-white hover:bg-gray-200 px-6 py-2 rounded font-bold w-max transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]">
             <PlayCircle className="w-4 h-4 mr-2" /> Resume Lab
           </button>
        </ScrollReveal>
      </div>

      {/* Recent Activity */}
      <ScrollReveal delay={0.3}>
        <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
        <div className="glass-panel rounded-xl overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors cursor-pointer hover:border-l-2 hover:border-l-cyber-neon hover:pl-[1.1rem]">
               <div className="flex items-center space-x-4">
                 <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 shadow-[0_0_5px_rgba(0,0,0,0.5)]">
                   {i === 1 ? <Award className="w-4 h-4 text-cyber-green" /> : <PlayCircle className="w-4 h-4" />}
                 </div>
                 <div>
                   <div className="text-white font-medium">{i === 1 ? 'Badge Earned: Firewall Novice' : `Completed Lab 2.${3-i}`}</div>
                   <div className="text-xs text-gray-500">2 hours ago</div>
                 </div>
               </div>
               <span className="text-cyber-neon text-sm font-mono drop-shadow-sm">+50 XP</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};