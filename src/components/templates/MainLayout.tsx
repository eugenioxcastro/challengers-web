import React from 'react';
import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(to bottom, #ffcb30, #ff9f00)' }}>
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50" style={{ borderBottom: '1px solid rgba(255, 203, 48, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold transition-colors" style={{ color: '#ff9f00' }}>
                Challengers
              </Link>
            </div>
            <div className="flex items-center">
              <Link 
                href="/privacy-policy" 
                className="font-medium transition-colors"
                style={{ color: '#ff9f00' }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow relative">
        <div 
          className="absolute inset-0 animate-gradient" 
          style={{ 
            background: 'linear-gradient(to bottom right, rgba(255, 203, 48, 0.8), rgba(255, 159, 0, 0.8))'
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent, transparent)'
          }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" style={{ maskImage: 'linear-gradient(180deg, white, rgba(255,255,255,0))' }} />
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}; 