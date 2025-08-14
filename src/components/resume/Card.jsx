import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title text-gray-600">{props.title}</h3>
        <p className="timeline__text text-gray-600">{props.desc}</p>
    </div>
  )
}

export default Card