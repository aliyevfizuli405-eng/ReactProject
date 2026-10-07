import { Button2 } from "../../Buttons/Button2/Button2"
import "./New.css"

// Lucide 
import { Calendar } from "lucide-react"

export const New = ({imageUrl,title,date,snippet,point})=>{
    return(
        <div className="newsCard">
            <div className="newsCardImage">
                <img src={imageUrl} alt="" />
                <span>{point}</span>
            </div>
            <div className="newsCardDetails">
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h2 className="title">{title}</h2> 
                    <p className="title"><Calendar/>{date}</p>
                </div>
                
                <p className="herobgDesc">{snippet}</p>
               
                <Button2 text="Read More"/>
            </div>

        </div>
    )
}