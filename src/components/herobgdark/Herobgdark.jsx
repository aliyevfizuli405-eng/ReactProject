import {Button2} from "@components/buttons/Button2/Button2"

export const Herobgdark = ()=>{
    return(
        <div className="herobg flex justify-start items-center p-5">
          <div className="herobgInfo flex flex-column">
            <p className="text-light text-left md:text-left text-[50px]">
              Clan War: <br />
              Global Esports Cup
            </p>
            <p className="text-light md:text-left text-[14px] text-left">
              Virtus PRO vs Team Secret
            </p>
            <span className="">
              <Button2 text="Learn More" classes="flex justify-center" />
            </span>
          </div>
        </div>
    )
}