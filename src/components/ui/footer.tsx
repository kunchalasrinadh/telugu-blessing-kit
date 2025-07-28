import React from "react";
import { PartyPopper, MessageSquare, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-gradient-to-t from-gold/10 via-cream to-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <PartyPopper className="text-gold h-8 w-8" />
        </div>

        <h3 className="font-dancing text-3xl md:text-4xl mb-2 text-gold-dark animate-fade-in">
          We feel blessed to welcome you!
        </h3>

        <p className="text-warm-gray mb-8 max-w-lg mx-auto">
          Thank you for being a part of these precious moments in our new home. Your presence will make our celebration complete.
        </p>

        {/* WhatsApp and contact buttons for easy messaging */}
        <div className="flex flex-col gap-4 items-center mb-2">
          <a
            href="https://wa.me/919985302279?text=Namaste%20Srinadh%2C%20I%20will%20be%20joining%20the%20Gruha%20Pravesam%20ceremony%21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 button-gold text-lg px-5 py-2 rounded-lg hover:scale-105 transition"
            style={{ minWidth: 220, justifyContent: "center" }}
            aria-label="WhatsApp Srinadh"
          >
            <MessageSquare className="w-6 h-6" />
            Message on WhatsApp
          </a>
          <div className="flex gap-4 justify-center items-center">
            <a
              href="tel:9985302279"
              className="flex items-center gap-2 text-warm-gray hover:text-gold-dark font-medium transition"
            >
              <Phone className="w-5 h-5" />
              99853 02279
            </a>
            <a
              href="mailto:srinadhkunchala99@gmail.com"
              className="flex items-center gap-2 text-warm-gray hover:text-gold-dark font-medium transition"
            >
              <Mail className="w-5 h-5" />
              srinadhkunchala99@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}