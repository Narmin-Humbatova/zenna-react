import React from 'react'
import './OneHome.css'
import OneHomeCard from './OneHomeCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cardAbout from '../cards.json'
import OneHomeShop from './OneHomeShop';
import OneHomeBlog from './OneHomeBlog';
import OneHomePartners from './OneHomePartners';
import { Link } from 'react-router-dom';


const OneHome: React.FC = () => {
  return (
    <div className="home-main">
      <div className="home-foto">
        <h4>Get now 50% Off</h4>
        <h2>BIG SALES</h2>
        <p>Zenna is super clean and professional theme. Suitable for all kind e-commerce website</p>
        <Link to="/shop"><button className='shop'>SHOP NOW</button></Link>
      </div>

      <div className="home-cards container py-5">
        <div className="home-card">
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
            <SwiperSlide><OneHomeCard homeImgProps="/public/image/oneHome/homeCard1.jpg" homeMainProps="MEN" /></SwiperSlide>
            <SwiperSlide><OneHomeCard homeImgProps="/public/image/oneHome/homeCard2.jpg" homeMainProps="ACCESSORIES" /></SwiperSlide>
            <SwiperSlide><OneHomeCard homeImgProps="/public/image/oneHome/homeCard3.jpg" homeMainProps="FOOTWEAR" /></SwiperSlide>


          </Swiper>
        </div>
      </div>

      <div className="home-shop container py-5">
        <div className="home-shop-text d-flex justify-content-center">
          <h6 className='ms-3'>FEATURED</h6>
          <hr />
          <h6 className='ms-3'>NEW ITEMS</h6>
          <h6 className='ms-3'>TOP RATED</h6>
        </div>
        <div className="home-swiper py-3">
          <Swiper
            slidesPerView={'auto'}
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
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper py-3"
          >
            {
              cardAbout.map(card => (
                <SwiperSlide>
                  <OneHomeShop card_img={card.card_img} card_name={card.card_name} card_number={card.card_number} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

      </div>

      <div className="collectionHome py-5">
        <h1>AUTUMN COLLECTION</h1>
        <p className='text-uppercase'>prepare for coming winter. Shop All New Items Here</p>
        <Link to="/shop"><button className='shop'>SHOP NOW</button></Link>
      </div>

      <div className="home-blog py-5">
        <div className="from-blog-text text-center py-3">
          <p>Latest News</p>
          <h4>FROM BLOG</h4>
        </div>
        <div className="home-blog-swiper">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide><OneHomeBlog blogImgProps="/public/image/oneHome/blog_1.jpg" blogNameProps="Meeting with partners" blogNumberProps=' 19 Sept, 2017' blogCommentprops=' 15 Comments' /></SwiperSlide>
            <SwiperSlide><OneHomeBlog blogImgProps="/public/image/oneHome/blog_2.jpg" blogNameProps="The top 10 creative ideas" blogNumberProps=' 19 Sept, 2017' blogCommentprops=' 15 Comments' /></SwiperSlide>
            <SwiperSlide><OneHomeBlog blogImgProps="/public/image/oneHome/blog_3.jpg" blogNameProps="How to increase the profit" blogNumberProps=' 19 Sept, 2017' blogCommentprops=' 15 Comments' /></SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="home-partners py-5">
        <div className="home-partner container">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            className="mySwiper py-3"
          >
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner1.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner2.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner3.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner4.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner5.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner6.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner1.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner2.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner3.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner4.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner5.png' /></SwiperSlide>
                <SwiperSlide><OneHomePartners partnerImgProps='/public/image/oneHome/partner6.png' /></SwiperSlide>
                
          </Swiper>
        </div>
      </div>

    </div>
  )
}

export default OneHome