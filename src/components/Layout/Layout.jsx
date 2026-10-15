import { Outlet } from "react-router";
import { Nav } from "@components/Nav/Nav";
import {Footer} from "@components/Footer/Footer"

export const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <div className="container-md">
        <Footer/>
      </div>
      
    </>
  );
};  