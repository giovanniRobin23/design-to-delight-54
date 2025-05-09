import React from "react";
import { MainFrame } from "../components/landing/MainFrame";
import { ContactForm } from "../components/ui/ContactForm";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <MainFrame />
      
      {/* Contact Form Section */}
      <div className="bg-[rgba(242,238,235,1)] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center text-[rgba(36,40,15,1)] mb-12">
            Fale Conosco
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
