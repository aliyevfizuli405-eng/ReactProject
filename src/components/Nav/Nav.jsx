import { useState,useEffect} from "react"
import logo from "@/assets/image/logo-light.png"
import "./Nav.css"

// Lucide Icons
import {MenuIcon} from "lucide-react"

export const Nav = ()=>{
    const [scrolled,setScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return(
        <nav className={scrolled? "scrolled__nav":"nav"}>
            <div className="navbar flex justify-start gap-2 p-3  container-md">
                <div className="navbar__left flex justify-betweenitems-center ">
                    <img src={logo} alt="" className="logo" />
                    <div className="dropdown hidden md:block relative">
                         <a href="" className="nav__link">DEMOS<i className = "ri-arrow-drop-down-fill"></i><br /><span className="opacity-0">salam</span></a>
                         <div className="dropdownMenu">
                            <a className="dropdownLink" href="" >Dark</a>
                            <a className="dropdownLink" href="">Shooter</a>
                            <a className="dropdownLink" href="">Anime</a>
                            <a className="dropdownLink" href="">Light</a>
                            <a className="dropdownLink" href="">Landing</a>
                         </div>
                    </div>
                     <div className="dropdown hidden md:block">
                         <a href="" className="nav__link">SHOP<i className = "ri-arrow-drop-down-fill"></i><br /><span>games</span></a>
                         <div className="dropdownMenu">
                           <a className="dropdownLink" href="" >Dark</a>
                            <a className="dropdownLink" href="">Shooter</a>
                            <a className="dropdownLink" href="">Anime</a>
                            <a className="dropdownLink" href="">Light</a>
                            <a className="dropdownLink" href="">Landing</a>
                         </div>
                    </div> 
                    <div className="dropdown hidden md:block">
                         <a href="" className="nav__link">BLOG<i className = "ri-arrow-drop-down-fill"></i><br /><span>news</span></a>
                         <div className="dropdownMenu">
                            <a className="dropdownLink" href="" >Dark</a>
                            <a className="dropdownLink" href="">Shooter</a>
                            <a className="dropdownLink" href="">Anime</a>
                            <a className="dropdownLink" href="">Light</a>
                            <a className="dropdownLink" href="">Landing</a>
                         </div>
                    </div> 
                    <div className="dropdown hidden md:block">
                         <div className="nav__link">FEATURES<i className = "ri-arrow-drop-down-fill"></i><br /><span>full list</span></div>
                         <div className="dropdownMenu">
                            <a href="" className="dropdownLink">Product Style 1</a>
                            <a href="" className="dropdownLink">Shooter</a>
                            <a href="" className="dropdownLink">Anime</a>
                         </div>
                    </div>
                </div>
                <div className="navbar__right hidden md:flex">
                    <div className="dropdown">
                         <a href="" className="nav__link">THEME<i className = "ri-arrow-drop-down-fill"></i><br /><span>Buy&Docs</span></a>
                         <div className="dropdownMenu">
                             <a href="" className="dropdownLink">Dark</a>
                            <a href="" className="dropdownLink">Shooter</a>
                            <a href="" className="dropdownLink">Anime</a>
                         </div>
                    </div>
                     <div className="dropdown">
                         <a href="" className="nav__link"><i className= "bi bi-person-fill"></i><i className = "ri-arrow-drop-down-fill"></i><br /><span className="opacity-0">Salam</span></a>
                         <div className="dropdownMenu">
                             <a href="" className="dropdownLink">Dark</a>
                            <a href="" className="dropdownLink">Shooter</a>
                            <a href="" className="dropdownLink">Anime</a>
                         </div>
                    </div>
                    <button><a href="" className="nav__link"><i className = "bx bx-search"></i></a><br /><span className="opacity-0">salam</span></button>
                    <button><a href="" className="nav__link"><i className = "bi bi-cart"></i></a><br /><span className="opacity-0">salam</span></button>
                </div>
                <div className="mobile__nav flex md:hidden">
                  <button className="mobile__menu"><MenuIcon color="white"/></button>
                </div>
            </div>
        </nav>
    )
}