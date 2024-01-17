import React from "react";
import Arrow from "@/components/Svg/Arrow/Arrow.js";

const ContentBlock = ({ title, description }) => (
  <div className="flex bg-primary-head-onyx rounded border border-primary-head-mediumGray px-5 py-5 w-96"> {/* Definindo um tamanho fixo para o cartão */}
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-primary-head-lightGray">{description}</p>
    </div>
    <div className="flex-grow"></div>
    <div className="ml-4"> 
      <Arrow />
    </div>
  </div>
);

export default ContentBlock;
