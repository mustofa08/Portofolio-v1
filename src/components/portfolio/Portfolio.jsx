import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [item, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updateItems);
  };

  return (
    <section className="work container section" id="portofolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Web")}>
          Web
        </span>
        <span className="work__item" onClick={() => filterItem("Mobile App")}>
          App
        </span>
      </div>

      <div className="work__container grid">
        {item.map((elem) => {
          const { id, image, title, category, description, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <h3 className="work__description">{description}</h3>
              <a
                href={link}
                className="work__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
