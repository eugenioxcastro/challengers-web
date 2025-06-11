'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ScreenshotCarouselProps {
  images: StaticImageData[];
  className?: string;
}

export const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({ images, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % images.length);
      }, 300); // Half of the transition time
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative w-[300px] h-[600px] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/20 via-[#ffcb30]/20 to-[#ff9f00]/20 blur-3xl -z-10" />
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-600 transform ${
              index === currentIndex 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 rotate-90 scale-95'
            }`}
          >
            <Image
              src={image}
              alt={`App Screenshot ${index + 1}`}
              fill
              className="rounded-3xl shadow-2xl"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 