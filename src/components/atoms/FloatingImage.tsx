import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface FloatingImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
}) => {
  return (
    <div className={`relative animate-float ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-3xl shadow-2xl w-auto h-auto max-w-full"
      />
    </div>
  );
}; 