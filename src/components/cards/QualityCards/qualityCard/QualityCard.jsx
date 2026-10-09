import  "./QualityCard.css"

export const QualityCard = ({icon,title,desc}) =>{
    return(
            <div className="col-span-12 md:col-span-4 p-2 bg-[#ffffff1a] hover:bg-[#ffffff33] text-white flex flex-col justify-center items-center quality__card">
                {icon}
                <h3 className="text-white">{title}</h3>
                <p className="text-[14px] text-center">{desc}</p>
            </div>

    )
}