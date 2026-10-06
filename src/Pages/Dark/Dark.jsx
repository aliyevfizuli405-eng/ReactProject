import { Nav } from "../../components/Nav/Nav"
import { Footer } from "../../components/Footer/Footer"
import { Button2 } from "../../components/Buttons/Button2/Button2"
import { News } from "../../components/News/News"
import "./Dark.css"

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const Dark = () => {
    const [games, setGames] = useState([]);
    const [time,setTime]=useState(100*24*60*60);
    useEffect(()=>{
    setInterval(()=>{setTime(time=>time-1)},1000)
    return clearInterval();
   },[])
   
    // Swiper reference
    const swiperRef = useRef(null);
    const swiperRef2 =useRef(null);

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

            <main className="main">

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
                                        backgroundImage: `url(${game.imageUrl})`
                                    }}
                                >
                                    <h2>{game.title}</h2>
                                </div>
                            </SwiperSlide>
                        ))}
                        <button className="previous" style={{ position: "absolute", top: "0", left: "10px", zIndex: "1" }}
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            ←
                        </button>

                        <button className="next" style={{ position: "absolute", top: "0", right: "0", zIndex: "1" }}
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            →
                        </button>

                    </Swiper>
                    {/* TITLE + BUTTONS */}
                    <div className="herobgInfo" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 className="title">
                            Games
                        </h2>
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
                                        backgroundImage: `url(${game.imageUrl})`
                                    }}
                                >
                                    <h2>{game.title}</h2>
                                    <p>{game.price}$<span>{game.discountedPrice}$</span></p>
                                </div>
                            </SwiperSlide>
                        ))}
                        <button className="previous" style={{ position: "absolute", top: "0", left: "10px", zIndex: "1" }}
                            onClick={() => swiperRef2.current?.slidePrev()}
                        >
                            ←
                        </button>

                        <button className="next" style={{ position: "absolute", top: "0", right: "0", zIndex: "1" }}
                            onClick={() => swiperRef2.current?.slideNext()}
                        >
                            →
                        </button>

                    </Swiper>
                    {/* TITLE + BUTTONS */}
                    <div className="herobgInfo" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 className="title">
                            Discounts
                        </h2>
                        <Button2 text="See more" />
                    </div>
                </div>
                <div className="gameCounter">
                    <h2 className="herobgTitle title">The Witcher 3:
                        Wild Hunt</h2>
                    <div className="gameCounterTimer">
                        <div className="gameCounterTime">
                            {Math.floor(time/24/60/60)}
                        </div>
                        <div className="gameCounterTime">
                            {Math.floor(time/60/60%24)}
                        </div>
                        <div className="gameCounterTime">
                            {Math.floor((time/60)%60)}
                        </div>
                        <div className="gameCounterTime">
                            {time%60}
                        </div>
                    </div>
                    <Button2 text="Purchase"/>
                </div>
            </main>
            <News/>

            <Footer />
        </>
    );
};