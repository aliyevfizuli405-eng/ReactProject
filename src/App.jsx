import { Routes, Route } from "react-router";
import { Layout } from "@components/Layout/Layout";
import { Home } from "@/Pages/Home/Home";
import { Dark } from "@/Pages/Dark/Dark";
import { Product } from "@/Pages/Product/Product";

import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dark" element={<Dark />} />
        <Route path="product" element={<Product/>}/>
        <Route path="*" element={<h1 className="text-light p-5">404 - Page not found</h1>} />
      </Route>
    </Routes>
  );
};