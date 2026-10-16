import { Nav } from "@components/Nav/Nav";
import { ProductHerobg } from "@/Pages/Product/productHerobg/ProductHerobg";
import { SwiperProduct } from "@/Pages/Product/swiperProduct/SwiperProduct.jsx";
import { useState } from "react";
import { GameInfo} from "../gameinfo/GameInfo";
import { games } from "../../../js/values";


export const ProductStyle = ({game}) => {
  return (
    <>
      <ProductHerobg
        bgImage={game.bgImage}
        title={game.title}
        price={game.price}
      />
      <main className="container-md bg-[#080325]">
        <SwiperProduct />
        <GameInfo game={game}/>
      </main>
    </>
  );
};
