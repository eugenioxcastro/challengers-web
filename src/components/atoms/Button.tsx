import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105';
  const variantStyles = variant === 'primary'
    ? 'bg-primary text-white hover:bg-opacity-90'
    : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white';

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}; 