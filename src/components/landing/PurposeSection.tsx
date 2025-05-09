
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
            
            <div className="bg-[rgba(225,240,121,1)] self-stretch flex min-w-[280px] md:min-w-60 min-h-[550px] md:min-h-[750px] flex-col overflow-hidden items-stretch text-[rgba(14,15,10,1)] font-light w-full md:w-[418px] pt-[43px] pb-[70px] md:pb-[89px] px-5 md:px-[37px] rounded-[18px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/9de3bb9e123d894b65dd066559d33340c77b50d3?placeholderIfAbsent=true"
                alt="Diferencial"
                className="aspect-[0.98] object-contain w-full max-w-[300px] mx-auto"
              />
              <h3 className="text-4xl md:text-[51px] leading-tight md:leading-none tracking-[-1.8px] md:tracking-[-2.4px] text-center mt-6 max-md:text-[40px]">
                DIFERENCIAL
              </h3>
              <p className="w-full overflow-hidden text-lg md:text-xl tracking-[-0.45px] leading-7 md:leading-8 pt-6 md:pt-[3px] pb-[40px] md:pb-[70px] text-center">
                Estudos da Harvard Business School, Accenture e Meio &
                Mensagem mostram que marcas com propósito vendem mais,
                fidelizam melhor e são preferidas por até 83% dos consumidores
                brasileiros.
              </p>
            </div>
            
            <div className="bg-[rgba(249,255,204,1)] self-stretch flex min-w-[280px] md:min-w-60 min-h-[550px] md:min-h-[750px] flex-col overflow-hidden items-stretch w-full md:w-[418px] pt-[43px] pb-[70px] md:pb-[184px] px-5 md:px-[37px] rounded-[18px]">
              <div className="self-center flex h-[250px] md:h-[335px] w-[280px] md:w-[344px] flex-col overflow-hidden items-center justify-center aspect-[1]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/8a6168b29100f7f02dc4d53b6806e73426e5d752?placeholderIfAbsent=true"
                  alt="Resultados"
                  className="aspect-[1.11] object-contain w-full"
                />
              </div>
              <h3 className="text-[rgba(14,15,10,1)] text-4xl md:text-[52px] font-light leading-tight md:leading-none tracking-[-1.8px] md:tracking-[-2.4px] text-center max-md:text-[40px]">
                RESULTADOS
              </h3>
              <p className="w-full overflow-hidden text-lg md:text-xl text-[rgba(14,15,10,1)] font-light tracking-[-0.45px] leading-7 md:leading-8 pt-6 pb-[17px] text-center">
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
      </div>
    </section>
  );
};
