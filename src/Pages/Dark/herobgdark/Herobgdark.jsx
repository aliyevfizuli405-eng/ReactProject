import {Button2} from "@components/Button/Button2/Button2"

export const Herobgdark = ()=>{
    return(
        <div className="herobg flex  justify-start items-center px-[70px]">
          <div className="herobgInfo flex flex-col">
            <p className="text-white text-left md:text-left text-[30px] md:text-[50px]">
              Clan War: <br />
              Global Esports Cup
            </p>
            <p className="text-white md:text-left text-[12px] mb-3 md:text-[14px] text-left">
              Virtus PRO vs Team Secret
            </p>
            <span className="">
              <Button2 text="Learn More" classes="flex justify-center" />
            </span>
          </div>
        </div>
    )
}