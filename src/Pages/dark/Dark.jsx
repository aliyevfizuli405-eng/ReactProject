// React imports
import React, { useEffect, useRef, useState } from "react";

import { Nav } from "@components/Nav/Nav";
import { Footer } from "@components/Footer/Footer";
import {Button2} from "@components/buttons/Button2/Button2"
import { News } from "@components/news/News";
import { Sponsors } from "@components/sponsors/Sponsors";
import { QualityCards } from "@components/cards/QualityCards/QualityCards";
import { Countdown } from "@components/countdown/Countdown";

import { posts } from "@/js/values.js";

import "./Dark.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { CreditCard, Gamepad2, Banknote, UserGroup } from "lucide-react";

// import required modules

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
      <main className="main container-sm">
        <div className="herobg">
          <div className="herobgInfo">
            <h2 className="herobgTitle title">
              Clan War: <br />
              Global Esports Cup
            </h2>
            <span className="herobgDesc subtitle">
              Virtus PRO vs Team Secret
            </span>
            <br />
            <br />
            <br />

            <Button2 text="Learn More" />
          </div>
        </div>

        <div className="GamesSwiper">
          {/* SWIPER */}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={5}
            spaceBetween={0}
            className="mySwiper"
          >
            {games.map((game) => (
              <SwiperSlide key={game.id}>
                <div
                  className="Fizuli"
                  style={{
                    backgroundImage: `url(${game.imageUrl})`,
                  }}
                >
                  <h2>{game.title}</h2>
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

          {/* TITLE + BUTTONS */}
          <div
            className="herobgInfo"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 className="title">Games</h2>

            <Button2 text="See more" />
          </div>
        </div>

        <div className="GamesSwiper">
          {/* SWIPER */}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef2.current = swiper;
            }}
            slidesPerView={5}
            spaceBetween={0}
            className="mySwiper"
          >
            {games.map((game) => (
              <SwiperSlide key={game.id}>
                <div
                  className="Fizuli"
                  style={{
                    backgroundImage: `url(${game.imageUrl})`,
                  }}
                >
                  <h2>{game.title}</h2>

                  <p>
                    {game.price}$<span>{game.discountedPrice}$</span>
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

          {/* TITLE + BUTTONS */}
          <div
            className="herobgInfo"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 className="title">Discounts</h2>

            <Button2 text="See more" />
          </div>
        </div>
        <Countdown/>
        <News items={posts} />
        <section className="partners">
          <Sponsors/>
        </section>
        <section className="featuresSection">
          <h2 className="title herobgTitle  sm:">Why Buy from Us</h2>
          <QualityCards info={features} />
        </section>
      </main>
      <Footer />
    </>
  );
};
