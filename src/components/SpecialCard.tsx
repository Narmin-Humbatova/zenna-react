import React from 'react'
import './Special.css'
import { Link } from 'react-router-dom'

interface SpecialProps {
  card_img: string,
  card_main: string,
  card_name: string,
  card_number: string,
}

const SpecialCard: React.FC<SpecialProps> = (props) => {
  console.log(props)
  return (
    <div className="special-card">
      <Link to="/product" className='special-link'><h5 className='py-2'>{props.card_main}</h5>
      <div className="special-img-texts ">
        <img src={props.card_img} />
        <div className="special-texts">
          <p>{props.card_name}</p>
          <span>{props.card_number}</span>
        </div>
      </div></Link>

    </div>
  )
}

export default SpecialCard