import React from 'react'
import OneCard from './OneCard'
import './MainCards.css'
import cardAbout from '../cards.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MainCards: React.FC = () => {
    return (
        <div className='trendy py-5'>
            <div className="mainCards text-center container">
                <article className='h6 items'>Hot items of this year</article>
                <h4 className='py-1'>TRENDY PRODUCTS</h4>
                <Swiper
                    slidesPerView={4}
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
                                <OneCard card_img={card.card_img} card_name={card.card_name} card_number={card.card_number} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default MainCards;
