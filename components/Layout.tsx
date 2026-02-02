import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, Shield, Cpu, Calendar, BookOpen } from 'lucide-react';
import { StarBackground } from './StarBackground';

const NavItem = ({ to, icon: Icon, label, isActive, onClick }: any) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive 
        ? 'bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/30 shadow-[0_0_10px_rgba(0,212,255,0.2)] backdrop-blur-sm' 
        : 'text-gray-400 hover:text-cyber-neon hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]'
    }`}
  >
    <Icon size={18} />
    <span className="font-mono text-sm tracking-wide">{label}</span>
  </Link>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/course', icon: BookOpen, label: 'Course' },
    { to: '/labs', icon: Cpu, label: 'Labs' },
    { to: '/schedule', icon: Calendar, label: 'Schedule' },
    { to: '/tools', icon: Shield, label: 'Tools' },
  ];

  return (
    <div className="min-h-screen bg-[#050B14] text-gray-200 font-sans flex flex-col relative overflow-hidden selection:bg-cyber-neon selection:text-black">
      {/* Interstellar Background */}
      <StarBackground />
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Shield className="h-8 w-8 text-cyber-neon group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-cyber-neon blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <span className="font-mono font-bold text-xl tracking-tighter text-white">
                ALLE<span className="text-cyber-neon">GORIX</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavItem 
                  key={link.to} 
                  {...link} 
                  isActive={location.pathname === link.to} 
                />
              ))}
              <Link 
                to="/register"
                className="ml-4 px-5 py-2 bg-cyber-neon text-cyber-black font-bold font-mono rounded hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(0,212,255,0.4)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)]"
              >
                JOIN_NOW
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0A101F]/95 backdrop-blur-xl border-b border-white/10 animate-fade-in-down absolute w-full z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavItem 
                  key={link.to} 
                  {...link} 
                  isActive={location.pathname === link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
              <Link 
                to="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center mt-4 px-5 py-3 bg-cyber-neon text-cyber-black font-bold font-mono rounded hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-shadow"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-panel border-t-0 border-t border-white/5 py-8 mt-auto z-10 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm font-mono">
            &copy; 2026 Allegorix. All systems operational.
          </p>
        </div>
      </footer>
    </div>
  );
};