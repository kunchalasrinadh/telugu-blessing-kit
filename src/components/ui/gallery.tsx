import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Gallery() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="py-12 px-6 md:py-16 md:px-12 bg-gradient-to-b from-gold/10 via-cream/40 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gold/30 -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-cream px-5 py-1">
              <h2 className="font-dancing text-3xl md:text-4xl text-gold-dark text-center animate-fade-in">
                Our New Home
              </h2>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className={`group relative overflow-hidden rounded-lg border-2 border-gold/30 animate-fade-in transform transition-all duration-500 hover:scale-105 ${activeIndex === 0 ? 'ring-2 ring-gold' : ''}`}
            onClick={() => handleImageClick(0)}
          >
            <div className={`absolute inset-0 bg-gradient-to-t from-gold/30 to-transparent transition-opacity ${isMobile && activeIndex === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
            <img
              src="/lovable-uploads/b352faa1-51c1-406e-877d-6fe412cfcb04.png"
              alt="House Front"
              className="w-full h-72 object-cover"
            />
            <div className={`absolute bottom-0 left-0 right-0 p-4 text-center transition-all duration-500 ${isMobile && activeIndex === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
              <p className="text-white font-medium text-shadow">Front View</p>
            </div>
          </div>
          
          <div 
            className={`group relative overflow-hidden rounded-lg border-2 border-gold/30 animate-fade-in transition-all duration-500 hover:scale-105 ${activeIndex === 1 ? 'ring-2 ring-gold' : ''}`} 
            style={{ animationDelay: "0.2s" }}
            onClick={() => handleImageClick(1)}
          >
            <div className={`absolute inset-0 bg-gradient-to-t from-gold/30 to-transparent transition-opacity ${isMobile && activeIndex === 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
            <img
              src="/lovable-uploads/788da7e6-60f9-462c-b22d-8b4d0962df1b.png"
              alt="Community Street"
              className="w-full h-72 object-cover"
            />
            <div className={`absolute bottom-0 left-0 right-0 p-4 text-center transition-all duration-500 ${isMobile && activeIndex === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
              <p className="text-white font-medium text-shadow">Welcome Area</p>
            </div>
          </div>
        </div>
        
        {/* Lotus Icon Row */}
        <div className="flex justify-center gap-4 mt-12">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="text-yellow-600 hover:text-yellow-400 transition-transform transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C12 2 9 6 12 10C15 6 12 2 12 2ZM5 8C5 8 6 13 12 13C18 13 19 8 19 8C19 8 15 11 12 11C9 11 5 8 5 8ZM4 14C4 14 7 20 12 20C17 20 20 14 20 14C20 14 17 16 12 16C7 16 4 14 4 14Z"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}