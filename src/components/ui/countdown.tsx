import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    // Parse the target date with timezone consideration
    const target = new Date(targetDate);
    const now = new Date();
    
    const difference = target.getTime() - now.getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    // Force an immediate calculation on mount to prevent initial zeros
    setTimeLeft(calculateTimeLeft());
    
    // Create interval that runs every second
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
      
      // Debug
      console.log("Target date:", new Date(targetDate).toLocaleString());
      console.log("Current time:", new Date().toLocaleString());
      console.log("Time difference:", updatedTimeLeft);
    }, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-b from-gold/5 to-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold mb-4 gold-gradient">
          Counting Down
        </h2>
        <p className="text-warmGray mb-10 max-w-2xl mx-auto">
          We look forward to celebrating this special day with you. Mark your calendar and join us in blessing our new home.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div 
              key={item.label} 
              className="card-elegant animate-fade-in bg-gradient-to-b from-cream to-white border-gold/40 shadow-lg transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-4xl md:text-5xl font-dancing text-gold mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base font-medium text-warmGray">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}