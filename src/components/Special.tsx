import React from 'react';
import './Special.css';
import specialSlide from '../cards.json';
import specialSlideOne from '../shop.json';
import specialSlideTwo from '../blog.json';
import SpecialCard from './SpecialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const Special: React.FC = () => {
    return (
        <div className='special py-5 container'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
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
                    specialSlide.map((card, index) => (
                        <SwiperSlide className='specialSlide' key={index}>
                            <SpecialCard 
                                card_img={card.card_img} 
                                card_main={card.card_main} 
                                card_name={card.card_name} 
                                card_number={card.card_number} 
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
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
                    specialSlideOne.map((card, index) => (
                        <SwiperSlide className='specialSlide' key={index}>
                            <SpecialCard 
                                card_img={card.card_img} 
                                card_main={card.card_main} 
                                card_name={card.card_name} 
                                card_number={card.card_number} 
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
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
                    specialSlideTwo.map((card, index) => (
                        <SwiperSlide className='specialSlide' key={index}>
                            <SpecialCard 
                                card_img={card.card_img} 
                                card_main={card.card_main} 
                                card_name={card.card_name} 
                                card_number={card.card_number} 
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default Special;
