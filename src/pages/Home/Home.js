import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import LinkedInIcon from "@/components/Svg/LinkedIn/LinkedIn";
import Github from "@/components/Svg/Github/Github";
import Instagram from "@/components/Svg/Instagram/Instagram";
import X from "@/components/Svg/X/X";
import SocialLink from "../../components/SocialLink/SocialLink";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import ProjectBlock from "../../components/ProjectBlock/ProjectBlock";
import NavigationLink from "../../components/NavigationLink/NavigationLink";

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
      text: "Twitter",
    },
  ];

  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <SocialLink key={index} {...link} />
    ));
  };

  return (
    <div className="font-sans mx-auto w-3/4">
      <header className="pt-10">
        <nav className="flex space-x-6">
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/projects">Projetos</NavigationLink>
          <NavigationLink to="/experiences">Experiências</NavigationLink>
          <NavigationLink to="/blog">Blog</NavigationLink>
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
            <NavigationLink to="/experiences" className="ml-1">
              trabalhei
            </NavigationLink>{" "}
            em diversos projetos e estou cursando Análise e Desenvolvimento de
            Sistemas para aprimorar minhas habilidades no desenvolvimento
            front-end.
          </p>
          <p className="mt-10">Minhas principais stacks são:</p>
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
              alt="Bootstrap"
              className="h-auto"
            />
            <img
              src="https://img.shields.io/badge/tailwind-%2367C5CC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="Tailwind CSS"
              className="h-auto"
            />
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold mb-6">📌 Posts recentes</h3>
          <div className="flex gap-10 mb-3">
            <ContentBlock
              title="Minha história"
              description="Como vim parar aqui!"
            />
            <ContentBlock
              title="Minha história"
              description="Como vim parar aqui!"
            />
          </div>
          <Link to="/history" className="underline">
            Ver mais
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold mb-6">💼 Alguns dos meus projetos</h3>
          <div className="flex gap-10 mb-3">
            <ProjectBlock
              title="Animais Fantásticos"
              description="Projeto pessoal em JS."
              url="https://github.com/GisellyPereira/animais-fantasticos"
            />
            <ProjectBlock
              title="Projeto X"
              description="Descrição do Projeto X."
              url="https://github.com/GisellyPereira/projeto-x"
            />
          </div>
          <Link to="/projects" className="underline">
            Ver mais
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
