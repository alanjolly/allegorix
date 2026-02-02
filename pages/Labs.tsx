import React, { useState } from 'react';
import { LABS } from '../constants';
import { Search, Filter, Clock, Signal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

export const Labs: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [search, setSearch] = useState('');

  const filteredLabs = LABS.filter(lab => {
    const matchesFilter = filter === 'All' || lab.difficulty === filter;
    const matchesSearch = lab.title.toLowerCase().includes(search.toLowerCase()) || 
                          lab.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getDifficultyColor = (diff: string) => {
    if (diff === 'Beginner') return 'text-cyber-green';
    if (diff === 'Intermediate') return 'text-yellow-400';
    return 'text-cyber-red';
  };

  return (
    <div className="space-y-8">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b border-white/10 pb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Lab Directory</h1>
          <p className="text-gray-400 mt-2">Access 46+ hands-on scenarios in GNS3</p>
        </div>
        
        <div className="flex gap-2">
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-md border ${
                filter === f 
                  ? 'bg-cyber-neon text-black border-transparent shadow-[0_0_15px_rgba(0,212,255,0.4)]' 
                  : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-cyber-neon hover:border-cyber-neon/30 hover:shadow-[0_0_10px_rgba(0,212,255,0.2)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="relative">
        <Search className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
        <input 
          type="text"
          placeholder="Search labs by title or technology (e.g. 'OSPF', 'Python')..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-cyber-neon transition-all focus:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
        />
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab, index) => (
          <ScrollReveal key={lab.id} delay={index * 0.1}>
            <div className="glass-panel rounded-xl p-6 border border-transparent hover:border-cyber-neon/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all group h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-white/10 text-xs font-mono px-2 py-1 rounded text-gray-400">Block {lab.block}</span>
                <span className={`text-xs font-bold ${getDifficultyColor(lab.difficulty)} flex items-center`}>
                  <Signal className="w-3 h-3 mr-1" /> {lab.difficulty}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-neon transition-colors">{lab.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{lab.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {lab.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500 bg-black/40 px-2 py-1 rounded border border-white/5 group-hover:border-cyber-neon/20 transition-colors">{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" /> {lab.duration}
                </div>
                <button className="text-cyber-neon text-sm font-bold hover:underline hover:drop-shadow-[0_0_5px_rgba(0,212,255,0.8)]">Start Lab &rarr;</button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      
      {filteredLabs.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No labs found matching your criteria. Try adjusting the filters.
        </div>
      )}
    </div>
  );
};