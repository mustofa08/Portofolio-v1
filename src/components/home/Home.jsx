import React from "react";
import "./home.css";
import Me from "../../assets/profile-1.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img
          src={Me}
          alt="Profile of Akhmad Mustofa Solikin"
          className="home__img"
        />
        <h1 className="home__name text-gray-900 dark:text-white">
          Akhmad Mustofa Solikin
        </h1>
        <span className="home__education text-gray-600 dark:text-gray-300">
          I'm a Junior Programmer
        </span>
        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
