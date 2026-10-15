import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { products } from "../../js/values";

import { Search } from "lucide-react";

export const SwiperProduct = () => {
  return (
    <div className="container-md -skew-x-6">
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
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="min-h-[300px] flex justify-center items-center flex-col -skew-x-6 bg-cover bg-center bg-no-repeat p-5"
              style={{
                backgroundImage: `url("${product.bgImage}")`,
              }}
            >
              <button className="hover:scale-[1.3]">
                <Search color="white" size={60} />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
