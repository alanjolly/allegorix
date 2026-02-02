import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export const TerminalHero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Initializing Allegorix Cybersecurity Lab environment...\nLoading modules... [OK]\nConnecting to secure gateway... [OK]\nSystem Ready. Welcome, Student.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black/80 rounded-lg border border-gray-800 shadow-2xl backdrop-blur-sm overflow-hidden mb-12">
      <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2 border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-xs text-gray-400 font-mono">bash -- allegorix-cli</span>
      </div>
      <div className="p-6 font-mono text-sm md:text-base h-48 md:h-40 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
          {text}
          <span className="animate-pulse">_</span>
        </pre>
      </div>
    </div>
  );
};