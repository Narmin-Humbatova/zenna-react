import React from 'react';
import './Shop.css';
import ShopCard from './Shop-Card';
import cardAbout from '../cards.json';
import cardAboutOne from '../shop.json';
import cardAboutTwo from '../blog.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsGrid } from 'react-icons/bs';
import { BsBorderWidth } from 'react-icons/bs';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Shop: React.FC = () => {
  return (
    <div className='shop-main container'>
      <div className="catalog text-center py-5">
        <h3>CATALOG</h3>
        <p>Home / Shop / Catalog</p>
      </div>
      <div className="shop-filter container d-flex justify-content-between pt-3">   
        <div className="view">
          <span>View:</span>
          <a className='grid text-dark' id='grid'><BsGrid /></a>
          <a className='list list-active text-dark' id='list'><BsBorderWidth /></a>
        </div>
        <div className="show">
          <span>Show:</span>
          <a href="#" className='active'>12 /</a>
          <a href="#">24 /</a>
          <a href="#">all</a>
        </div>
        <form className='ecommerce-ordering'>
          <select>
            <option value="default-sorting">Default Sorting</option>
            <option value="price-high">Price: high to low</option>
            <option value="price-low">Price: low to high</option>
            <option value="popularity">By Popularity</option>
            <option value="newness">By Newness</option>
            <option value="rating">By Rating</option>
          </select>
        </form>
      </div>

      <div className="swiper-one">
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


          {cardAbout.map((card, index) => (
            <SwiperSlide><ShopCard key={index} card_img={card.card_img} card_main={card.card_main} card_name={card.card_name} card_number={card.card_number} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-two">
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


        {cardAboutOne.map((card, index) => (
          <SwiperSlide><ShopCard key={index} card_img={card.card_img} card_main={card.card_main} card_name={card.card_name} card_number={card.card_number} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="swiper-three">
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


        {cardAboutTwo.map((card, index) => (
          <SwiperSlide><ShopCard key={index} card_img={card.card_img} card_main={card.card_main} card_name={card.card_name} card_number={card.card_number} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      <div className="showing py-5 d-flex justify-content-between">
        <div className="shop-text">
          <p>Showing: 12 of 80 results</p>
        </div>

        <div className="shop-number">
          <button><a href="#"><BsChevronLeft /></a></button>
          <button><a href="#">1</a></button>
          <button><a href="#">2</a></button>
          <button><a href="#">3</a></button>
          <button><a href="#">4</a></button>
          <button><a href="#"><BsChevronRight /></a></button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
