import { useState, useEffect } from "react";
import { Button2 } from "@components/buttons/Button2/Button2";

import "./Countdown.css";

export const Countdown = () => {
  const [time, setTime] = useState(100 * 24 * 60 * 60);
  useEffect(() => {
    setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return clearInterval();
  }, []);
  return (
    <>
      <p className="text-light text-[50px] text-center">The Witcher 3: Wild Hunt</p>

      <div className="gameCounterTimer grid grid-cols-12 justify-center flex-wrap gap-4">
        <div className="gameCounterTime text-light text-[50px] col-span-12 sm:col-span-3  p-3 flex justify-center items-center bg-[#08032535] -skew-x-6 ">
          {Math.floor(time / 24 / 60 / 60)}
        </div>
        <div className="gameCounterTime text-light text-[50px] col-span-12 sm:col-span-3  p-3 flex justify-center items-center bg-[#08032535] -skew-x-6 ">
          {Math.floor((time / 60 / 60) % 24)}
        </div>

        <div className="gameCounterTime text-light text-[50px] col-span-12 sm:col-span-3  p-3 flex justify-center items-center bg-[#08032535] -skew-x-6 ">
          {Math.floor((time / 60) % 60)}
        </div>

        <div className="gameCounterTime text-light text-[50px] col-span-12 sm:col-span-3  p-3 flex justify-center items-center bg-[#08032535] -skew-x-6 ">
          {time % 60}
        </div>
      </div>
      <br />
      <div className="flex justify-center"><Button2 text="Purchase" /></div>
      
    </>
  );
};
