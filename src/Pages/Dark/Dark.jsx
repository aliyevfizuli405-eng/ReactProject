import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import { Button2 } from "../../components/Buttons/Button2/Button2";
import { News } from "../../components/News/News";
import { Sponsors } from '../../components/Sponsors/Sponsors';
import { QualityCards } from "../../components/Cards/QualityCards/QualityCards";
import "./Dark.css";

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { CreditCard,Gamepad2,Banknote,UserGroup} from "lucide-react";

// import required modules

import "swiper/css";

export const Dark = () => {
    const posts = [
        {
            title: "Bloodborne - First Try!",
            date: "21st March 2015",
            author: "nK",
            tags: ["Bloodborne", "first boss problem", "first try", "newbie game"],
            score: "9.1",
            snippet: "Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occidat. Videtur quod est super omne oppidum. [...]",
            button: "Read More",
            imageUrl: "https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-bloodborne-1920x1151-500x375.jpg"
        },
        {
            title: "Coming to Youplay - Dark Souls II",
            date: "9th March 2015",
            author: "nK",
            tags: ["coming soon", "Dark Souls II", "first review", "sale date"],
            score: "9.0",
            snippet: "Locutus est tibi? Respondeo dicendum esset iustus? Quæ? Quem populum? Mensis abhinc Gus occidere vellet uterque. Et nunc, utatur LAB et trahit vos de ... quae ... a socio gunman? A lenta guy? Numquid aliquo tibi Et dicit quod videt te. Qualis est is lascivio venatus. Putat quod surdus es? Non potest vere putes quod [...]",
            button: "Read More",
            imageUrl: "https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-dark-souls-ii-1920x1080-500x375.jpg"
        },
        {
            title: "Review Kingdoms of Amalur",
            date: "1st March 2015",
            author: "nK",
            tags: ["game", "Kingdoms of Amalur", "review"],
            snippet: "Prohibere Striga! Ut custodiant te sermonem dicens - periculi ... periculo! Non ego illud numquam. Dixi sunt implicatae. Elatus deinde manubrio! Gus sit amet suum motum. Nescio quando, aut quomodo, nescio quo. Illud scio, amet tortor. Suarum impotens prohibere eum. Ego hodie Sum expectantes. Ego hodie expectantes. Expectantes, et misit unum de pueris Gus interficere. [...]",
            button: "Read More",
            imageUrl: "https://wp.nkdev.info/youplay/wp-content/uploads/2015/06/game-kingdoms-of-amalur-reckoning-1440x900-500x375.jpg"
        }
    ];

    const features = [
        {
            icon: <CreditCard/>,
            title: "Payment",
            desc: "More than 10 payment systems",
        },
        {
            icon: <Gamepad2/>,
            title: "Games",
            desc: "A large number of games",
        },
        {
            icon: <Banknote/>,
            title: "Cheap",
            desc: "Lowest prices on the Internet",
        },
        {
            icon: <UserGroup/>,
            title: "Community",
            desc: "The largest gaming community",
        },
    ];


    // For Asycn function to get games for swiper
    const [games, setGames] = useState([]);

    // Timer Function
    const [time, setTime] = useState(100 * 24 * 60 * 60);

    useEffect(() => {
        setInterval(() => {
            setTime(time => time - 1);
        }, 1000);

        return clearInterval();
    }, []);

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
                                        backgroundImage: `url(${game.imageUrl})`
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
                                zIndex: "1"
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
                                zIndex: "1"
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
                            alignItems: "center"
                        }}
                    >
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

                                    <p>
                                        {game.price}$
                                        <span>
                                            {game.discountedPrice}$
                                        </span>
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
                                zIndex: "1"
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
                                zIndex: "1"
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
                            alignItems: "center"
                        }}
                    >
                        <h2 className="title">
                            Discounts
                        </h2>

                        <Button2 text="See more" />
                    </div>

                </div>

                <div className="gameCounter container-sm">
                    <h2 className="herobgTitle title">
                        The Witcher 3:
                        Wild Hunt
                    </h2>

                    <div className="gameCounterTimer">
                        <div className="gameCounterTime">
                            {Math.floor(time / 24 / 60 / 60)}
                        </div>
                        <div className="gameCounterTime">
                            {Math.floor(time / 60 / 60 % 24)}
                        </div>

                        <div className="gameCounterTime">
                            {Math.floor((time / 60) % 60)}
                        </div>

                        <div className="gameCounterTime">
                            {time % 60}
                        </div>
                    </div>
                    <Button2 text="Purchase" />
                </div>
                <News items={posts} />
            <div className="partners container-sm">
                <Sponsors />
            </div>
            <QualityCards info={features} />
            </main>
            <Footer/>
            
            
        </>
    );
};