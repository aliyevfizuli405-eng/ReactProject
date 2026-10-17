import { ProductHerobg } from "../productHerobg/ProductHerobg";
import { SwiperProduct } from "../swiperProduct/SwiperProduct";
import { GameInfo } from "../gameinfo/GameInfo";
import { GameContext } from "../Product";
import { useContext } from "react";

export const ProductStyle = () => {
  const game= useContext(GameContext)
  return (
    <>
      <ProductHerobg bgImage={game.bgImage} title={game.title} price={game.price} />
      <main className="container-md bg-[#080325]">
        <SwiperProduct />
        <GameInfo game={game} />
      </main>
    </>
  );
};