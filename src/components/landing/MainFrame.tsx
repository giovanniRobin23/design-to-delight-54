import React from "react";
import { HeroSection } from "./HeroSection";
import { WelcomeSection } from "./WelcomeSection";
import { PurposeSection } from "./PurposeSection";
import { BenefitsSection } from "./BenefitsSection";
import { CallToAction } from "./CallToAction";
import { Footer } from "./Footer";

export const MainFrame: React.FC = () => {
  return (
    <div className="bg-[rgba(242,238,235,1)] py-[114px] max-md:pb-[100px]">
      <div className="flex h-[712px] w-full flex-col items-stretch font-normal justify-center max-md:max-w-full">
        <HeroSection />
      </div>
      <WelcomeSection />
      <PurposeSection />
      <BenefitsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};
