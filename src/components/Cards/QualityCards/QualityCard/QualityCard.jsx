import "./QualityCard.css"

export const QualityCard = ({icon,title,desc}) =>{
    return(
            <div className="Qualitycard">
                {icon}
                <h3 className="QualitycardTitle">{title}</h3>
                <p className="QualitycardDesc">{desc}</p>
            </div>

    )
}