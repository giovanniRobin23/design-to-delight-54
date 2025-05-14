
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { fonts } from "../../lib/fonts";

export const FAQSection: React.FC = () => {
  return (
    <section className="bg-[rgba(242,238,235,1)] py-12 md:py-16 px-4 mt-10 md:mt-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[69px] text-center text-[rgba(36,40,15,1)] mb-8 md:mb-12 tracking-[-1px] md:tracking-[-1px] leading-tight md:leading-none" style={{ fontFamily: fonts.sigmar }}>
          Perguntas Frequentes
        </h2>
        
        <div className="bg-white rounded-lg p-6 md:p-10 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                Sobre o que é?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                <p>
                  É sobre colocar a sua empresa como protagonista de uma grande ação para empreendedores.<br/>
                  Vamos dar R$100.000 — ou melhor, a sua empresa vai dar — sem tirar um centavo do bolso.<br/>
                  A sua empresa leva todo o crédito. E você será visto como quem impulsionou tudo.<br/>
                  Seu negócio receberá no mínimo 50 mil leads, de donos de empresas reais, enfrentando desafios reais.<br/>
                  Você só precisa fazer o que já sabe: vender.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                Qual o objetivo?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                <p>
                  Acelerar todos os envolvidos: quem é parceiro, quem recebe e quem participa. Acreditamos que generosidade atrai prosperidade.<br/>
                  Sua empresa será vista como agente de transformação — isso gera mídia, autoridade e vendas.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                Para quem é?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                <p>
                  Apenas empreendedores, empresários, que possuem um negócio ativo, não para ideias.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                Qual o custo?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                <p>
                  Multiplique seu custo por lead por 50.000x. Adicione uma equipe de ponta para gerenciar tudo isso.<br/>
                  Inclua ainda um prêmio real de R$100.000 entregue ao vencedor.<br/>
                  Estamos falando de um investimento que ultrapassa R$1.000.000.<br/>
                  E você pode se tornar parceiro, com direito a todo o crédito — a partir de R$0,01.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                Quem decide o ganhador?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                <p>
                  Você decide. Cada parceiro tem direito a um voto. O Acelera não interfere na decisão.<br/>
                  A responsabilidade — e o impacto — é toda sua.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                Quais são os tipos de parceria?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                <div>
                  <p><strong>1. Parceiro Amigo</strong><br/>
                  Você decide quanto investir. O valor aparece publicamente (ou pode ser ocultado), em uma lista decrescente — ótimo para marketing e posicionamento.</p>
                  <br/>
                  <p><strong>2. Parceiro Performance</strong><br/>
                  Para empresas que querem gerar vendas reais. Você receberá +50 mil leads com dados completos, indicação exclusiva da sua empresa direto no WhatsApp dos donos dos negócios. Oferta única válida por 48h, em até 21x de 289,50.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                O que faz esses leads especiais?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                <div>
                  <p>Nossos leads são especiais porque vêm com história, contexto e urgência real. Eles se inscrevem espontaneamente, contando os desafios do próprio negócio — já te enxergando como referência. Você não recebe apenas contatos, mas decisores prontos para agir, com confiança emocional e abertura para soluções.<br/>
                  Mais que dados de contato, você terá:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>O que tentaram resolver, onde falharam e o que esperam de um fornecedor. Isso te coloca 10 passos à frente de qualquer vendedor comum.</li>
                    <li>Vêm com contexto, não só contato.</li>
                    <li>Eles abriram vulnerabilidades. E isso cria um canal direto para relações de confiança e vendas com base em impacto, não pressão.</li>
                    <li>E, o mais importante: já associaram seu nome à mudança que querem viver.</li>
                  </ul>
                  <p className="mt-3">Leads que já te enxergam como autoridade — isso não se compra com anúncio e nem com conteúdo.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                O ganhador receberá apenas o dinheiro?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                <p>
                  Não. Os R$100.000 são só o começo.<br/>
                  Além de ter liberdade total para usar o dinheiro como quiser, o vencedor também receberá um plano de crescimento personalizado, criado junto com os parceiros de destaque do seu setor.<br/>
                  Tudo isso será 100% bancado pelo Acelera. É mais do que só dinheiro. É estrutura, apoio e caminho aberto para crescer.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                Existe garantia?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                <p>
                  Sim.<br/>
                  <strong>Parceiro Performance:</strong> Garantia de vendas ou reembolso.<br/>
                  <strong>Parceiro Amigo:</strong> Garantia de autoridade.<br/>
                  Ambos têm segurança contratual e comprovação de entrega.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
