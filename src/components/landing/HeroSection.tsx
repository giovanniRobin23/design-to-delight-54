
import React from "react";
import { fonts } from "../../lib/fonts";

export const HeroSection: React.FC = () => {
  return (
    <div className="h-[717px] w-full max-md:max-w-full">
      <div className="bg-[rgba(36,40,15,1)] flex min-h-[816px] w-full items-center gap-[40px_107px] justify-center flex-wrap pr-px pt-[49px] pb-[99px] max-md:max-w-full">
        <div className="self-stretch min-w-60 min-h-[668px] w-[671px] my-auto max-md:max-w-full">
          <div className="flex min-h-[254px] w-full flex-col text-[120px] text-[rgba(229,225,214,1)] tracking-[-6px] leading-[120px] justify-center py-[21px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]">
            <div className="border min-h-[214px] w-[645px] max-w-full overflow-hidden rounded-[5px] border-[rgba(151,71,255,0)] border-dashed max-md:text-[40px] max-md:leading-[44px]">
              <div className="self-stretch w-full gap-2.5 max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]">
                <span style={{ fontFamily: fonts.sigmar, color: "rgba(229,225,214,1)" }}>
                  AC
                </span>
                <span style={{ fontFamily: fonts.sigmar, letterSpacing: "5px", color: "rgba(229,225,214,1)" }}>
                  E
                </span>
                <span style={{ fontFamily: fonts.sigmar, color: "rgba(229,225,214,1)" }}>
                  LERA NEGÓGIO
                </span>
              </div>
              <div className="flex min-h-[213px] gap-2.5 py-2.5 max-md:max-w-full" />
            </div>
          </div>
          <div className="self-stretch flex-1 shrink basis-[0%] min-h-[89px] w-full gap-2.5 text-3xl text-[rgba(250,245,241,1)] font-light leading-10 mt-4 max-md:max-w-full">
            <span style={{ fontWeight: 800, color: "rgba(225,240,121,1)" }}>
              Você
            </span>{" "}
            é o motivo pelo qual um{" "}
            <span style={{ fontWeight: 800, color: "rgba(225,240,121,1)" }}>
              sonho
            </span>{" "}
            continua{" "}
            <span style={{ fontWeight: 800, color: "rgba(225,240,121,1)" }}>
              vivo
            </span>
            .
          </div>
          <button
            className="bg-[rgba(225,240,121,1)] w-[166px] max-w-full text-[15px] text-[rgba(36,40,15,1)] text-center leading-loose mt-4 py-3 rounded-[10px] border-[rgba(225,240,121,1)] border-solid border-2 hover:bg-[rgba(215,230,111,1)] transition-colors"
            aria-label="Junte-se a nós"
          >
            JUNTE-SE A NÓS
          </button>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/28b362fbc1240e13e010a14f53c9c19d5fabc6db?placeholderIfAbsent=true"
          alt="Acelera Negócio illustration"
          className="aspect-[1.21] object-contain w-[586px] self-stretch min-w-60 gap-2.5 my-auto py-2.5 max-md:max-w-full"
        />
      </div>
    </div>
  );
};
