import React, { useContext } from "react";
import { Link } from "react-router";
import { games } from "../../../js/values";
import { GameContext } from "../Product";

// Lucide
import { HardDrive,Cpu,Gpu} from "lucide-react";

export const GameInfo = () => {
  const game=useContext(GameContext)
  return (
    <div className="game__inf p-4">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-8">
          <p className="text-white text-4xl mb-8">DESCRIPTION</p>
          <p className="text-white text-[18px] mb-10">{game.description}</p>
          <p className="text-white text-4xl mb-8">System Requirements</p>
          <p className="text-white text-[18px">
            OS:{game.systemRequirements.processor}
          </p>
          <p className="text-white text-[18px] mb-6">
            Memory:{game.systemRequirements.memory}
          </p>
          <p className="text-white text-[18px] mb-6">
            Graphics:{game.systemRequirements.graphics}
          </p>
          <p className="text-white text-[18px] mb-6">
            Storage:{game.systemRequirements.storage}
          </p>
        </div>
        <div className=" col-span-12 md:col-span-4 flex flex-col gap-2 ">
          <p className="text-white">Search for</p>
          <input
            type="text"
            className="-skew-x-6 bg-[#ffffff30] text-white p-2 w-[70%]"
            placeholder="Search Products..."
          />
          <span className="-skew-x-6 bg-[#ffffff30] p-2 block w-[70%] text-white">
            Next Match
          </span>
          <p className="text-white text-[14px]">Next match found</p>
          <span className="-skew-x-6 bg-[#ffffff30] p-2 block w-[70%] text-white">
            Top Rated Products
          </span>
          {games.map((game) => (
            <Link to={`/product/${game.id}`}>
              {game.rate>4.7 && <span className="flex gap-2">
              <img src={game.bgImage} className="w-[100px]" alt="" />
              <div>
                <p className="text-white">{game.title}</p>
                <p className="text-white">${game.price}</p>
              </div>
            </span>
           }
             </Link>
          ))}

        </div>
      </div>
    </div>
  );
};