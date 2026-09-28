import { Fragment } from "react";
import { QualityCard } from "./QualityCard/QualityCard";

// Importing Style
import "./QualityCards.css"

// Lucide Icons
import { Rss } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { UserRoundGroup } from "lucide-react";




export const QualityCards = () =>{
    return(
        <div className="QualityCards">
        <QualityCard icon={<Rss size={"48px"}/>} title={"Blog"} desc={"Youplay can be used for simple blogging, not only full-stack gaming template."}/>
        <QualityCard icon={<ShoppingCart size={"48px"}/>} title={"Store"} desc={"If you want to sale goods, let's  do it. This is so easy with Youplay"}/>
        <QualityCard icon={<UserRoundGroup size={"48px"}/>} title={"Social Network"} desc={"Build your gaming social network, or forum for Clan members."}/>
       </div>
    )
}