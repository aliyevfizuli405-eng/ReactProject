import styles from "./QualityCard.module.css"

export const QualityCard = ({icon,title,desc}) =>{
    return(
            <div className={styles.qualitycard}>
                {icon}
                <h3 className={styles.qualitycardTitle}>{title}</h3>
                <p className={styles.qualitycardDesc}>{desc}</p>
            </div>

    )
}