import React from 'react'
import "./Button2.css"
export const Button2 = ({icon,text,classes}) => {
  return (
    <button className={`buttonDefault2 ${classes}`}>{icon}{text}</button>
  )
}
