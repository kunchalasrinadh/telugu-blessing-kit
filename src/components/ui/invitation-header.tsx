import React from "react";

interface InvitationHeaderProps {
  title: string;
  subtitle: string;
  date: string;
}

export function InvitationHeader({ title, subtitle, date }: InvitationHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-white via-cream to-white py-16 md:py-24 px-4 text-center border-b border-gold/20">
      <h3 className="text-gold-dark font-dancing text-3xl md:text-4xl mb-4 animate-fade-in">
        You&apos;re invited to our
      </h3>
      
      <h1 className="gold-gradient font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        {title}
      </h1>
      
      <div className="w-24 h-1 bg-gold mx-auto mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}></div>
      
      <h2 className="font-montserrat text-warmGray text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
        {subtitle}
      </h2>
      
      <p className="font-playfair text-gold text-xl md:text-2xl font-medium animate-fade-in" style={{ animationDelay: "0.5s" }}>
        {date}
      </p>
    </div>
  );
}