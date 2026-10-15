import {Button} from "@components/buttons/Button1/Button.jsx"
import {Button2} from "@components/buttons/Button2/Button2.jsx"

import { Eye,ShoppingCart } from "lucide-react"

export const Herobg = ()=>{
    return(
        <section className="herobg flex justify-center items-start p-5 flex-col">
                    <div className="herobgInfo">
                        <div className="herobgContent flex flex-column justify-center items-start">
                            <h1 className="herobgTitle title text-white text-[50px]">YOUPLAY-GAMING THEME</h1>
                            <p className="herobgDesc subtitle text-white text-[21px]">You are not limited to the features of this theme. It is suitable for gaming site,<br /> and for any business project. Pre-packed demos will help you to quickly run <br /> your new creative website.</p>
                            <span className="herobgButtonContainer flex gap-3">
                                <Button name={"Demo"} icon={<Eye />} />
                                <Button2 text={"Purchase"} icon={<ShoppingCart />} />
                            </span>
                        </div>
                    </div>
        </section>
    )
}