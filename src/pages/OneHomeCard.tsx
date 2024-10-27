import React from 'react'
import './OneHome.css'

interface OneHomeProps {
    homeImgProps: string;
    homeMainProps: string;
}

const OneHomeCard:React.FC<OneHomeProps> = ({homeImgProps, homeMainProps}) => {
  return (
    <div className='oneHomeCard py-5'>
        <img src={homeImgProps} alt="" className='home-img'/>
        <div className="overlay-card"></div>
        <h5 className='text-center py-3 px-5'>{homeMainProps}</h5>
    </div>
  )
}

export default OneHomeCard