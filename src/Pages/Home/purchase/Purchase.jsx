import {Button2} from "@components/Button/Button2/Button2"

export const Purchase = ()=>{
    return(
                <section className="purchase p-9">
                    <div className="purchaseContent  p-9 flex flex-col justify-center items-center">
                        <h2 className="title text-white" style={{fontSize:"50px"}}>PURCHASE TODAY FOR $59</h2>
                        <br />
                        <br />
                        <Button2 text="Purchase" classes="purchaseBtn"/>
                    </div>
                </section>
    )
}