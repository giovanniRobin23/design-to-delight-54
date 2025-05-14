
import React from "react";
import { BenefitCard } from "../ui/BenefitCard";
import { fonts } from "../../lib/fonts";

export const BenefitsSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch justify-center mt-10 md:mt-[85px] max-md:max-w-full">
      <div className="bg-[rgba(242,238,235,1)] flex w-full flex-col overflow-hidden items-center justify-center px-4 md:px-[158px] py-8 md:py-[34px] max-md:max-w-full">
        <h2 className="self-stretch max-w-full text-3xl md:text-[69px] text-[rgba(14,15,10,1)] text-center tracking-[-2px] md:tracking-[-4px] leading-tight md:leading-[72px] px-4 md:px-[111px] py-6 md:py-[38px] max-md:text-[32px]" style={{ fontFamily: fonts.sigmar }}>
          Construindo para uma nova era de
          <br />
          generosidade{" "}
        </h2>
        <div className="flex w-full max-w-[1340px] items-center justify-center mt-2.5 pt-8 md:pt-[78px] pb-2.5">
          <div className="w-full">
            {/* First row of cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="w-full">
                <BenefitCard
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/d8ed6cb3500512ad156ac7cee638a8b7881acc34?placeholderIfAbsent=true"
                  title="Respeito à autenticidade"
                  description={
                    <>
                      Não buscamos perfeição, buscamos{" "}
                      <span style={{ fontWeight: 800 }}>verdade</span>. <br />O
                      que importa é a intenção real e o potencial do negócio.
                    </>
                  }
                />
              </div>
              <div className="w-full">
                <BenefitCard
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/91d83b3f2f2203744b25fca6d52e9d7e02c15399?placeholderIfAbsent=true"
                  title="O bem como estratégia"
                  description={
                    <>
                      Fazer o bem não é caridade, é inteligência.{" "}
                      <span style={{ fontWeight: 800 }}>Todos ganham</span>.
                    </>
                  }
                />
              </div>
              <div className="w-full">
                <BenefitCard
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/c791f06dc9423b0e5a9817b9976b48621635b8d8?placeholderIfAbsent=true"
                  title="Compromisso com o resultado real"
                  description={
                    <>
                      Não prometemos alcance, <br />
                      entregamos{" "}
                      <span style={{ fontWeight: 800 }}>impacto.</span>
                    </>
                  }
                />
              </div>
            </div>
            
            {/* Second row of cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
              <div className="w-full">
                <BenefitCard
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/d1551e5119cfd96ec623605dfd990ed8cd31e8e1?placeholderIfAbsent=true"
                  title="Autoridade com propósito"
                  description={
                    <>
                      Crescimento que vem com{" "}
                      <span style={{ fontWeight: 800 }}>
                        responsabilidade e verdade
                      </span>
                      .
                    </>
                  }
                />
              </div>
              <div className="w-full">
                <BenefitCard
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/1b6b8ea006b5b695a8a5a3a0c03ba2e764c9ddbc?placeholderIfAbsent=true"
                  title="Dar voz a quem faz"
                  description={
                    <>
                      Nosso papel é{" "}
                      <span style={{ fontWeight: 800 }}>revelar empresas</span>{" "}
                      que têm muito a dizer, mas pouca visibilidade.
                    </>
                  }
                />
              </div>
              <div className="w-full">
                <BenefitCard
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/e64c379134dd4b5eb7fc35fabc273178/e7946a3859cc6c706eb1d0695aca965f6abcc31c?placeholderIfAbsent=true"
                  title="Liberdade com responsabilidade"
                  description={
                    <>
                      Cada parceiro decide o quanto investe, mas todos{" "}
                      <span style={{ fontWeight: 800 }}>compartilham</span> a
                      missão.
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
