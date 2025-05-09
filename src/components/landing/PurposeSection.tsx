import React from "react";
import { PurposeCard } from "../ui/PurposeCard";

export const PurposeSection: React.FC = () => {
  return (
    <section className="bg-[rgba(242,238,235,1)] flex w-full flex-col overflow-hidden items-stretch justify-center px-[158px] py-[81px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="relative flex w-full flex-col items-center justify-center flex-1 max-md:max-w-full">
        <h2 className="text-[rgba(36,40,15,1)] text-[69px] font-normal leading-none tracking-[-4px] text-center z-0 max-md:max-w-full max-md:text-[40px]">
          UM PROPÓSITO PARA SUA EMPRESA
        </h2>
        <div className="z-0 flex w-[1286px] max-w-full items-center justify-between mt-[93px] max-md:mt-10">
          <div className="self-stretch flex min-w-60 h-[737px] items-center gap-4 justify-center flex-wrap my-auto max-md:max-w-full">
            <PurposeCard
              backgroundColor="bg-[rgba(170,181,105,1)]"
              title="BENEFÍCIOS"
              description="Sua empresa será vista como protagonista de uma transformação real, responsável por conceder R$100 mil para impulsionar um negócio brasileiro. Isso gera mídia espontânea, engajamento emocional e reconhecimento imediato."
              imageSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/29ff066787bc9e733c96ae620ebbd23dadbcbbb7?placeholderIfAbsent=true"
            />
            
            <div className="bg-[rgba(225,240,121,1)] self-stretch flex min-w-60 min-h-[750px] flex-col overflow-hidden items-stretch text-[rgba(14,15,10,1)] font-light w-[418px] my-auto pt-[43px] pb-[89px] px-[37px] rounded-[18px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/9de3bb9e123d894b65dd066559d33340c77b50d3?placeholderIfAbsent=true"
                alt="Diferencial"
                className="aspect-[0.98] object-contain w-full"
              />
              <h3 className="text-[51px] leading-none tracking-[-2.4px] self-center max-md:text-[40px]">
                DIFERENCIAL
              </h3>
              <p className="w-full overflow-hidden text-xl tracking-[-0.45px] leading-8 pt-[3px] pb-[70px]">
                Estudos da Harvard Business School, Accenture e Meio &
                Mensagem mostram que marcas com propósito vendem mais,
                fidelizam melhor e são preferidas por até 83% dos consumidores
                brasileiros.
              </p>
            </div>
            
            <div className="bg-[rgba(249,255,204,1)] self-stretch flex min-w-60 min-h-[750px] flex-col overflow-hidden items-stretch w-[418px] my-auto pt-[43px] pb-[184px] px-[37px] rounded-[18px] max-md:pb-[100px] max-md:px-5">
              <div className="self-center flex h-[335px] w-[344px] flex-col overflow-hidden items-center justify-center aspect-[1]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/8a6168b29100f7f02dc4d53b6806e73426e5d752?placeholderIfAbsent=true"
                  alt="Resultados"
                  className="aspect-[1.11] object-contain w-full"
                />
              </div>
              <h3 className="text-[rgba(14,15,10,1)] text-[52px] font-light leading-none tracking-[-2.4px] text-center max-md:text-[40px]">
                RESULTADOS
              </h3>
              <p className="w-full overflow-hidden text-xl text-[rgba(14,15,10,1)] font-light tracking-[-0.45px] leading-8 pb-[17px]">
                Garantimos o crescimento, e vendas pro seu negócio, o risco é
                zero.
                <br />
                Oferecemos algo inédito no mercado:
                <br />
                Garantia contratual de resultado.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute z-0 flex min-h-36 w-[886px] max-w-full h-36 left-0 right-[718px] top-0" />
      </div>
    </section>
  );
};
