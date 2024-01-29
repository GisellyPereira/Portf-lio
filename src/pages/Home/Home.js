// Home.js

import React from "react";
import { UserGroupIcon, SunIcon } from "@heroicons/react/24/outline";
import LinkedIn from "../../components/Svg/LinkedIn.js";

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
        <ul>
          <UserGroupIcon className="w-6 h-6" />
          <SunIcon className="w-6 h-6" />
          <LinkedIn className="" />
        </ul>
      </header>

      <footer className="text-center py-4 mt-auto">
        <p>&copy; 2024 Meu Portfólio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
