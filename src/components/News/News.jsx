import { New } from "./New/New"

import "./News.css"

export const News = ({items})=>{
        let esyalar=[]
        esyalar=items.map(item=><New bgImage={item.bgImage} description={item.description} coverImage={item.coverImage} title={item.title} rate={item.rate}/>)
        return (
            <>
            <div className="newsCardContainer container-md bg-[#080325] p-3 flex flex-col gap-5">
                {esyalar}
            </div>
            </>    
        )
}