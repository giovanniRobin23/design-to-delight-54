
import React from "react";
import { PurposeCard } from "../ui/PurposeCard";
import { fonts } from "../../lib/fonts";

export const PurposeSection: React.FC = () => {
  return (
    <section className="bg-[rgba(242,238,235,1)] flex w-full flex-col overflow-hidden items-stretch justify-center px-4 md:px-[158px] py-10 md:py-[81px] max-md:max-w-full">
      <div className="relative flex w-full flex-col items-center justify-center flex-1 max-md:max-w-full">
        <h2 className="text-[rgba(36,40,15,1)] text-3xl md:text-[69px] leading-tight md:leading-none tracking-[-2px] md:tracking-[-4px] text-center z-0 max-md:max-w-full px-4" style={{ fontFamily: fonts.sigmar }}>
          UM PROPÓSITO PARA SUA EMPRESA
        </h2>
        <div className="z-0 flex w-full md:w-[1286px] max-w-full items-center justify-center flex-wrap mt-10 md:mt-[93px] gap-6">
          <div className="self-stretch flex flex-col md:flex-row w-full items-center gap-6 md:gap-4 justify-center flex-wrap max-md:max-w-full">
            <PurposeCard
              backgroundColor="bg-[rgba(170,181,105,1)]"
              title="BENEFÍCIOS"
              description="Sua empresa será vista como protagonista de uma transformação real, responsável por conceder R$100 mil para impulsionar um negócio brasileiro. Isso gera mídia espontânea, engajamento emocional e reconhecimento imediato."
              imageSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/29ff066787bc9e733c96ae620ebbd23dadbcbbb7?placeholderIfAbsent=true"
            />
            
            <PurposeCard
              backgroundColor="bg-[rgba(225,240,121,1)]"
              title="DIFERENCIAL"
              description="Estudos da Harvard Business School, Accenture e Meio & Mensagem mostram que marcas com propósito vendem mais, fidelizam melhor e são preferidas por até 83% dos consumidores brasileiros."
              imageSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/9de3bb9e123d894b65dd066559d33340c77b50d3?placeholderIfAbsent=true"
            />
            
            <PurposeCard
              backgroundColor="bg-[rgba(249,255,204,1)]"
              title="RESULTADOS"
              description="Garantimos o crescimento, e vendas pro seu negócio, o risco é zero. Oferecemos algo inédito no mercado: Garantia contratual de resultado."
              imageSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/8a6168b29100f7f02dc4d53b6806e73426e5d752?placeholderIfAbsent=true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
