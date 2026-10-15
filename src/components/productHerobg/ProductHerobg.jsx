import React from 'react'
import { useState } from 'react'
import {Button2}  from "@components/buttons/Button2/Button2"

export const ProductHerobg = ({bgImage,title,price}) => {
  const [inputFizuli,setInputFizuli]=useState(false)
  return (
     <div className={`container-md  h-[70vh] p-5 flex flex-column justify-center bg-[url(${bgImage}]) bg-no-repeat bg-cover items-center  md:items-start`} style={{backgroundImage: `url("${bgImage}")`}}>
                <p className="text-[50px] font-medium text-light">{title}</p>
                <p className="text-[22.5px] text-light">$ {price}</p>
                <div className="flex flex-col  md:flex-row gap-5">
                <Button2 text="Add to cart"/>
                <input type="number" className={`text-light p-0.5  bg-[#ffffff40] -skew-x-10 ${inputFizuli? "hover:scale-[0.9]":null} `} onClick={()=>{setInputFizuli(true)}} />
                </div>
            </div>
  )
}
