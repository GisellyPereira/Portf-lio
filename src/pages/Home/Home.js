import React from "react";
import Footer from "../../components/Footer/Footer.js";
import { Link } from "react-router-dom";
import LinkedInIcon from "@/components/Svg/LinkedIn/LinkedIn.js";
import Github from "@/components/Svg/Github/Github.js";
import Instagram from "@/components/Svg/Instagram/Instagram.js";
import X from "@/components/Svg/X/X.js";
import Arrow from "@/components/Svg/Arrow/Arrow.js";

const Home = () => {
  const socialMediaLinks = [
    {
      url: "https://www.linkedin.com/in/giselly-pereira/",
      icon: <LinkedInIcon />,
      text: "LinkedIn",
    },
    {
      url: "https://github.com/GisellyPereira",
      icon: <Github />,
      text: "Github",
    },
    {
      url: "https://www.instagram.com/giselly.ap_/",
      icon: <Instagram />,
      text: "Instagram",
    },
    {
      url: "https://twitter.com/i/flow/login?redirect_after_login=%2Fgisellyy_ap",
      icon: <X />,
      text: "X (Twitter)",
    },
  ];

  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-primary-head-onyx px-2 py-1 rounded border border-primary-head-mediumGray gap-2"
      >
        {link.icon}
        <span className="text-white">{link.text}</span>
      </a>
    ));
  };

  return (
    <div className="font-sans mx-auto w-3/4">
      <header className="pt-10">
        <nav className="flex space-x-6">
          <Link to="/"> Home </Link>
          <Link to="/projects"> Projetos </Link>
          <Link to="/product"> Experiências </Link>
          <Link to="/product"> Blog </Link>
        </nav>
      </header>
      <div className="mt-20">
        <h1 className="mb-2">Olá, meu nome é Giselly 👋 . </h1>
        <h2 className="text-primary-head-lightGray">
          Desenvolvedora Front-End.
        </h2>
        <div className="flex gap-4 mt-5">{renderSocialLinks()}</div>
        <div className="mt-10 w-3/5">
          <p>
            Sou uma desenvolvedora front-end com três anos de experiência,
            focada em criar interfaces intuitivas para web e mobile. Já{" "}
            <Link
              to="/"
              className="ml-1 underline text-primary-head-lightGray font-semibold"
            >
              trabalhei
            </Link>{" "}
            em diversos projetos e estou cursando Análise e Desenvolvimento de
            Sistemas para aprimorar minhas habilidades no desenvolvimento
            front-end.
          </p>
          <p className="mt-10">Minhas principais stacks são: </p>
          <div className="flex flex-wrap mt-2 gap-1">
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="JavaScript"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS3"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/Next-%23323330?style=for-the-badge&logo=next.js&logoColor=white"
              alt="Next.js"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
              alt="SASS"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
              alt="Styled Components"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black"
              alt="Babel"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/reactnative-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white"
              alt="React Native"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/bootstrap-4B0082?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="Boootstrap"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/tailwind-%2367C5CC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="Tailwind"
              className="h-auto"
            />
          </div>
        </div>

        <div className="mt-10 ">
          <h3 className="font-semibold mb-6">📌 Posts recentes</h3>
          <div className="flex gap-10 mb-3">
            <div className="flex bg-primary-head-onyx rounded border border-primary-head-mediumGray px-5 py-5 ">
              <div>
                <h4 className="font-semibold">Minha história</h4>
                <p className="text-primary-head-lightGray">
                  Como vim parar aqui!
                </p>
              </div>
              <div className="flex-grow"></div>
              <div className="ml-28">
                <Arrow />
              </div>
            </div>

            <div className="flex bg-primary-head-onyx rounded border border-primary-head-mediumGray px-5 py-5 ">
              <div>
                <h4 className="font-semibold">Minha história</h4>
                <p className="text-primary-head-lightGray">
                  Como vim parar aqui!
                </p>
              </div>
              <div className="flex-grow"></div>
              <div className="ml-28">
                <Arrow />
              </div>
            </div>
          </div>
          <Link to="history" className="underline">
            Ver mais
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
