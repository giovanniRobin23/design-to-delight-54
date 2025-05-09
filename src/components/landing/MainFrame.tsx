
import React from "react";
import { HeroSection } from "./HeroSection";
import { WelcomeSection } from "./WelcomeSection";
import { PurposeSection } from "./PurposeSection";
import { BenefitsSection } from "./BenefitsSection";
import { CallToAction } from "./CallToAction";
import { ContactFormSection } from "./ContactFormSection";
import { Footer } from "./Footer";

export const MainFrame: React.FC = () => {
  return (
    <div className="bg-[rgba(242,238,235,1)] py-8 md:py-[114px] max-md:pb-[60px]">
      <div className="flex w-full flex-col items-stretch font-normal justify-center max-md:max-w-full">
        <HeroSection />
      </div>
      <WelcomeSection />
      <PurposeSection />
      <BenefitsSection />
      <CallToAction />
      <ContactFormSection />
      <Footer />
    </div>
  );
};
