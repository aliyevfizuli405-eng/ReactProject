
import React, { useState } from 'react';
import { useContext } from 'react';
import { GameContext } from '../Product';
import { Button2 } from "@components/Button/Button2/Button2"

export const ProductHerobg = () => {
  const [inputFizuli, setInputFizuli] = useState(false);
  const game=useContext(GameContext)

  return (
    <div
      className="container-md h-[70vh] p-10 flex flex-col justify-center items-center md:items-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${game.bgImage}")`,padding:"40px" }}
    >
      <p className="text-[50px] font-medium text-white">
        {game.title}
      </p>

      <p className="text-[22.5px] text-white">
        $ {game.price}
      </p>

      <div className="flex flex-col md:flex-row gap-5">
        <Button2 text="Add to cart" />
        <input
          type="number"
          className={`text-white p-0.5 bg-[#ffffff40] -skew-x-10 ${
            inputFizuli ? "scale-[0.9]" : ""
          }`}
          onClick={() => setInputFizuli(true)}
        />
      </div>
    </div>
  )
}
