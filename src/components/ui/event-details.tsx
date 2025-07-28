import React, { useEffect, useRef, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { CelebrationAnimation } from "./celebration-animation";

interface Event {
  time: string;
  activity: string;
}

interface EventDetailsProps {
  address: string;
  events: Event[];
}

export function EventDetails({ address, events }: EventDetailsProps) {
  const [showCelebration, setShowCelebration] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setShowCelebration(true);
          setHasTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  return (
    <div ref={sectionRef} className="bg-white py-16 px-6 md:px-12 relative">
      <CelebrationAnimation 
        isActive={showCelebration} 
        onComplete={() => setShowCelebration(false)} 
      />
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold mb-10 text-center gold-gradient">
          Event Details
        </h2>
        
        <div className="card-elegant mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <MapPin className="text-gold h-6 w-6 flex-shrink-0" />
            <div>
              <h4 className="font-playfair font-medium text-lg mb-1">Venue Location</h4>
              <p className="text-warm-gray">{address}</p>
            </div>
          </div>
          
          <div className="divider">
            <span className="divider-icon">
              <Calendar className="w-5 h-5" />
            </span>
          </div>

          <div>
            <h4 className="font-playfair font-medium text-lg mb-6 text-center">Schedule of Events</h4>
            
            <div className="space-y-8">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className="timeline-item animate-fade-in" 
                  style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                >
                  <div className="timeline-dot"></div>
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 text-gold mr-2" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <p className="font-playfair text-lg">{event.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}