import { QualityCard } from "./qualityCard/QualityCard";

// Importing Style
import  "./QualityCards.css"

export const QualityCards = ({ info }) => {
    return (
        <div className="quality__cards p-4">
            <div className="grid  grid-cols-12 justify-center gap-2 md:gap-4 quality__cards">
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