import React from "react";
import Footer from "../../components/Footer/Footer.js";
import Header from "@/components/Header/Header.js";

const Home = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-primary-head-black text-primary-head-white">
      <div className="header">
        <div className="max-w-[70vw] mx-auto">
          <Header />
          <div className="mt-20">
            <h1 className="text-primary-head-darkGray font-bold text-5xl mb-10 tracking-wide">
              Eu sou a <span className="text-primary-head-white">Giselly Pereira</span>
            </h1>
            <h2 className="text-primary-head-darkGray max-w-[30vw] mb-4 text-xl leading-loose tracking-wide">
              Sou uma entusiasta apaixonada pela criação visual e funcional de
              interfaces, especializada no desenvolvimento front-end para
              plataformas web e mobile. Ao longo da minha jornada profissional,
              tenho dedicado minha energia e habilidades para transformar
              conceitos criativos em experiências digitais envolventes.
            </h2>
            <div>
              <button className="btn-primary ">CV </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
