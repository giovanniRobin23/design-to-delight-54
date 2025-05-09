import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(36,38,15,1)] min-h-[452px] w-full mt-[85px] px-[137px] py-[65px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="w-[493px] max-w-full text-[100px] text-[rgba(238,242,126,1)] font-normal tracking-[-6px] leading-none max-md:max-w-full max-md:text-[40px]">
        <span style={{ fontFamily: "Sigmar, -apple-system, Roboto, Helvetica, sans-serif", color: "rgba(238,242,126,1)" }}>
          AC
        </span>
        <span style={{ fontFamily: "Sigmar, -apple-system, Roboto, Helvetica, sans-serif", letterSpacing: "5px", color: "rgba(238,242,126,1)" }}>
          E
        </span>
        <span style={{ fontFamily: "Sigmar, -apple-system, Roboto, Helvetica, sans-serif", color: "rgba(238,242,126,1)" }}>
          LERA NEGÓGIO
        </span>
      </div>
      <div className="flex w-full items-stretch justify-center flex-wrap mt-[33px] px-10 py-5 max-md:max-w-full max-md:px-5">
        <nav className="flex min-w-60 flex-col overflow-hidden items-stretch text-[10px] text-[rgba(250,245,241,1)] font-light leading-none justify-center w-[439px] px-[30px] py-px max-md:max-w-full max-md:px-5">
          <div className="flex w-full items-center gap-[25px] justify-center">
            <a href="#" className="text-center self-stretch w-[126px] my-auto hover:underline">
              Política de Privacidade
            </a>
            <a href="#" className="self-stretch w-[102px] my-auto hover:underline">
              Termos e Condições
            </a>
            <a href="#" className="self-stretch w-[101px] my-auto hover:underline">
              Outros links
            </a>
          </div>
        </nav>
        <div className="flex min-w-60 items-stretch gap-3.5 flex-wrap w-[680px] my-auto pl-20 max-md:max-w-full">
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/bf2e36fb95a0aa0f9ec434143f2c23d82654c105?placeholderIfAbsent=true"
              alt="Social media icon"
              className="aspect-[1] object-contain w-5 shrink-0"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/e2301db07fb33b1914b978a28ccf6f3001ca8ad3?placeholderIfAbsent=true"
              alt="Social media icon"
              className="aspect-[1.05] object-contain w-[21px] shrink-0"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/9fc7e23009deff17eb6eba07ec23480c0c72bb90?placeholderIfAbsent=true"
              alt="Social media icon"
              className="aspect-[1.05] object-contain w-[21px] shrink-0"
            />
          </a>
        </div>
      </div>
      <div className="w-full text-[9px] text-[rgba(250,245,241,1)] font-light uppercase leading-loose mt-[33px] py-[23px] border-[rgba(250,245,241,1)] border-t max-md:max-w-full max-md:pr-5">
        Copyright © 2025 Acelera negócio. All Rights Reserved.
      </div>
    </footer>
  );
};
