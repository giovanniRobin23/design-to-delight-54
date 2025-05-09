
import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { WelcomeSection } from "./WelcomeSection";
import { PurposeSection } from "./PurposeSection";
import { BenefitsSection } from "./BenefitsSection";
import { CallToAction } from "./CallToAction";
import { ContactFormSection } from "./ContactFormSection";
import { Footer } from "./Footer";
import { AnimatedSection } from "../ui/AnimatedSection";

export const MainFrame: React.FC = () => {
  return (
    <div className="bg-[rgba(242,238,235,1)]">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        
        <AnimatedSection>
          <WelcomeSection />
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <PurposeSection />
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <BenefitsSection />
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <CallToAction />
        </AnimatedSection>
        
        <AnimatedSection delay={500} id="contact-section">
          <ContactFormSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};
