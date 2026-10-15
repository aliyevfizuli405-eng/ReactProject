import { Nav } from "@components/Nav/Nav";
import { ProductHerobg } from "@components/productHerobg/ProductHerobg";
import { SwiperProduct } from "@components/swiperProduct/SwiperProduct.jsx";
import { useState } from "react";
import { products } from "../../js/values";

export const ProductStyle = () => {
  return (
    <>
      <ProductHerobg
        bgImage={products[0].bgImage}
        title={products[0].title}
        price={products[0].price}
      />
      <main className="container-md bg-[#080325]">
        <SwiperProduct />
        <div className="game__inf p-4">
          <div className="flex">
            <div>
              <p className="text-light text-4xl">DESCRIPTION</p>
              <p className="text-light text-[14px]">
                {products[0].description}
              </p>
              <p className="text-light text-4xl">System Requirements</p>
              <p className="text-light text-[14px">
                {" "}
                OS:{products[0].systemRequirements.processor}
              </p>
              <p className="text-light text-[14px]">
                {" "}
                Memory:{products[0].systemRequirements.memory}
              </p>
              <p className="text-light text-[14px]">
                {" "}
                Graphics:{products[0].systemRequirements.graphics}
              </p>
              <p className="text-light text-[14px]">
                {" "}
                Storage:{products[0].systemRequirements.storage}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
};
