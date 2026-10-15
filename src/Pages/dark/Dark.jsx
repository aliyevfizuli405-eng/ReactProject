// React imports
import React, { useEffect, useRef, useState } from "react";

import { Nav } from "@components/Nav/Nav";
import { Footer } from "@components/Footer/Footer";
import { Button2 } from "@components/buttons/Button2/Button2";
import { News } from "@components/news/News";
import { Sponsors } from "@components/sponsors/Sponsors";
import { QualityCards } from "@components/cards/QualityCards/QualityCards";
import { Countdown } from "@components/countdown/Countdown";
import { posts } from "@/js/values.js";
import {Herobgdark} from "@components/herobgdark/Herobgdark"

import "./Dark.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { CreditCard, Gamepad2, Banknote, UserGroup } from "lucide-react";

import "swiper/css";

export const Dark = () => {
  const features = [
    {
      icon: <CreditCard />,
      title: "Payment",
      desc: "More than 10 payment systems",
    },
    {
      icon: <Gamepad2 />,
      title: "Games",
      desc: "A large number of games",
    },
    {
      icon: <Banknote />,
      title: "Cheap",
      desc: "Lowest prices on the Internet",
    },
    {
      icon: <UserGroup />,
      title: "Community",
      desc: "The largest gaming community",
    },
  ];

  // For Asycn function to get games for swiper
  const [games, setGames] = useState([]);

  // Swiper reference
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);

  // Getting Games
  useEffect(() => {
    async function GetGames() {
      const res = await fetch("http://localhost:3000/games");
      const data = await res.json();

      setGames(data);
    }
    GetGames();
  }, []);

  return (
    <>
      <Nav />
      <main className="main container-md">
        <Herobgdark/>
        <div className="items bg-[#080325] p-2">
          <div className="GamesSwiper z-2">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {games.map((game) => (
                <SwiperSlide key={game.id}>
                  <div
                    className="flex justify-center items-center w-[283px] h-[283px] -skew-x-6 object-cover swiperbg"
                    style={{
                      backgroundImage: `url(${game.imageUrl})`,
                    }}
                  >
                    <p className="text-[18px] text-light">{game.title}</p>
                  </div>
                </SwiperSlide>
              ))}

              <button
                className="previous"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "10px",
                  zIndex: "1",
                }}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                ←
              </button>

              <button
                className="next"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  zIndex: "1",
                }}
                onClick={() => swiperRef.current?.slideNext()}
              >
                →
              </button>
            </Swiper>
            <div
              className="herobgInfo"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="text-light text-[50px]">Games</p>

              <Button2 text="See more" />
            </div>
          </div>
          <div className="GamesSwiper">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef2.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {games.map((game) => (
                <SwiperSlide key={game.id}>
                  <div
                    className="flex flex-col justify-center items-center w-[283px] h-[283px] -skew-x-6 object-cover swiperbg"
                    style={{
                      backgroundImage: `url(${game.imageUrl})`,
                    }}
                  >
                    <p className="text-light text-[18px] text-center">{game.title}</p>
                    
                    <p className="text-light text-[18px] font-semibold">
                      {game.price}$
                    </p>
                  </div>
                </SwiperSlide>
              ))}

              <button
                className="previous"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "10px",
                  zIndex: "1",
                }}
                onClick={() => swiperRef2.current?.slidePrev()}
              >
                ←
              </button>

              <button
                className="next"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  zIndex: "1",
                }}
                onClick={() => swiperRef2.current?.slideNext()}
              >
                →
              </button>
            </Swiper>
          </div>
          <div
            className="herobgInfo"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="title text-light text-[50px]">Discounts</p>
            <Button2 text="See more" />
          </div>
        </div>

        <div className="gameCounter container-md p-5">
          <Countdown />
        </div>

        <div className="news">
          <News items={posts} />
        </div>

        <section className="partners  p-5 bg-no-repeat bg-cover bg-[url('https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/banner-bg-500x375.jpg')]">
          <Sponsors />
        </section>
        <section className="featuresSection p-5 bg-[#080325]">
          <h2 className="title herobgTitle text-center text-light">Why Buy from Us</h2>
          <QualityCards info={features} />
        </section>
        <Footer />
      </main>
      
    </>
  );
};
