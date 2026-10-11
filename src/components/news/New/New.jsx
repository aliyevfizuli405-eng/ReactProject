import { Button2 } from "../../buttons/Button2/Button2"
import "./New.css"

// Lucide 
import { Calendar } from "lucide-react"

export const New = ({imageUrl,title,date,snippet,point,classes})=>{
    return(
        <div className="newsCard grid grid-cols-12">
            <div className="newsCardImage  col-span-12 md:col-span-6">
                <img src={imageUrl} alt="" />
                <span>{point}</span>
            </div>
            <div className="newsCardDetails col-span-12 p-3 md:col-span-6">
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h2 className="title text-white" >{title}</h2> 
                    <p className="title text-white"><Calendar/>{date}</p>
                </div>
                
                <p className="herobgDesc text-white">{snippet}</p>
               
                <Button2 text="Read More"/>
            </div>

        </div>
    )
}