import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  heightClass?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, heightClass = "h-[60vh]" }) => {
  return (
    <div className={`relative w-full ${heightClass} overflow-hidden flex items-center justify-center text-white`}>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transform scale-105 transition-transform duration-[20s] hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4 animate-fade-in-up">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-2xl font-light drop-shadow-md animate-fade-in-up delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};