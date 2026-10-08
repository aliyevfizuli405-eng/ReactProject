import { QualityCard } from "./qualityCard/QualityCard";

// Importing Style
import  classes from "./QualityCards.module.css"





export const QualityCards = ({ info }) => {
    return (
        <div className={classes.qualityCards}>
            <div className={classes.qualityCardsContainer}>
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