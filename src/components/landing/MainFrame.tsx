
import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { WelcomeSection } from "./WelcomeSection";
import { PurposeSection } from "./PurposeSection";
import { BenefitsSection } from "./BenefitsSection";
import { CallToAction } from "./CallToAction";
import { ContactFormSection } from "./ContactFormSection";
import { Footer } from "./Footer";

export const MainFrame: React.FC = () => {
  return (
    <div className="bg-[rgba(242,238,235,1)]">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <WelcomeSection />
        <PurposeSection />
        <BenefitsSection />
        <CallToAction />
        <div id="contact-section">
          <ContactFormSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};
