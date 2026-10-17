import { useState, useEffect } from "react";
import { createContext } from "react";
import { Link } from "react-router";
import logo from "@/assets/image/logo-light.png";
import "./Nav.css";
import { Search } from "../Search/Search";

// Lucide Icons
import { MenuIcon, X,ShoppingCart} from "lucide-react";

export const SearchContext = createContext();

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileNav = () => setMobileNav(false);

  if (!searched) {
    return (
      <>
        <nav
          className={scrolled ? "scrolled__nav p-5 flex z-10 " : "nav p-5 z-10"}
        >
          <div className="navbar flex justify-between items-center gap-2 p-3 container-md">
            <div className="navbar__left flex justify-center items-center">
              <Link to="/">
                <img src={logo} alt="gameShop logo" className="logo" />
              </Link>

              {/* DEMOS */}
              <div className="dropdown hidden md:block">
                <Link to="/" className="nav__link">
                  DEMOS<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span className="opacity-0">salam</span>
                </Link>
                <div className="dropdownMenu flex-col">
                  <Link className="dropdownLink" to="/dark">
                    Dark
                  </Link>
                  <a className="dropdownLink" href="">
                    Shooter
                  </a>
                  <a className="dropdownLink" href="">
                    Anime
                  </a>
                  <Link className="dropdownLink" to="/">
                    Light
                  </Link>
                  <a className="dropdownLink" href="">
                    Landing
                  </a>
                </div>
              </div>

              {/* SHOP */}
              <div className="dropdown hidden md:block">
                <Link to="/product" className="nav__link">
                  SHOP<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span>games</span>
                </Link>
                <div className="dropdownMenu flex-col">
                  <Link className="dropdownLink" to="/product">
                    Product Style 1
                  </Link>
                  <a className="dropdownLink" href="">
                    Product Style 2
                  </a>
                  <a className="dropdownLink" href="">
                    Shop
                  </a>
                  <a className="dropdownLink" href="">
                    CheckOut
                  </a>
                  <a className="dropdownLink" href="">
                    Basket
                  </a>
                </div>
              </div>

              {/* BLOG */}
              <div className="dropdown hidden md:block">
                <a href="" className="nav__link">
                  BLOG<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span>news</span>
                </a>
                <div className="dropdownMenu flex justify-center gap-5 items-center">
                  <div className="flex flex-col">
                    <a className="dropdownLink" href="">
                      Post Style 1
                    </a>
                    <a className="dropdownLink" href="">
                      Post Style 2
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a className="dropdownLink" href="">
                      Blog Style 1
                    </a>
                    <a className="dropdownLink" href="">
                      Blog Style 2
                    </a>
                    <a className="dropdownLink" href="">
                      Blog Style 3
                    </a>
                  </div>
                </div>
              </div>

              {/* FEATURES */}
              <div className="dropdown hidden md:block">
                <div className="nav__link">
                  FEATURES<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span>full list</span>
                </div>
                <div className="dropdownMenu flex-col">
                  <Link className="dropdownLink" to="/product">
                    Product Style 1
                  </Link>
                  <a className="dropdownLink" href="">
                    Shooter
                  </a>
                  <a className="dropdownLink" href="">
                    Anime
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (desktop) */}
            <div className="navbar__right hidden md:flex md:gap-2">
              <div className="dropdown">
                <a href="" className="nav__link">
                  THEME<i className="ri-arrow-drop-down-fill"></i>
                  <br />
                  <span>Buy&Docs</span>
                </a>
                <div className="dropdownMenu flex-col">
                  <Link className="dropdownLink" to="/dark">
                    Dark
                  </Link>
                  <a className="dropdownLink" href="">
                    Shooter
                  </a>
                  <a className="dropdownLink" href="">
                    Anime
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <button className="bg-purple-800 hover:bg-purple-900 menubtns rounded-full p-2">
                    <i className="bi bi-person-fill text-white"></i>
                    <i className="ri-arrow-drop-down-fill text-white"></i>
                </button>
                <div className="dropdownMenu flex-col">
                  <a className="dropdownLink" href="">
                    Login
                  </a>
                  <a className="dropdownLink" href="">
                    Register
                  </a>
                  <a className="dropdownLink" href="">
                    Profile
                  </a>
                </div>
              </div>
              <div className="">
                <button
                  className="flex items-center justify-center bg-purple-800 hover:bg-purple-900 menubtns p-3 rounded-full"
                  onClick={() => {
                    setSearched(!searched);
                  }}
                >
                  <i className="bx bx-search text-white"></i>
                </button>
              </div>
              
              <div className="">
                <button className="flex items-center justify-center bg-purple-800 hover:bg-purple-900 menubtns rounded-full   p-3 ">
                  <ShoppingCart color="white" size={20}/>
                </button>
              </div>
            </div>

            {/* MOBILE */}
            <div className="mobile__nav flex md:hidden md:opacity-0">
              <button
                className="mobile__menu__btn"
                aria-label="Toggle menu"
                onClick={() => setMobileNav(!mobileNav)}
              >
                <MenuIcon color="white" />
              </button>

              <div
                className={
                  mobileNav
                    ? "mobile__menu__container flex flex-col p-5"
                    : " hidden w-[0%] opacity-0"
                }
              >
                <Link to="/" className="nav__link" onClick={closeMobileNav}>
                  HOME
                </Link>
                <Link to="/dark" className="nav__link" onClick={closeMobileNav}>
                  DARK
                </Link>
                <Link
                  to="/product"
                  className="nav__link"
                  onClick={closeMobileNav}
                >
                  SHOP
                </Link>
                <div className="dropdown">
                  <a href="" className="nav__link">
                    <i className="bi bi-person-fill"></i>
                    <i className="ri-arrow-drop-down-fill"></i>
                    <br />
                    <span className="opacity-0">Salam</span>
                  </a>
                  <div className="dropdownMenu flex-col">
                    <a className="dropdownLink" href="">
                      Login
                    </a>
                    <a className="dropdownLink" href="">
                      Register
                    </a>
                    <a className="dropdownLink" href="">
                      Profile
                    </a>
                  </div>
                </div>
                <button
                  className="flex justify-start  p-0"
                  onClick={() => {
                    setSearched(!searched);
                  }}
                >
                  <i className="bx bx-search text-white"></i>
                  <br />
                  <span className="opacity-0">salam</span>
                </button>
                <button>
                  <a href="" className="nav__link">
                    <i className="bi bi-cart"></i>
                  </a>
                  <br />
                  <span className="opacity-0">salam</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={
            searched
              ? "block absolute bg-[#080325] flex justify-center items-center w-[100vw] h-[100%] overflow-hidden z-10"
              : "hidden"
          }
        >
          <input
            placeholder="Site Search"
            className="text-white bg-[#ffffff80] rounded-xl w-[80%] p-6 "
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <SearchContext.Provider value={{ searched, setSearched }}>
          <Search searched={{ searched, setSearched }} />
        </SearchContext.Provider>
      </>
    );
  }
};
