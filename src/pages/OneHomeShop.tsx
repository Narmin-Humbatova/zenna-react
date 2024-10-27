import React from 'react'
import { Link } from 'react-router-dom'
import './OneHome.css'

interface ShopProps{
  card_img: string,
  card_name: string,
  card_number: string,
}


const OneHomeShop:React.FC<ShopProps> = (props) => {
  return (
    <div className='oneHomeShop'>
      <Link to=""><div className="card-img">
      <img src={props.card_img} alt="" className='img-fluid'/>
      </div>
       <h6 className='pt-2'>{props.card_name}</h6>
       <span>{props.card_number}</span></Link>
       
    </div>
  )
}

export default OneHomeShop