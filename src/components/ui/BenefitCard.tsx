
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
    <div className="bg-white flex flex-col items-center text-[rgba(14,15,10,1)] font-light text-center w-full h-full min-h-[350px] md:min-h-[450px] pt-[40px] md:pt-[60px] pb-[60px] md:pb-[95px] px-5 md:px-[43px] rounded-3xl">
      <img
        src={iconSrc}
        alt={`${title} icon`}
        className="aspect-[1] object-contain w-[60px]"
      />
      <h3 className="text-2xl md:text-[34px] leading-tight md:leading-9 tracking-[-0.5px] md:tracking-[-0.7px] self-stretch mt-[20px] md:mt-[30px]">
        {title}
      </h3>
      <div className="text-base md:text-xl leading-6 md:leading-[25px] tracking-[-0.2px] md:tracking-[-0.3px] self-stretch mt-[30px] md:mt-[49px] flex-grow">
        {description}
      </div>
    </div>
  );
};
