import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "./Sponsors.css";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export const Sponsors = ()=>{
  return (
    <>
    <h2 className="title" style={{textAlign:"center"}}>Partners</h2>
    <Swiper
        slidesPerView={5}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='sponsorImage' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='sponsorImage' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-7.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='sponsorImage' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='sponsorImage' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='sponsorImage' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='sponsorImage' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='sponsorImage' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='sponsorImage' src="https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-8.png" alt="" /></SwiperSlide>
        
        </Swiper>
    </>
  );
}
