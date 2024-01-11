// Home.js

import React from "react";
import LinkedIn from "../../components/Svg/LinkedIn.js";
import Github from "@/components/Svg/Github.js";
import XIcon from "@/components/Svg/X.js";
import Sun from "@/components/Svg/Sun.js";

const Home = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <header className="header flex justify-between">
        <ul className="flex gap-10">
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Contato</li>
          <li>More</li>
        </ul>
        <ul className="flex gap-4">
          <LinkedIn />
          <XIcon />
          <Github />
          <span className="" >|</span>
          <Sun />
        </ul>
      </header>

      <footer className="text-center py-4 mt-auto">
        <p>&copy; 2024 Meu Portfólio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
