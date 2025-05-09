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
    <div className="bg-white flex grow flex-col items-center text-[rgba(14,15,10,1)] font-light text-center w-full pt-[60px] pb-[95px] px-[43px] rounded-3xl max-md:mt-10 max-md:px-5">
      <img
        src={iconSrc}
        alt={`${title} icon`}
        className="aspect-[1] object-contain w-[60px]"
      />
      <h3 className="text-[34px] leading-9 tracking-[-0.7px] self-stretch mt-[30px]">
        {title}
      </h3>
      <div className="text-xl leading-[25px] tracking-[-0.3px] self-stretch mt-[49px] max-md:mt-10">
        {description}
      </div>
    </div>
  );
};
