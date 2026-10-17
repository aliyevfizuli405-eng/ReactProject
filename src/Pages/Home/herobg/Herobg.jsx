import {Button} from "@/Pages/Home/Button1/Button.jsx"
import {Button2} from "@components/Button/Button2/Button2.jsx"

import { Eye,ShoppingCart } from "lucide-react"



export const Herobg = ()=>{
    return(
        <section className="herobg container-md flex flex-col justify-center items-start">
                    <div className="herobgInfo p-10">
                        <div className="herobgContent flex flex-col justify-center items-start">
                            <h1 className="herobgTitle title text-white text-center  text-[35px] md:text-[50px]">YOUPLAY-GAMING THEME</h1>
                            <p className="herobgDesc subtitle text-white text-[13px] md:text-[16px] mb-[1rem] font-medium text-center md:text-left md:text-[21px]">You are not limited to the features of this theme. It is suitable for gaming site,<br /> and for any business project. Pre-packed demos will help you to quickly run <br /> your new creative website.</p>
                            <div className="herobgButtonContainer flex justify-center items-center gap-3">
                                <Button name={"Demo"} icon={<Eye />} />
                                <Button2 text={"Purchase"} icon={<ShoppingCart />} />
                            </div>
                        </div>
                    </div>
        </section>
    )
}