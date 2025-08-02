import React from "react";
import { InvitationHeader } from "@/components/ui/invitation-header";
import { EventDetails } from "@/components/ui/event-details";
import { LocationMap } from "@/components/ui/location-map";
import { Countdown } from "@/components/ui/countdown";
import { Footer } from "@/components/ui/footer";
import { Gallery } from "@/components/ui/gallery";
import { InvitationVideo } from "@/components/ui/invitation-video";

const Index = () => {
  // Event schedule details in Telugu
  const eventDate = "శుక్రవారం, ఆగస్టు 8, 2025 గృహప్రవేశం రాత్రి 11:27 గంటలకు";
  const fullAddress = "డి నెంబర్ 494-B1-A, లేక్ వ్యూ హోమ్స్, గంగమ్మ తల్లి గుడి దగ్గర, నరసరావుపేట, పల్నాడు జిల్లా, ఆంధ్రప్రదేశ్";
  const googleMapUrl = "https://www.google.com/maps/dir/?api=1&destination=722R%2BQRF%2C+Guntur%2C+Andhra+Pradesh+522601";
  
  // Set target date string in ISO format with correct timezone (GMT+5:30 for India)
  // August 8th, 2025 at 11:27 PM IST
  const targetDate = "2025-08-08T23:27:00+05:30";

  const eventSchedule = [
    {
      time: "శుక్రవారం, ఆగస్టు 8, రాత్రి 11:27",
      activity: "గృహప్రవేశం (ఇల్లు ప్రవేశ వేడుక)",
    },
    {
      time: "శనివారం, ఆగస్టు 9, ఉదయం 6:00",
      activity: "సుప్రభాతం, అభిషేకం & పూజ",
    },
    {
      time: "శనివారం, ఆగస్టు 9, ఉదయం 8:00",
      activity: "సత్యనారాయణ వ్రతం",
    },
    {
      time: "శనివారం, ఆగస్టు 9, మధ్యాహ్నం 12:00",
      activity: "భోజన ప్రసాదం",
    },
  ];

  return (
    <div className="min-h-screen bg-background" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M42 35v10h-5v-10h5zm-5 15h5v10h-5V50zm15-15v10h-5v-10h5zm-5 15h5v10h-5V50zm28-15v10h-5v-10h5zm-5 15h5v10h-5V50zm-10-15v10h-5v-10h5zm-5 15h5v10h-5V50zM32 5v10h-5V5h5zm-5 15h5v10h-5V20zm15-15v10h-5V5h5zm-5 15h5v10h-5V20zm28-15v10h-5V5h5zm-5 15h5v10h-5V20zm-10-15v10h-5V5h5zm-5 15h5v10h-5V20zm35 50v10h-5V70h5zm-5 15h5v10h-5V85zm-10-15v10h-5V70h5zm-5 15h5v10h-5V85zM12 5v10H7V5h5zM7 20h5v10H7V20zm15-15v10h-5V5h5zm-5 15h5v10h-5V20zm0 30h35v10H17V50zm0-15h35v10H17V35zm0-15h35v10H17V20zm0-15h35v10H17V5zM7 30h5v10H7V30zm5 20H2v10h10V50zM2 65h10v10H2V65zm5 20h5v10H7V85z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundAttachment: 'fixed'
    }}>
      <div className="invite-container my-8 md:my-16" style={{
        boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
      }}>
        {/* Decorative traditional elements at top */}
        <div className="relative flex justify-center overflow-hidden h-16 bg-gradient-to-r from-gold/20 via-cream to-gold/20">
          <div className="absolute top-0 left-0 w-full h-4 bg-gold/10"></div>
          <div className="absolute -top-8 transform rotate-180" style={{ opacity: 0.3 }}>
            <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0C60 20 0 40 0 40C0 40 60 60 100 80C140 60 200 40 200 40C200 40 140 20 100 0Z" fill="#D4AF37"/>
            </svg>
          </div>
        </div>
        
        {/* Lord Ganesha image at the center of the start page */}
        <div className="relative flex justify-center items-center py-6 bg-gradient-to-r from-gold/10 via-cream to-gold/10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'44\' height=\'44\' viewBox=\'0 0 44 44\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23d4af37\' fill-opacity=\'0.1\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M22 0c12.15 0 22 9.85 22 22s-9.85 22-22 22S0 34.15 0 22 9.85 0 22 0zm0 4C13.16 4 6 11.16 6 20s7.16 16 16 16 16-7.16 16-16S30.84 4 22 4z\'/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          <div className="w-32 h-32 md:w-40 md:h-40 relative z-10 animate-fade-in">
            <img 
              src="/lovable-uploads/5d29c467-7f0e-4df3-84f8-18237168ad5a.png" 
              alt="గణేశ భగవాన్" 
              className="w-full h-full object-contain filter drop-shadow-lg transition-transform hover:scale-105 duration-700 rounded-full border-2 border-gold/30"
            />
            <div className="absolute -inset-1 rounded-full bg-gold/20 -z-10 animate-pulse-gold"></div>
          </div>
          <div className="absolute left-0 bottom-0 w-full h-4 bg-gradient-to-r from-gold/20 via-gold/5 to-gold/20"></div>
        </div>
        
        {/* Home front image with enhanced animations */}
        <div className="relative overflow-hidden">
          <div className="group relative">
            <img
              src="/lovable-uploads/b352faa1-51c1-406e-877d-6fe412cfcb04.png"
              alt="ఇల్లు ముందు భాగం"
              className="w-full h-[500px] md:h-[600px] object-cover shadow-lg border-4 border-gold/30 
                animate-slide-in-up transition-all duration-1000"
              style={{ 
                objectPosition: "center 15%",
                animationDelay: "0.3s",
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)",
              }}
            />
            {/* Glowing border effect */}
            <div 
              className="absolute -inset-0.5 bg-gradient-to-r from-gold/40 via-gold/20 to-gold/40 -z-10 blur-sm"
            />
          </div>
        </div>

        <InvitationHeader
          title="గృహ ప్రవేశ వేడుక ఆహ్వానం"
          subtitle="గొప్ప ఆనందంతో మరియు దైవిక ఆశీర్వాదాలతో, మా గృహప్రవేశ వేడుక యొక్క పవిత్ర సందర్భాన్ని పవిత్రం చేయడానికి మిమ్మల్ని ఆహ్వానిస్తున్నాము."
          date={eventDate}
        />
        
        <Countdown targetDate={targetDate} />

        <Gallery />

        <EventDetails address={fullAddress} events={eventSchedule} />

        <InvitationVideo videoSrc="/lovable-uploads/Invitation.mp4" />

        <LocationMap address={fullAddress} googleMapUrl={googleMapUrl} />

        <Footer />
        
        {/* Decorative traditional elements at bottom */}
        <div className="relative flex justify-center overflow-hidden h-16 bg-gradient-to-r from-gold/20 via-cream to-gold/20">
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gold/10"></div>
          <div className="absolute -bottom-8" style={{ opacity: 0.3 }}>
            <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0C60 20 0 40 0 40C0 40 60 60 100 80C140 60 200 40 200 40C200 40 140 20 100 0Z" fill="#D4AF37"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
