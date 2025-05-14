
import React, { ReactNode } from "react";

interface BenefitCardProps {
  iconSrc: string;
  title: string;
  description: ReactNode;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-white flex flex-col items-center text-[rgba(14,15,10,1)] font-light text-center w-full h-full min-h-[500px] pt-[50px] pb-[50px] px-[40px] rounded-3xl transition-all duration-300 hover:shadow-lg animate-soft-scale hover:translate-y-[-5px]">
      <img
        src={iconSrc}
        alt={`${title} icon`}
        className="aspect-[1] object-contain w-[60px] animate-gentle-float"
      />
      <h3 className="text-2xl md:text-[34px] leading-tight md:leading-9 tracking-[-1px] md:tracking-[-1px] self-stretch mt-[30px] transition-all duration-500">
        {title}
      </h3>
      <div className="text-base md:text-xl leading-6 md:leading-[25px] tracking-[-0.2px] md:tracking-[-0.3px] self-stretch mt-[40px] flex-grow">
        {description}
      </div>
    </div>
  );
};
