import { QualityCard } from "./QualityCard/QualityCard";

// Importing Style
import "./QualityCards.css"





export const QualityCards = ({ info }) => {
    return (
        <div className="QualityCards container-sm">
            <div className="qualityCardsContainer">
                {info.map((item) => (
                <QualityCard
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
            </div>
            
        </div>
    )
}