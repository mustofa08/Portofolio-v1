import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile-2.png";
import AboutSkills from "./AboutSkills";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid gap-8 md:grid-cols-2 items-cen">
        <div className="bg-gray-800 rounded-full fullp-4 shadow-md w-64 h-64 mx-auto flex items-center justify-center overflow-hidden">
          <img
            src={AboutImg}
            alt=""
            className="about__img w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="about__data grid gap-6">
          <div className="about__info">
            <p className="about_description text-gray-600">
              Halo! Saya seorang junior programmer yang sedang fokus belajar
              pengembangan web. Saya menyukai tantangan dalam dunia coding dan
              senang membangun aplikasi kecil yang bisa langsung digunakan. Saya
              sedang memperdalam bahasa pemrograman seperti JavaScript dan
              framework seperti React dan Laravel. Saya percaya bahwa belajar
              tidak ada habisnya, dan setiap proyek adalah kesempatan untuk
              berkembang. Saat ini, saya aktif mengerjakan proyek pribadi dan
              terus mencari peluang untuk berkontribusi di dunia teknologi.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          {/* <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills_name">a</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__precentage a"></span>
              </div>

              <div className="skills_titles">
                <h3 className="skills_name">b</h3>
                <span className="skills__number">30%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__precentage b"></span>
              </div>

              <div className="skills_titles">
                <h3 className="skills_name">c</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__precentage c"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <AboutSkills />
    </section>
  );
};

export default About;
