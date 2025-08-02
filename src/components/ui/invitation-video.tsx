import React, { useRef, useEffect, useState } from "react";

interface InvitationVideoProps {
  videoSrc: string;
  title?: string;
}

export const InvitationVideo = ({ videoSrc, title = "ఆహ్వాన వీడియో" }: InvitationVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setIsInView(true);
          setHasStarted(true);
          // Start playing when video comes into view
          video.play().catch(console.error);
        }
      },
      {
        threshold: 0.3, // Play when 30% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-cream via-white to-cream">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 animate-fade-in">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Video container with responsive sizing */}
          <div className="relative w-[85%] mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-gold/30">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/40 via-gold/20 to-gold/40 rounded-lg blur-sm -z-10"></div>
            
            <video
              ref={videoRef}
              className="w-full h-full object-cover bg-black"
              controls
              preload="metadata"
              muted={false}
              playsInline
              webkit-playsinline="true"
              controlsList="nodownload"
              onLoadStart={() => console.log("Video loading started")}
              onCanPlay={() => console.log("Video can play")}
            >
              <source src={videoSrc} type="video/mp4" />
              <p className="text-center text-muted-foreground p-8">
                మీ బ్రౌజర్ వీడియో ప్లేబ్యాక్‌ను సపోర్ట్ చేయదు। దయచేసి మీ బ్రౌజర్‌ను అప్‌డేట్ చేయండి.
              </p>
            </video>
            
            {/* Loading overlay */}
            {!isInView && (
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-cream/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                  <p className="text-primary font-medium">వీడియో లోడ్ అవుతోంది...</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-gold/40 rounded-tl-lg"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-gold/40 rounded-tr-lg"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-gold/40 rounded-bl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-gold/40 rounded-br-lg"></div>
        </div>

        {/* Video description */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            మా గృహప్రవేశ వేడుక యొక్క ప్రత్యేక ఆహ్వాన వీడియో. మీ ఉపస్థితి మా ఆనందాన్ని మరింత పెంచుతుంది.
          </p>
        </div>
      </div>
    </section>
  );
};