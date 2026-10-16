import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { games } from "../../../js/values";

import { Search } from "lucide-react";

export const SwiperProduct = () => {
  return (
    <div className="container-md">
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <div
              className="min-h-[300px] flex justify-center items-center flex-col  bg-contain bg-center bg-no-repeat p-5"
              style={{
                backgroundImage: `url("${game.bgImage}")`,
              }}
            >
              <button className="hover:scale-[1.3]">
                <Search color="white" size={60}/>
              </button>
            </div>
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
};
