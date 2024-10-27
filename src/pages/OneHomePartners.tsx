import React from 'react'
import './OneHome.css'

interface partnerImgProps {
    partnerImgProps: string;
}

const OneHomePartners:React.FC<partnerImgProps> = ({partnerImgProps}) => {
  return (
    <div className='partnersProps'>
         <img src={partnerImgProps} alt="" />
    </div>
  )
}

export default OneHomePartners