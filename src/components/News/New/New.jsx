import { Button2 } from "../../Buttons/Button2/Button2"

export const New = ({imageUrl,title,date,desc,point})=>{
    return(
        <div className="newsCard">
            <div className="newsCardImage">
                <img src={imageUrl} alt="" />
                <span>{point}</span>
            </div>
            <div className="newsCardDetails">
                <h2>{title}</h2>
                <p>{desc}</p>
                <p>{date}</p>
                <Button2 text="Read More"/>
            </div>

        </div>
    )
}