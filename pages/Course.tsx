import React, { useState } from 'react';
import { BLOCKS } from '../constants';
import { ChevronDown, ChevronRight, CheckCircle2, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';

export const Course: React.FC = () => {
  const [expandedBlock, setExpandedBlock] = useState<number | null>(1);

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <ScrollReveal className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">16-Week Curriculum</h1>
        <p className="text-gray-400">A structured path from basics to advanced red teaming.</p>
      </ScrollReveal>

      <div className="space-y-6">
        {BLOCKS.map((block, index) => {
          const isExpanded = expandedBlock === block.id;
          return (
            <ScrollReveal key={block.id} delay={index * 0.1}>
              <div className="glass-panel rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setExpandedBlock(isExpanded ? null : block.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-cyber-neon/30 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl transition-colors ${isExpanded ? 'bg-cyber-neon text-black shadow-[0_0_15px_rgba(0,212,255,0.5)]' : 'bg-gray-800 text-gray-500'}`}>
                      {block.id}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold transition-colors ${isExpanded ? 'text-white' : 'text-gray-300'}`}>{block.title}</h3>
                      <p className="text-sm text-gray-500">{block.duration} • {block.modules.length} Modules</p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronDown className="text-cyber-neon" /> : <ChevronRight className="text-gray-600" />}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/5 bg-black/20"
                    >
                      <div className="p-6 grid gap-6">
                        <p className="text-gray-400 text-sm">{block.description}</p>
                        
                        <div className="space-y-4">
                          {block.modules.map((mod) => (
                            <div key={mod.id} className="flex items-start space-x-4 p-4 rounded-lg bg-black/40 border border-white/5 hover:border-cyber-neon/20 transition-colors">
                              <div className="mt-1">
                                {block.id === 1 ? (
                                  <CheckCircle2 className="w-5 h-5 text-cyber-green" />
                                ) : (
                                  <Lock className="w-5 h-5 text-gray-600" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-bold text-white mb-2">{mod.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                  {mod.topics.map(t => (
                                    <span key={t} className="text-xs px-2 py-1 rounded bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/20">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};