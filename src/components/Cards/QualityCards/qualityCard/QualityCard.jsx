import  "./QualityCard.css"

export const QualityCard = ({icon,title,desc}) =>{
    return(
            <div className="col-span-12 w-[100%] md:col-span-4 rounded-xl p-[16px] bg-[#ffffff1a] hover:bg-[#ffffff33] text-white flex flex-col justify-center items-center quality__card transition delay-100 duration-300  ease-in">
                {icon}
                <h3 className="text-white text-[16px] text-[24px]">{title}</h3>
                <p className="text-[12px] text-[16px] text-center">{desc}</p>
            </div>

    )
}