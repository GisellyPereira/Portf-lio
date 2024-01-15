import React from "react";
import Footer from "../../components/Footer/Footer.js";
import { Link } from "react-router-dom";
import LinkedInIcon from "@/components/Svg/LinkedIn/LinkedIn.js";
import Github from "@/components/Svg/Github/Github.js";
import Instagram from "@/components/Svg/Instagram/Instagram.js";
import X from "@/components/Svg/X/X.js";

const Home = () => {
  return (
    <div className="font-sans mx-auto w-3/4">
      <header className="pt-10">
        <nav className="flex space-x-6">
          <Link to="/"> Home </Link>
          <Link to="/about"> Projetos </Link>
          <Link to="/product"> Experiências </Link>
          <Link to="/product"> Blog </Link>
        </nav>
      </header>
      <div className="mt-20">
        <h1 className="mb-2">Olá, meu nome é Giselly 👋 . </h1>
        <h2 className="text-primary-head-lightGray">
          Desenvolvedora Front-End.
        </h2>
        <div className="flex gap-4 mt-5">
          <a
            href="https://www.linkedin.com/in/giselly-pereira/"
            target="_blank"
            className="inline-flex items-center bg-primary-head-onyx  px-2 py-1 rounded border border-primary-head-mediumGray gap-2"
          >
            <LinkedInIcon />
            <span className="text-white ">LinkedIn</span>
          </a>
          <a
            href="https://github.com/GisellyPereira"
            target="_blank"
            className="inline-flex items-center bg-primary-head-onyx  px-2 py-1 rounded border border-primary-head-mediumGray gap-2"
          >
            <Github />
            <span className="text-white ">Github</span>
          </a>
          <a
            href="https://www.instagram.com/giselly.ap_/"
            target="_blank"
            className="inline-flex items-center bg-primary-head-onyx  px-2 py-1 rounded border border-primary-head-mediumGray gap-2"
          >
            <Instagram />
            <span className="text-white ">Instagram</span>
          </a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fgisellyy_ap"
            target="_blank"
            className="inline-flex items-center bg-primary-head-onyx  px-2 py-1 rounded border border-primary-head-mediumGray gap-2"
          >
            <X />
            <span className="text-white ">X (Twitter)</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
