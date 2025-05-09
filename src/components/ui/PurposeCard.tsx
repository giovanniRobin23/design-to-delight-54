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
      className={`${backgroundColor} self-stretch flex min-w-60 min-h-[750px] flex-col overflow-hidden items-stretch justify-center w-[418px] my-auto px-[37px] py-[86px] rounded-[18px] max-md:px-5`}
    >
      <div className="self-center flex h-[303px] w-[298px] max-w-full items-center gap-2.5 justify-center pb-9">
        <img
          src={imageSrc}
          alt={title}
          className="aspect-[0.98] object-contain w-[298px] self-stretch min-w-60 my-auto"
        />
      </div>
      <h3 className="text-[rgba(14,15,10,1)] text-[51px] font-light leading-none tracking-[-2.4px] text-center max-md:text-[40px]">
        {title}
      </h3>
      <p className="self-stretch w-full gap-2.5 overflow-hidden text-xl text-[rgba(14,15,10,1)] font-light tracking-[-0.45px] leading-8 py-[9px]">
        {description}
      </p>
    </div>
  );
};
