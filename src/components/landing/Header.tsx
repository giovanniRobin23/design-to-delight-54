
import React from "react";
import { fonts } from "../../lib/fonts";
import { Button } from "../ui/button";

export const Header: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[rgba(242,238,235,1)] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-[rgba(36,40,15,1)] text-xl md:text-2xl" style={{ fontFamily: fonts.sigmar }}>
          GreenFunding
        </div>
        <Button 
          variant="ghost" 
          onClick={scrollToContact}
          className="text-[rgba(36,40,15,1)] hover:bg-[rgba(225,240,121,0.2)] transition-colors"
        >
          Fale Conosco
        </Button>
      </div>
    </header>
  );
};
