// Componenets
import { Nav } from "@components/Nav/Nav"
import { Herobg } from "../../components/herobg/Herobg"
import { Button } from "@components/buttons/Button1/Button"
import { Button2 } from "@components/buttons/Button2/Button2"
import { QualityCards } from "@components/cards/QualityCards/QualityCards"
import { Introduction } from "../../components/introduction/Introduction";
import { Footer } from "@components/Footer/Footer"
import { Questions } from "../../components/questions/Questions"
import { Features } from "../../components/features/Features"
import { Purchase } from "../../components/purchase/Purchase"


// Css Desings
import "../Home/Home.css"


// Images

// Lucide Icons
import { Eye, ShoppingCart, Rss, UserRoundGroup, TriangleAlert, Clock, Boxes } from "lucide-react"


// Component Arrow Function
export const Home = () => {
    return (
        <>
            <main className="main container-xl">
                <Herobg/>
                <Introduction/>
                <Features/>
                <Questions/>
                <Purchase/>
            </main>
        </>
    )
}