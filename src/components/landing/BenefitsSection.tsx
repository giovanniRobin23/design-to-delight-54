
import React from "react";
import { BenefitCard } from "../ui/BenefitCard";
import { fonts } from "../../lib/fonts";

export const BenefitsSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch justify-center mt-[85px] max-md:max-w-full max-md:mt-10">
      <div className="bg-[rgba(242,238,235,1)] flex w-full flex-col overflow-hidden items-center justify-center px-[158px] py-[34px] max-md:max-w-full max-md:px-5">
        <h2 className="self-stretch w-[1416px] min-h-[181px] max-w-full text-[69px] text-[rgba(14,15,10,1)] text-center tracking-[-3.9px] leading-[72px] px-[111px] py-[38px] max-md:max-w-full max-md:text-[40px] max-md:leading-[46px] max-md:px-5" style={{ fontFamily: fonts.sigmar }}>
          Construindo para uma nova era de
          <br />
          generosidade{" "}
        </h2>
        <div className="flex min-h-[931px] w-[1340px] max-w-full items-center justify-between mt-2.5 pt-[78px] pb-2.5">
          <div className="self-stretch min-w-60 w-full my-auto max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[33%] max-md:w-full max-md:ml-0">
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
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
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
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
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
            </div>
            <div className="max-md:max-w-full mt-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[33%] max-md:w-full max-md:ml-0">
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
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
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
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
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
      </div>
    </section>
  );
};
