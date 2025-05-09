
import React from "react";
import { fonts } from "../../lib/fonts";

export const WelcomeSection: React.FC = () => {
  return (
    <section className="bg-[rgba(242,238,235,1)] flex w-full flex-col overflow-hidden items-stretch justify-center px-4 md:px-[158px] py-10 md:py-[81px] max-md:max-w-full">
      <div className="bg-[rgba(230,225,215,1)] relative flex w-full flex-col md:flex-row gap-8 md:gap-[40px_161px] px-5 md:px-[50px] py-8 md:py-[78px] rounded-[18px] max-md:max-w-full">
        <div className="md:w-[389px]">
          <h2 className="text-4xl md:text-[100px] text-[rgba(36,40,15,1)] uppercase tracking-[-0.2px] leading-tight md:leading-none max-md:text-center" style={{ fontFamily: fonts.sigmar }}>
            BEM-VINDO
          </h2>
        </div>
        <p className="text-[rgba(36,40,15,1)] text-xl md:text-3xl font-extralight leading-8 md:leading-[50px] tracking-[1px] md:w-[705px] max-md:max-w-full">
          Esse é um movimento dedicado a catalisar o potencial ilimitado dos
          empreendedores em todo o Brasil. Acreditamos na força da iniciativa
          privada como agente de mudança social e econômica, e nosso propósito
          é ser o motor que impulsiona essa transformação
        </p>
        <div className="absolute z-0 flex min-h-[151px] min-w-60 gap-2.5 -translate-x-2/4 translate-y-[0%] py-2.5 left-2/4 bottom-[106px] max-md:hidden" />
        <div className="rotate-[3.141592653589793rad] absolute z-0 min-w-60 overflow-hidden left-[-65px] bottom-[-81px] w-[418px] max-md:hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/e979dc8c66845bfb4e3e144621fc560a2f641e89?placeholderIfAbsent=true"
            alt="Success story illustration"
            className="aspect-[1.47] object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};
