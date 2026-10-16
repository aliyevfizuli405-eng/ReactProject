import React from "react";
import { games } from "../../../js/values";

export const GameInfo = ({game}) => {
  return (
    <div className="game__inf p-4">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-8">
          <p className="text-white text-4xl">DESCRIPTION</p>
          <p className="text-white text-[14px]">{game.description}</p>
          <p className="text-white text-4xl">System Requirements</p>
          <p className="text-white text-[14px">
            {" "}
            OS:{game.systemRequirements.processor}
          </p>
          <p className="text-white text-[14px]">
            {" "}
            Memory:{game.systemRequirements.memory}
          </p>
          <p className="text-white text-[14px]">
            {" "}
            Graphics:{game.systemRequirements.graphics}
          </p>
          <p className="text-white text-[14px]">
            {" "}
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
            <a href="">
            <span className="flex gap-2">
              <img src={game.bgImage} className="w-[100px]" alt="" />
              <div>
                <p className="text-white">{game.title}</p>
                <p className="text-white">${game.price}</p>
              </div>
            </span>
            </a>
          ))}

        </div>
      </div>
    </div>
  );
};
