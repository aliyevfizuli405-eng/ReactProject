import React from "react";
import { X } from "lucide-react";
import { useContext,useState } from "react";
import { SearchContext } from "../Nav/Nav";
import { Nav } from "../Nav/Nav";
export const Search = () => {
    const [searched,setSearched]=useState(useContext(SearchContext))
     

if(searched){
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <input
        type="text"
        className="bg-white w-[80%] h-[60px] p-5"
        placeholder="Site Search"
      />
      <button
        className="absolute top-10 left-[90%]"
        onClick={() => {
          setSearched(!searched);
        }}
      >
        <X color="white" size={50} />
      </button>
    </div>
  );
}
  else{
    return <Nav/>
  }
};
