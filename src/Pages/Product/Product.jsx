import { useParams } from "react-router";
import { useEffect, useState, createContext } from "react";
import { games } from "../../js/values";
import { ProductStyle } from "./productStyle/ProductStyle";

// Context
export const GameContext = createContext();

export const Product = () => {
  const { id } = useParams();
  
  const [game,setGame] = useState(games.find((g) => String(g.id) === id) ?? games[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <GameContext.Provider value={game}>
      <ProductStyle game={game} />
    </GameContext.Provider>
  );
};
