
import React from "react";
import { fonts } from "../../lib/fonts";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(36,38,15,1)] min-h-[300px] md:min-h-[452px] w-full mt-10 md:mt-[85px] px-4 md:px-[137px] py-10 md:py-[65px] max-md:max-w-full">
      <div className="w-full md:w-[493px] max-w-full text-5xl md:text-[100px] text-[rgba(238,242,126,1)] tracking-[-3px] md:tracking-[-6px] leading-none max-md:max-w-full max-md:text-center">
        <span style={{ fontFamily: fonts.sigmar, color: "rgba(238,242,126,1)" }}>
          AC
        </span>
        <span style={{ fontFamily: fonts.sigmar, letterSpacing: "5px", color: "rgba(238,242,126,1)" }}>
          E
        </span>
        <span style={{ fontFamily: fonts.sigmar, color: "rgba(238,242,126,1)" }}>
          LERA NEGÓGIO
        </span>
      </div>
      <div className="flex w-full flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-0 mt-8 md:mt-[33px] py-5 max-md:max-w-full">
        <nav className="flex min-w-[280px] md:min-w-60 flex-col overflow-hidden items-stretch text-[10px] text-[rgba(250,245,241,1)] font-light leading-none justify-center w-full md:w-[439px] px-4 md:px-[30px] py-px max-md:max-w-full">
          <div className="flex w-full items-center gap-4 md:gap-[25px] justify-center">
            <a href="#" className="text-center self-stretch w-auto md:w-[126px] my-auto hover:underline">
              Política de Privacidade
            </a>
            <a href="#" className="self-stretch w-auto md:w-[102px] my-auto hover:underline">
              Termos e Condições
            </a>
            <a href="#" className="self-stretch w-auto md:w-[101px] my-auto hover:underline">
              Outros links
            </a>
          </div>
        </nav>
        <div className="flex min-w-[280px] md:min-w-60 items-center justify-center md:justify-start gap-5 md:gap-3.5 w-full md:w-[680px] my-auto md:pl-20 max-md:max-w-full">
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/bf2e36fb95a0aa0f9ec434143f2c23d82654c105?placeholderIfAbsent=true"
              alt="Social media icon"
              className="aspect-[1] object-contain w-6 md:w-5 shrink-0"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/e2301db07fb33b1914b978a28ccf6f3001ca8ad3?placeholderIfAbsent=true"
              alt="Social media icon"
              className="aspect-[1.05] object-contain w-6 md:w-[21px] shrink-0"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/9fc7e23009deff17eb6eba07ec23480c0c72bb90?placeholderIfAbsent=true"
              alt="Social media icon"
              className="aspect-[1.05] object-contain w-6 md:w-[21px] shrink-0"
            />
          </a>
        </div>
      </div>
      <div className="w-full text-[9px] text-center md:text-left text-[rgba(250,245,241,1)] font-light uppercase leading-loose mt-8 md:mt-[33px] py-5 md:py-[23px] border-[rgba(250,245,241,1)] border-t max-md:max-w-full">
        Copyright © 2025 Acelera negócio. All Rights Reserved.
      </div>
    </footer>
  );
};
