import React from 'react'
import './Happy.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import HappySlide from './HappySlide';

const Happy:React.FC = () => {
  return (
    <div className='happy blended-backround'>
      <div className="clients container">
      <h3 className='text-center text-white'>HAPPY CLIENTS</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide><HappySlide main_props={'I’am amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care these team are realy amazing and talented! I will work only with this agency.'} paragraf_props={'Donald Trump / CEO of Trump organization'}/></SwiperSlide>
        <SwiperSlide><HappySlide main_props={'This is the excellent theme. It has many useful features that can be use for any kind of business. The support is just amazing and design'} paragraf_props={'John C. Marshall / Art Director'}/></SwiperSlide>
        <SwiperSlide><HappySlide main_props={'Needless to say, beautifully designed theme that serves many purpose. Even more sutomers support is the best! Highly recommend this theme to anyone who enjoys a fine product.'} paragraf_props={'Matthew Whilson / PR Agent'}/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}


export default Happy