
import React from "react";
import { fonts } from "../../lib/fonts";

export const CallToAction: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center text-[rgba(250,245,241,1)] font-normal text-center justify-center mt-10 md:mt-[85px] max-md:max-w-full">
      <div className="bg-[rgba(182,191,115,1)] min-h-[500px] md:min-h-[696px] w-full px-4 md:px-[123px] max-md:max-w-full">
        <div className="flex w-full flex-col items-center justify-between flex-1 px-4 md:px-[117px] py-16 md:py-[150px] max-md:max-w-full">
          <h2 className="text-4xl md:text-[82px] leading-tight md:leading-[90px] tracking-[-2px] md:tracking-[-4px] max-md:max-w-full" style={{ fontFamily: fonts.sigmar }}>
            Pronto para deixar de ser apenas mais um e se tornar protagonista?
          </h2>
          <p className="text-xl md:text-[32px] leading-tight md:leading-none self-stretch mt-6 md:mt-[17px] max-md:max-w-full">
            Alcance suas metas com leads direcionados e agregue valor ao seu
            negócio.
          </p>
          <div className="flex justify-center w-full mt-8 md:mt-[17px]">
            <button
              className="bg-[rgba(225,240,121,1)] gap-2.5 text-[15px] text-[rgba(36,40,15,1)] leading-loose py-3 px-6 rounded-[10px] border-[rgba(225,240,121,1)] border-solid border-2 hover:bg-[rgba(215,230,111,1)] transition-colors"
              aria-label="Junte-se a nós"
            >
              JUNTE-SE A NÓS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
