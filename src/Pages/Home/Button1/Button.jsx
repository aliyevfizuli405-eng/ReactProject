import React from 'react'
import "./Button.css"

export const Button = ({name,icon}) => {
  return (
    <button className='buttonDefault1 flex justify-center rounded-xl items-center bg-[#ffffff00] border-2 border-purple-700 p-[12px] **:text-white'>{icon}{name}</button>
  )
}
