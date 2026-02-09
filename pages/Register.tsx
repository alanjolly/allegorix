import React, { useState } from 'react';
import { Check, User, CreditCard, Phone, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

export const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [tier, setTier] = useState<'free' | 'pro'>('pro');

  const nextStep = () => setStep(step + 1);

  return (
    <div className="max-w-2xl mx-auto">
      <ScrollReveal className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white">Enrollment</h1>
        <div className="flex justify-center mt-6 space-x-4">
          {[1, 2].map((s) => (
            <div key={s} className={`w-3 h-3 rounded-full transition-colors duration-500 ${step >= s ? 'bg-cyber-neon shadow-[0_0_10px_rgba(0,212,255,0.5)]' : 'bg-white/10'}`}></div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="glass-panel rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-neon/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-purple/5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-white flex items-center"><User className="mr-2" /> Select Plan</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div 
                  onClick={() => setTier('free')}
                  className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${tier === 'free' ? 'border-cyber-neon bg-cyber-neon/10 shadow-[0_0_20px_rgba(0,212,255,0.1)]' : 'border-white/5 hover:border-cyber-neon/50 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]'}`}
                >
                  <h3 className="text-lg font-bold text-white">Audit</h3>
                  <p className="text-2xl font-mono text-gray-400 my-2">$20</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Block 1 Access</li>
                    <li>• 5 Sample Labs</li>
                  </ul>
                </div>
                <div 
                  onClick={() => setTier('pro')}
                  className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${tier === 'pro' ? 'border-cyber-neon bg-cyber-neon/10 shadow-[0_0_20px_rgba(0,212,255,0.1)]' : 'border-white/5 hover:border-cyber-neon/50 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]'}`}
                >
                   {tier === 'pro' && <div className="absolute top-0 right-0 bg-cyber-neon text-black text-xs font-bold px-2 py-1">SELECTED</div>}
                  <h3 className="text-lg font-bold text-white">Pro</h3>
                  <p className="text-2xl font-mono text-cyber-neon my-2 drop-shadow-md">$499</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Full 16-Week Course</li>
                    <li>• All 46 Labs</li>
                    <li>• Instructor Support</li>
                  </ul>
                </div>
              </div>
              <button onClick={nextStep} className="w-full py-3 bg-cyber-neon text-black font-bold rounded-lg hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)]">
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-white">Contact Details</h2>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-4">
                  <div className="p-3 bg-cyber-neon/10 rounded-lg text-cyber-neon">
                    <User size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Name</div>
                    <div className="text-lg font-bold text-white">Alan Jolly</div>
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-4">
                  <div className="p-3 bg-cyber-neon/10 rounded-lg text-cyber-neon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Contact</div>
                    <div className="text-lg font-bold text-white">91+ 7012291144</div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-4">
                  <div className="p-3 bg-cyber-neon/10 rounded-lg text-cyber-neon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Mail</div>
                    <div className="text-lg font-bold text-white">ajalanjolly4@gmail.com</div>
                  </div>
                </div>

                <a 
                  href="https://alanjolly.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-4 hover:bg-white/10 transition-all cursor-pointer group hover:border-cyber-neon/30 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
                >
                  <div className="p-3 bg-cyber-neon/10 rounded-lg text-cyber-neon group-hover:bg-cyber-neon/20 transition-colors">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Website</div>
                    <div className="text-lg font-bold text-cyber-neon underline decoration-cyber-neon/30 group-hover:decoration-cyber-neon transition-all drop-shadow-sm">alanjolly.in</div>
                  </div>
                </a>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in text-center py-8">
              <div className="w-20 h-20 bg-cyber-green/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyber-green/20 shadow-[0_0_30px_rgba(0,255,136,0.1)]">
                <Check className="w-10 h-10 text-cyber-green" />
              </div>
              <h2 className="text-2xl font-bold text-white">Welcome Aboard!</h2>
              <p className="text-gray-400">Your lab environment is provisioning.</p>
              <Link to="/course" className="block w-full py-3 bg-cyber-neon text-black font-bold rounded-lg hover:bg-cyan-300 transition-all mt-8 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)]">
                Start Learning
              </Link>
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
};