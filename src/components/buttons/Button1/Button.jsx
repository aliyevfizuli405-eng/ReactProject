import React from 'react'
import "./Button.css"

export const Button = ({name,icon}) => {
  return (
    <button className='buttonDefault1 flex justify-center items-center bg-[#d92b4c] p-3 **:text-white'>{icon}{name}</button>
  )
}
