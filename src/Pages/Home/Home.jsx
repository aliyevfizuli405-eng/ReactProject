// Componenets
import { Nav } from "@components/Nav/Nav"
import { Button } from "@components/buttons/Button1/Button"
import { Button2 } from "@components/buttons/Button2/Button2"
import { QualityCards } from "@components/cards/QualityCards/QualityCards"
import { Footer } from "@components/Footer/Footer"


// Css Desings
import "../Home/Home.css"


// Images
import demo1 from "@/assets/image/demo1.jpg"
import demo2 from "@/assets/image/demo2.jpg"
import demo3 from "@/assets/image/demo3.jpg"
import demo4 from "@/assets/image/demo4.jpg"

// Lucide Icons
import { Eye, ShoppingCart, Rss, UserRoundGroup, TriangleAlert, Clock, Boxes } from "lucide-react"


// Component Arrow Function
export const Home = () => {
    return (
        <>
            <Nav/>
            <main className="main container-xl">
                <section className="herobg flex justify-center items-start p-5 flex-col">
                    <div className="herobgInfo">
                        <div className="herobgContent flex flex-column justify-center items-start">
                            <h1 className="herobgTitle title text-white text-[50px]">YOUPLAY-GAMING THEME</h1>
                            <p className="herobgDesc subtitle text-white text-[21px]">You are not limited to the features of this theme. It is suitable for gaming site,<br /> and for any business project. Pre-packed demos will help you to quickly run <br /> your new creative website.</p>
                            <span className="herobgButtonContainer flex gap-3">
                                <Button name={"Demo"} icon={<Eye />} />
                                <Button2 text={"Purchase"} icon={<ShoppingCart />} />
                            </span>
                        </div>
                    </div>
                </section>
                <section className="introduction bg-[#080325] ">
                    <div className="introduction__content">
                        <QualityCards info={[
                            {
                                icon: <Rss size={"48px"} />,
                                title: "Blog",
                                desc: "Youplay can be used for simple blogging, not only full-stack gaming template."
                            },
                            {
                                icon: <ShoppingCart size={"48px"} />,
                                title: "Store",
                                desc: "If you want to sale goods, let's do it. This is so easy with Youplay"
                            },
                            {
                                icon: <UserRoundGroup size={"48px"} />,
                                title: "Social Network",
                                desc: "Build your gaming social network, or forum for Clan members."
                            }
                        ]} />
                        <h2 style={{ textAlign: "center", color: "white", margin: "100px", fontSize: "40px" }}>Youplay Comes with 4 Demo</h2>
                        <div className="demos grid grid-cols-12 justify-center items-center">
                            <div className="demo col-span-12 md:col-span-6  ">
                                <a href=""><img className="demo__image" src={demo3} alt="" /></a>
                                <h5 className="text-white text-[18px]">Dark <span className="text-gray-600 text-[13.5px]">demo</span></h5>
                            </div>
                            <div className="demo col-span-12 md:col-span-6  w-100 object-fit-cover">
                                <a href=""><img className="demo__image" src={demo2} alt="" /></a>
                                <h5 className="text-white text-[18px]">Shooter <span className="text-gray-600 text-[13.5px]">demo</span></h5>
                            </div>
                            <div className="demo col-span-12 md:col-span-6  w-100 object-fit-cover">
                                <a href=""><img className="demo__image" src={demo1} alt="" /></a>
                                <h5 className="text-white text-[18px]">Anime <span className="text-gray-600 text-[13.5px]">demo</span></h5>
                            </div>
                            <div className="demo col-span-12 md:col-span-6  w-100 object-fit-cover">
                                <a href=""><img className="demo__image" src={demo4} alt="" /></a>
                                <h5 className="text-white text-[18px]">Light <span className="text-gray-600 text-[13.5px]">demo</span></h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features">
                    <div className="features__content flex flex-column justify-center items-center p-5 text-white">
                        <h2 className="title font-medium text-left" style={{ fontSize: "40px" }}>A BIT MORE FEATURES</h2>
                        <QualityCards info={[
                            {
                                icon: <TriangleAlert size={"48px"} />, // or "AlertTriangle" depending on lucide-react version
                                title: "Clan Wars",
                                desc: "Manage battles in the games. Add teams and fights."
                            },
                            {
                                icon: <Clock size={"48px"} />,
                                title: "Coming Soon",
                                desc: "Use coming soon page with countdown before release feature or service."
                            },
                            {
                                icon: <Boxes size={"48px"} />, // or "Blocks" / "Cuboid"
                                title: "Page Builder",
                                desc: "Visual Composer will help you build site pages."
                            }]} />
                    </div>
                </section>
                <section className="questions bg-[#080325]">
                    <div className="questionsContent flex flex-column justify-center items-center p-5">
                        <h2 className="title text-white text-[42px] font-light">Have Any Questions?</h2>
                        <p className="herobgDesc text-white">
                            Youplay comes with documentation. See it here – <a href="" className="text-white hover:text-red-800">https://nkdev.info/docs/youplay-wp/</a>
                            <br />
                            <br />
                            Also we provide support for our users through ticket system – <a href="" className="text-white hover:text-red-800">https://nk.ticksy.com/</a>
                            <br />
                            <br />
                            Contact us, using our profile on Themeforest – http://themeforest.net/user/_nk
                            Purchase today for $59
                        </p>
                    </div>
                </section>
                <section className="purchase">
                    <div className="purchaseContent  p-5 flex flex-column justify-center items-center">
                        <h2 className="title text-white" style={{fontSize:"50px"}}>PURCHASE TODAY FOR $59</h2>
                        <br />
                        <br />
                        <Button2 text="Purchase" classes="purchaseBtn"/>
                    </div>
                </section>
                <Footer/>   
            </main>
            
        </>
    )
}