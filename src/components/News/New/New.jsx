import { Button2 } from "../../Button/Button2/Button2"
import "./New.css"

// Lucide 
import { Calendar } from "lucide-react"

export const New = ({bgImage,title,price,rate,coverImage,classes,description})=>{
    return(
        <div className="newsCard p-[30px] grid  gap-5.5 grid-cols-12">
            <div className="newsCardImage  col-span-12 md:col-span-3">
                <img src={coverImage} className="rounded-xl w-[70%] h-[auto] object-cover" alt="" />
                <span>{rate}</span>
            </div>
            <div className="newsCardDetails flex justify-between gap-3 flex-col col-span-12 p-3 md:col-span-9">
                <div className="flex justify-between">
                    <h2 className="title text-white text-[30px]" >{title}</h2> 
                    <span className="title text-white flex gap-2.5"><Calendar size={18}/>{rate}</span>
                </div>
                <p className="herobgDesc text-white">{description}</p>
                <Button2 text="Read More"/>
            </div>

        </div>
    )
}