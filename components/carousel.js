"use client";

import '../styles/carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      grabCursor={true}
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
      centeredSlides={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide>
        <Image className='cat-img' alt='ellie' src='/IMG_0014.jpg' width={600} height={400} />
      </SwiperSlide>
      <SwiperSlide>
        <Image className='cat-img' alt='ellie' src='/IMG_0149.jpg' width={600} height={400} />
      </SwiperSlide>
      <SwiperSlide>
        <Image className='cat-img' alt='ellie' src='/IMG_0223.jpg' width={600} height={400} />
      </SwiperSlide>
      <SwiperSlide>
        <Image className='cat-img' alt='ellie' src='/IMG_0332.jpg' width={600} height={400} />
      </SwiperSlide>
      <SwiperSlide>
        <Image className='cat-img' alt='ellie' src='/IMG_1381.jpg' width={600} height={400} />
      </SwiperSlide>
      <SwiperSlide>
        <Image className='cat-img' alt='ellie' src='/IMG_3304.jpg' width={600} height={400} />
      </SwiperSlide>
      <SwiperSlide>
        <Image className='cat-img' alt='ellie' src='/20210106_140703.jpg' width={600} height={400} />
      </SwiperSlide>
    </Swiper>
  );
}
