import React from "react";

export const CallToAction: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center text-[rgba(250,245,241,1)] font-normal text-center justify-center mt-[85px] max-md:max-w-full max-md:mt-10">
      <div className="bg-[rgba(182,191,115,1)] min-h-[696px] w-full px-[123px] max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col items-center justify-between flex-1 px-[117px] py-[150px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
          <h2 className="text-[82px] leading-[90px] tracking-[-4.1px] max-md:max-w-full max-md:text-[40px] max-md:leading-[49px]">
            Pronto para levar a arrecadação{" "}
            <span style={{ fontSize: "70px" }}>de</span> fundos para o próximo
            nível?
          </h2>
          <p className="text-[32px] leading-none self-stretch mt-[17px] max-md:max-w-full">
            Alcance suas metas com leads direcionados e agregue valor ao seu
            negócio.
          </p>
          <button
            className="self-stretch w-[166px] bg-[rgba(225,240,121,1)] max-w-full gap-2.5 text-[15px] text-[rgba(36,40,15,1)] leading-loose mt-[17px] py-3 rounded-[10px] border-[rgba(225,240,121,1)] border-solid border-2 hover:bg-[rgba(215,230,111,1)] transition-colors"
            aria-label="Junte-se a nós"
          >
            JUNTE-SE A NÓS
          </button>
        </div>
      </div>
    </section>
  );
};
