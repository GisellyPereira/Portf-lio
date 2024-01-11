import React from "react";
import LinkedIn from "../../components/Svg/LinkedIn.js";
import Github from "@/components/Svg/Github.js";
import XIcon from "@/components/Svg/X.js";
import Sun from "@/components/Svg/Sun.js";

const Header = () => (
    
      <div className="mt-10 bg-shades-darkLight-blackbg flex justify-between p-5">
        <ul className="flex gap-10">
          <li>
            <a href="/">Sobre</a>{" "}
          </li>
          <li>
            <a href="/">Projetos</a>{" "}
          </li>
          <li>
            <a href="/">Contato</a>{" "}
          </li>
          <li>
            <a href="/">More</a>{" "}
          </li>
        </ul>
        <ul className="flex gap-4">
          <LinkedIn />
          <XIcon />
          <Github />
          <span className="text-primary-head-mediumGray">|</span>
          <Sun />
        </ul>
      </div>
  
  );
  
  export default Header;
  