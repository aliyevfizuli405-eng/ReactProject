import React from 'react'
import "./Button2.css"
export const Button2 = ({icon,text,classes}) => {
  return (
    <button className={`button__default2 flex justify-center items-center rounded-xl  bg-[#ffffff00] border-[2px] hover:bg-green-700 text-white text-[14px] hover:transition hover:border-green-600 ${classes} `}>{icon}{text}</button>
  )
}
