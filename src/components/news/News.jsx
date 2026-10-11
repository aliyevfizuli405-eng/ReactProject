import { New } from "./New/New"
import "./News.css"

export const News = ({items})=>{
        let esyalar=[]
        esyalar=items.map(item=><New imageUrl={item.imageUrl} title={item.title} date={item.date} snippet={item.snippet} point={item.desc}/>)
        return (
            <>
            <div className="newsCardContainer container-md bg-[#080325] p-3 flex flex-col gap-5">
                {esyalar}
            </div>
            </>    
        )
}