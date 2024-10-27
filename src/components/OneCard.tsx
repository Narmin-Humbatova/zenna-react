import React from 'react'
import './MainCards.css'

interface CardsProps{
  card_img: string,
  card_name: string,
  card_number: string,
}

const OneCard:React.FC<CardsProps> = (props) => {
  return (
    <div className="mainOneCards p-3">
      <div className="oneCard-img">
      <img src={props.card_img} alt="" className='img-fluid'/>
      <div className="overlay-mainCards"></div>
      </div>
       <h6 className='pt-4 '>{props.card_name}</h6>
       <span>{props.card_number}</span>
    </div>
  )
}

export default OneCard