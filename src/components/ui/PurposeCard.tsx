
import React from "react";

interface PurposeCardProps {
  backgroundColor: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const PurposeCard: React.FC<PurposeCardProps> = ({
  backgroundColor,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div
      className={`${backgroundColor} self-stretch flex min-w-[280px] md:min-w-60 min-h-[550px] md:min-h-[750px] flex-col overflow-hidden items-stretch justify-center w-full md:w-[418px] my-auto px-5 md:px-[37px] py-10 md:py-[86px] rounded-[18px] transition-all duration-300 hover:shadow-lg animate-fade-in-up hover:translate-y-[-3px]`}
    >
      <div className="self-center flex h-[200px] md:h-[303px] w-[200px] md:w-[298px] max-w-full items-center gap-2.5 justify-center pb-6 md:pb-9">
        <img
          src={imageSrc}
          alt={title}
          className="aspect-[0.98] object-contain w-full self-stretch my-auto animate-gentle-float"
        />
      </div>
      <h3 className="text-[rgba(14,15,10,1)] text-4xl md:text-[51px] font-light leading-tight md:leading-none tracking-[-1px] md:tracking-[-1px] text-center max-md:text-[32px] transition-all duration-500">
        {title}
      </h3>
      <p className="self-stretch w-full gap-2.5 overflow-hidden text-lg md:text-xl text-[rgba(14,15,10,1)] font-light tracking-[-0.4px] md:tracking-[-0.45px] leading-7 md:leading-8 py-6 md:py-[40px] text-center mt-10">
        {description}
      </p>
    </div>
  );
};
