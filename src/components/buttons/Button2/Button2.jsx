import React from 'react'
import "./Button2.css"
export const Button2 = ({icon,text,classes}) => {
  return (
    <button className={`button__default2 flex justify-center items-center p-3 bg-[#ffffff00] hover:bg-[#d92b4c] text-white text-[14px hover:transition hover:border-[#d92b4c] ${classes} `}>{icon}{text}</button>
  )
}
