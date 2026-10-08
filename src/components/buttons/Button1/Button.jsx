import React from 'react'
import "./Button.css"

export const Button = ({name,icon}) => {
  return (
    <button className='buttonDefault1'>{icon}{name}</button>
  )
}
