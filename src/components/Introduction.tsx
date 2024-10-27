import React from 'react'
import './Introduction.css'
import IntroductionFoto from './IntorductionFoto'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Introduction:React.FC  = () => {
  return (
    <div className="container py-5">
      <div className="introduction">

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide><IntroductionFoto fotoProps="/public/image/introduction/collection_1.jpg" nameProps="FOR HER" mainProps="Best Selling Deals" classAdi="for-her" classParagraf="deals" />        </SwiperSlide>
        <SwiperSlide><IntroductionFoto fotoProps="/public/image/introduction/collection_2.jpg" nameProps="ACCESSORIES" mainProps="Hot Trends" classAdi="accessories" classParagraf="trends" />        </SwiperSlide>
        <SwiperSlide><IntroductionFoto fotoProps="/public/image/introduction/collection_3.jpg" nameProps="FOR HIM" mainProps="New Collection" classAdi="for-him" classParagraf="collection" />        </SwiperSlide>
       
      </Swiper>
       </div>
    </div>
    
  )
}

export default Introduction
