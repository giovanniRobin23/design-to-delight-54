
import React from "react";
import { fonts } from "../../lib/fonts";

export const HeroSection: React.FC = () => {
  return (
    <div className="h-auto w-full max-md:max-w-full">
      <div className="bg-[rgba(36,40,15,1)] flex flex-col md:flex-row min-h-[600px] md:min-h-[816px] w-full items-center gap-8 md:gap-[40px_107px] justify-center py-12 md:py-[49px] md:pb-[99px] px-4 md:px-8 max-md:max-w-full">
        <div className="self-stretch min-w-[280px] md:min-w-60 w-full md:w-[671px] md:my-auto max-md:max-w-full animate-fade-in-up">
          <div className="flex min-h-[180px] md:min-h-[254px] w-full flex-col text-[60px] md:text-[120px] text-[rgba(229,225,214,1)] tracking-[-3px] md:tracking-[-6px] leading-[60px] md:leading-[120px] justify-center py-4 md:py-[21px] max-md:max-w-full">
            <span style={{ fontFamily: fonts.sigmar, color: "rgba(229,225,214,1)" }}>
              ACELERA
              NEGÓGIO
            </span>
          </div>
          <div className="self-stretch flex-1 shrink basis-[0%] min-h-[60px] md:min-h-[89px] w-full gap-2.5 text-xl md:text-3xl text-[rgba(250,245,241,1)] font-light leading-8 md:leading-10 mt-4 max-md:max-w-full">
            <span style={{ fontWeight: 800, color: "rgba(225,240,121,1)" }} className="animate-subtle-pulse inline-block">
              Você
            </span>{" "}
            é o motivo pelo qual um{" "}
            <span style={{ fontWeight: 800, color: "rgba(225,240,121,1)" }} className="animate-subtle-pulse inline-block">
              sonho
            </span>{" "}
            continua{" "}
            <span style={{ fontWeight: 800, color: "rgba(225,240,121,1)" }} className="animate-subtle-pulse inline-block">
              vivo
            </span>
            .
          </div>
          <button
            className="bg-[rgba(225,240,121,1)] w-[166px] max-w-full text-[15px] text-[rgba(36,40,15,1)] text-center leading-loose mt-6 py-3 rounded-[10px] border-[rgba(225,240,121,1)] border-solid border-2 hover:bg-[rgba(215,230,111,1)] transition-all duration-300 hover:shadow-md hover:scale-105"
            aria-label="Junte-se a nós"
          >
            JUNTE-SE A NÓS
          </button>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/28b362fbc1240e13e010a14f53c9c19d5fabc6db?placeholderIfAbsent=true"
          alt="Acelera Negócio illustration"
          className="aspect-[1.21] object-contain w-full md:w-[586px] max-w-[90%] md:max-w-full py-4 md:py-2.5 animate-gentle-float"
        />
      </div>
    </div>
  );
};
