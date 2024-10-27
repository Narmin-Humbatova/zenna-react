import React from 'react'

interface slideProps{
    main_props: string;
    paragraf_props: string;
}

const HappySlide:React.FC <slideProps>= ({main_props, paragraf_props}) => {
  return (
    <div className='happySlide'>
        <div className="slideProps py-5">
            <h5 className='text-white'>{main_props}</h5>
            <p className='text-white'>{paragraf_props}</p>
        </div>
    </div>
  )
}

export default HappySlide