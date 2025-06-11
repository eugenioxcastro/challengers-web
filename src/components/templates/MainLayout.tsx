import React from 'react';
import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">
      <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
                Challengers
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Link 
                  href="/privacy-policy" 
                  className="text-white/70 hover:text-white font-medium transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex items-center">
                <Link 
                  href="/terms" 
                  className="text-white/70 hover:text-white font-medium transition-colors"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.15]" 
          style={{ 
            maskImage: 'radial-gradient(circle at center, white, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, white, transparent 80%)'
          }} 
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}; 