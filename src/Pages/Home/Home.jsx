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
import { Eye } from "lucide-react"
import { ShoppingCart } from "lucide-react"
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
                               <Button name={"Demo"} icon={<Eye/>}/>
                               <Button2 text={"Purchase"} icon={<ShoppingCart/>}/>
                            </span>
                        </div>
                    </div>
                </section>
                <div className="introduction">
                    <div className="introductionContent">
                        <QualityCards/>
                        <h2 style={{textAlign:"center",color:"white",margin:"30px"}}>Youplay Comes with 4 Demo</h2>
                        <div className="demos">
                            <div className="demo">
                                <img src={demo3} alt="" />
                                <h5>Dark</h5>
                            </div>
                            <div className="demo">
                                <img src={demo2} alt="" />
                                <h5>Shooter</h5>
                            </div>
                            <div className="demo">
                                <img src={demo1} alt="" />
                                <h5>Anime</h5>
                            </div>
                            <div className="demo">
                                <img src={demo4} alt="" />
                                <h5>Light</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>

    )
}