import React from 'react'
import './Basket.css'
import { BsCheckSquareFill } from "react-icons/bs";


interface BasketProps{
    basketImg: string,
    basketName: string,
    basketNumber: string,
  }

const BasketCard:React.FC<BasketProps> = (props) => {
  return (
    <div className='basket-card py-3 container'>
      <div className="basket-main d-flex">
      <div className="basket-img">
      <BsCheckSquareFill/>
      <img src={props.basketImg} alt="" className='img-fluid'/>
      </div>
      <div className="basket-text px-4">
      <h6 className='pt-4'>{props.basketName}</h6>
      <span>{props.basketNumber}</span>
      <p>Our Shop is a very slick and clean e-Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine. Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
      </div>
      </div>
      <hr />
  

    </div>
  )
}

export default BasketCard