// Componenets
import { Nav } from "@components/Nav/Nav"
import { Herobg } from "@/Pages/Home/herobg/Herobg"
import { Button } from "@/Pages/Home/Button1/Button"
import { Button2 } from "@components/Button/Button2/Button2"
import { QualityCards } from "@components/Cards/QualityCards/QualityCards"
import { Introduction } from "@/Pages/Home/introduction/Introduction";
import { Footer } from "@components/Footer/Footer"
import { Questions } from "@/Pages/Home/questions/Questions"
import { Features } from "@/Pages/Home/features/Features"
import { Purchase } from "@/Pages/Home/purchase/Purchase"


// Css Desings
import "../Home/Home.css"


// Images

// Lucide Icons
import { Eye, ShoppingCart, Rss, UserRoundGroup, TriangleAlert, Clock, Boxes } from "lucide-react"


// Component Arrow Function
export const Home = () => {
    return (
        <>
            <main className="main container-md">
                <Herobg/>
                <Introduction/>
                <Features/>
                <Questions/>
                <Purchase/>
            </main>
        </>
    )
}