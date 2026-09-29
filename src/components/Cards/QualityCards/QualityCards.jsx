import { Fragment } from "react";
import { QualityCard } from "./QualityCard/QualityCard";

// Importing Style
import "./QualityCards.css"

// Lucide Icons
import { Rss } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { UserRoundGroup } from "lucide-react";




export const QualityCards = ({ info }) => {
    return (
        <div className="QualityCards">
            {info.map((item) => (
                <QualityCard
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    )
}