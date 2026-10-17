import React from 'react'
import "./Button2.css"
export const Button2 = ({icon,text,classes}) => {
  return (
    <button className={`button__default2 flex justify-center items-center p-[10px] rounded-xl bg-purple-600 border-purple-700 border-1 hover:bg-purple-800 hover:border-purple-800   text-white text-[14px] ${classes} `}>{icon}{text}</button>
  )
}
