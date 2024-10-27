import React from 'react'
import './Pictures.css'
import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom'

const Pictures: React.FC = () => {
  return (
    <div className='pictures d-flex position-relative text-white pictures'>
      <div className='arrivals' >
        <h2>GREAT FASHION 2017</h2>
        <h4 className='text-center'><ReactTyped
          strings={[
            "-New Arrivals Collection-",
            "-Get awesome items only in Zenna online shop-",
            "-Zenna is perfectly responsive theme-",
          ]}
          typeSpeed={50}
          backSpeed={70}
          loop
        >
        </ReactTyped></h4> 
        <Link to="/shop"><button className='shop'>SHOP NOW</button></Link>
          
      </div>
    </div>
  )
}

export default Pictures