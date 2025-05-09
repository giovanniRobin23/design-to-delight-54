
import React from "react";
import { ContactForm } from "../ui/ContactForm";
import { fonts } from "../../lib/fonts";

export const ContactFormSection: React.FC = () => {
  return (
    <section className="bg-[rgba(242,238,235,1)] py-12 md:py-16 px-4 mt-10 md:mt-[85px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center text-[rgba(36,40,15,1)] mb-8 md:mb-12" style={{ fontFamily: fonts.sigmar }}>
          Fale Conosco
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};
