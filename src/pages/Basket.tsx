import React from 'react'
import './Basket.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BasketCard from './BasketCard';

const Basket:React.FC = () => {
  return (
    <div className='basket'>
        <div className="basket-paragraf py-5">
        <h3 className='basket-heading text-center'>BASKET</h3>
        <p className='text-center'>Home / Shop / Basket</p>
        </div>

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
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper py-3"
                >
                    <SwiperSlide>
                                <BasketCard basketImg='/public/image/mainCards/shop_item_7.jpg' basketName={'Watch'} basketNumber={'$280.00'}/>
                                <BasketCard basketImg='/public/image/mainCards/shop_item_3.jpg' basketName={'Tribal Grey Blazer'} basketNumber={'$330.00'}/>
                            </SwiperSlide>
                </Swiper>
    </div>
  )
}

export default Basket