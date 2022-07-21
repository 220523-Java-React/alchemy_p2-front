import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <>
        <li className="cards__item">
            <Link className="class__item__link">
                <figure className="cars__item__pic-wrap">
                    <img src="/" alt="Travel Image" className="cards__item__img"/>
                </figure>
                <div className="card__item__info">
                    <h5 className="ards__item__text" />
                </div>
            </Link>
        </li>  
    </>
  )
}

export default CardItem