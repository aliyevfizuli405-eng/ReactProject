import { Nav } from "../../components/Nav/Nav"
import { Button } from "../../components/Buttons/Button1/Button"
import "../Home/Home.css"
import { Button2 } from "../../components/Buttons/Button2/Button2"
import { QualityCards } from "../../components/Cards/QualityCards/QualityCards"

// Images
import demo1 from "../../../src/assets/image/demo1.jpg"
import demo2 from "../../../src/assets/image/demo2.jpg"
import demo3 from "../../../src/assets/image/demo3.jpg"
import demo4 from "../../../src/assets/image/demo4.jpg"

// Lucide Icons
import { Eye, ShoppingCart, Rss, UserRoundGroup, TriangleAlert, Clock, Boxes } from "lucide-react"

export const Home = () => {
    return (
        <>
            <Nav></Nav>
            <main className="main">
                <section className="herobg">
                    <div className="herobgInfo">
                        <div className="herobgContent">
                            <h1 className="herobgTitle title">YOUPLAY-GAMING THEME</h1>
                            <p className="herobgDesc subtitle">You are not limited to the features of this theme. It is suitable for gaming site, and for any business project. Pre-packed demos will help you to quickly run your new creative website.</p>
                            <span className="herobgButtonContainer">
                                <Button name={"Demo"} icon={<Eye />} />
                                <Button2 text={"Purchase"} icon={<ShoppingCart />} />
                            </span>
                        </div>
                    </div>
                </section>
                <div className="introduction">
                    <div className="introductionContent">
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
                        <div className="demos">
                            <div className="demo">
                                <img src={demo3} alt="" />
                                <h5 className="demoSubTitle">Dark <span>demo</span></h5>
                            </div>
                            <div className="demo">
                                <img src={demo2} alt="" />
                                <h5 className="demoSubTitle">Shooter <span>demo</span></h5>
                            </div>
                            <div className="demo">
                                <img src={demo1} alt="" />
                                <h5 className="demoSubTitle">Anime <span>demo</span></h5>
                            </div>
                            <div className="demo">
                                <img src={demo4} alt="" />
                                <h5 className="demoSubTitle">Light <span>demo</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features">
                    <div className="featuresContent">
                        <h2 className="title" style={{ fontSize: "48px" }}>A BIT MORE FEATURES</h2>
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
                </div>
                <div className="questions">
                    <div className="questionsContent">
                        <h2 className="title">Have Any Questions?</h2>
                        <p className="herobgDesc">
                            Youplay comes with documentation. See it here – <a href="">https://nkdev.info/docs/youplay-wp/</a>
                            <br />
                            <br />
                            Also we provide support for our users through ticket system – <a href="">https://nk.ticksy.com/</a>
                            <br />
                            <br />
                            Contact us, using our profile on Themeforest – http://themeforest.net/user/_nk
                            Purchase today for $59
                        </p>
                    </div>
                </div>
                <div className="purchase">
                    <div className="purchaseContent">
                        <h2 className="title">PURCHASE TODAY FOR $59</h2>
                        <Button2 text="Purchase"/>
                    </div>
                </div>
            </main>
        </>
    )
}