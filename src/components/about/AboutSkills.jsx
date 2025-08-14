import React from "react";
import phpLogo from "../../assets/icon/php.svg";
import reactLogo from "../../assets/icon/react.svg";
import laravelLogo from "../../assets/icon/laravel.svg";
import nodeLogo from "../../assets/icon/nodejs.svg";
import tailwindLogo from "../../assets/icon/tailwindcss.svg";
import mysqlLogo from "../../assets/icon/mysql.svg";
import javascript from "../../assets/icon/javascript.svg";
import cpp from "../../assets/icon/cpp.svg";

const techs = [
  { name: "PHP", logo: phpLogo },
  { name: "React", logo: reactLogo },
  { name: "Laravel", logo: laravelLogo },
  { name: "NodeJS", logo: nodeLogo },
  { name: "Tailwinds", logo: tailwindLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "javascript", logo: javascript },
  { name: "cpp", logo: cpp },
];

const AboutSkills = () => {
  return (
    <section className="tech section container">
      <h2 className="section__title">🎯 Tech Stack That I Use</h2>
      <div className="tech__grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {techs.map((tech, index) => (
          <div
            className="tech__item bg-white rounded-xl shadow-md flex flex-col items-center justify-center aspect-square min-w-[100px] min-h-[100px]"
            key={index}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="tech__icon w-12 h-12 object-contain mb-2"
            />
            <span className="tech__name text-gray-800 text-sm font-semibold text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSkills;
