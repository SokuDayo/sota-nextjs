"use client";

import '../styles/carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        700: {
          slidesPerView: 1,
        },
        701: {
            slidesPerView: 2,
        },
        1500: {
            slidesPerView: 3,
        }
      }}
      loop={true}
      lazyPreloadPrevNext={true}
      centeredSlides={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide><div className='cat-img'><Image alt='ellie' src='/IMG_0014.jpg' loading="eager" fill={true}></Image></div></SwiperSlide>
      <SwiperSlide><div className='cat-img'><Image alt='ellie' src='/IMG_0149.jpg' loading="eager" fill={true}></Image></div></SwiperSlide>
      <SwiperSlide><div className='cat-img'><Image alt='ellie' src='/IMG_0223.jpg' loading="eager" fill={true}></Image></div></SwiperSlide>
      <SwiperSlide><div className='cat-img'><Image alt='ellie' src='/IMG_0332.jpg' loading="eager" fill={true}></Image></div></SwiperSlide>
      <SwiperSlide><div className='cat-img'><Image alt='ellie' src='/IMG_1381.jpg' loading="eager" fill={true}></Image></div></SwiperSlide>
      <SwiperSlide><div className='cat-img'><Image alt='ellie' src='/IMG_3304.jpg' loading="eager" fill={true}></Image></div></SwiperSlide>
      <SwiperSlide><div className='cat-img'><Image alt='ellie' src='/20210106_140703.jpg' loading="eager" fill={true}></Image></div></SwiperSlide>
    </Swiper>
  );
}
