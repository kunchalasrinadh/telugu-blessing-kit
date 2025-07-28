import React, { useEffect, useState } from 'react';

interface CelebrationAnimationProps {
  isActive: boolean;
  onComplete?: () => void;
}

export function CelebrationAnimation({ isActive, onComplete }: CelebrationAnimationProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; color: string }>>([]);

  useEffect(() => {
    if (isActive) {
      // Generate random firework particles
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        color: Math.random() > 0.5 ? '#d4af37' : '#f5d680',
      }));
      
      setParticles(newParticles);
      
      // Clear animation after completion
      const timer = setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive && particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Firework particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full animate-firework"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
          }}
        />
      ))}
      
      {/* Sparkle effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          ✨
        </div>
      ))}
      
      {/* Burst effects */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`burst-${i}`}
          className="absolute w-4 h-4 rounded-full bg-gold/30 animate-burst"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + i * 10}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}