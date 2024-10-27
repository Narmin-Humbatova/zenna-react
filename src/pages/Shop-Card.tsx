import React from 'react'
import './Shop.css';
import { Link } from 'react-router-dom';

interface CardsProps {
  card_img: string,
  card_main: string,
  card_number: string,
  card_name: string,
}

const OneCard: React.FC<CardsProps> = (props) => {
  return (
    <div className="cards">
      <div className="row">
        <Link to="/product" className='shop-link'>
          <div className="card-main">
            <div className="card-img">
              <img src={props.card_img} alt="" />
            </div>
            <div className="texts py-2 d-flex justify-content-between">
              <div className="shop-name-main">
                <h6 className='py-2'>{props.card_name}</h6>
                <p>{props.card_main}</p>
              </div>
              <div className="shop-card-number">
                <span>{props.card_number}</span>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default OneCard