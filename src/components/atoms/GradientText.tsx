import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-[#ffcb30] to-[#ff9f00] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}; 