 import { useState,useEffect } from "react";
 import { Button2 } from "@components/buttons/Button2/Button2";
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
      <div className="gameCounter container-sm">
        <h2 className="herobgTitle title">The Witcher 3: Wild Hunt</h2>

        <div className="gameCounterTimer">
          <div className="gameCounterTime">
            {Math.floor(time / 24 / 60 / 60)}
          </div>
          <div className="gameCounterTime">
            {Math.floor((time / 60 / 60) % 24)}
          </div>

          <div className="gameCounterTime">{Math.floor((time / 60) % 60)}</div>

          <div className="gameCounterTime">{time % 60}</div>
        </div>
        <Button2 text="Purchase" />
      </div>
    </>
  );
};
