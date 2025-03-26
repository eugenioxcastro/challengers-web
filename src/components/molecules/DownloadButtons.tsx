import React from 'react';

export const DownloadButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <a
        href="#"
        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-3 font-semibold"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.05 2.31-.7 3.57-.84 1.51-.12 3.56.91 4.39 2.33-3.88 2.51-3.24 8.69.05 11.68zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.83 2.48-1.73 4.5-3.74 4.25z"/>
        </svg>
        <span>Download on App Store</span>
      </a>
      <a
        href="#"
        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-3 font-semibold"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 13.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 10.15L6.05 2.66Z"/>
        </svg>
        <span>Get it on Google Play</span>
      </a>
    </div>
  );
}; 