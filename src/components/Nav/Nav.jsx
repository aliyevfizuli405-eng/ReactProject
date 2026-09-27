import logo from "../../assets/image/logo-light.png"
import "../Nav/Nav.css"


export const Nav = ()=>{
    return(
        <nav>
            <div className="navbar">
                <div className="navbarRight">
                    <img src={logo} alt="" className="logo" />
                    <div className="dropdown">
                         <a href="" className="nav__link">DEMOS<i class = "ri-arrow-drop-down-fill"></i><br /><span className="salam">salam</span></a>
                         <div className="dropdownMenu">
                            <a className="dropdownLink" href="" >Dark</a>
                            <a className="dropdownLink" href="">Shooter</a>
                            <a className="dropdownLink" href="">Anime</a>
                            <a className="dropdownLink" href="">Light</a>
                            <a className="dropdownLink" href="">Landing</a>
                         </div>
                    </div>
                     <div className="dropdown">
                         <a href="" className="nav__link">SHOP<i class = "ri-arrow-drop-down-fill"></i><br /><span>games</span></a>
                         <div className="dropdownMenu">
                           <a className="dropdownLink" href="" >Dark</a>
                            <a className="dropdownLink" href="">Shooter</a>
                            <a className="dropdownLink" href="">Anime</a>
                            <a className="dropdownLink" href="">Light</a>
                            <a className="dropdownLink" href="">Landing</a>
                         </div>
                    </div> 
                    <div className="dropdown">
                         <a href="" className="nav__link">BLOG<i class = "ri-arrow-drop-down-fill"></i><br /><span>news</span></a>
                         <div className="dropdownMenu">
                            <a className="dropdownLink" href="" >Dark</a>
                            <a className="dropdownLink" href="">Shooter</a>
                            <a className="dropdownLink" href="">Anime</a>
                            <a className="dropdownLink" href="">Light</a>
                            <a className="dropdownLink" href="">Landing</a>
                         </div>
                    </div> 
                    <div className="dropdown">
                         <a href="" className="nav__link">FEATURES<i class = "ri-arrow-drop-down-fill"></i><br /><span>full list</span></a>
                         <div className="dropdownMenu">
                            <a href="" className="dropdownLink">Product Style 1</a>
                            <a href="" className="dropdownLink">Shooter</a>
                            <a href="" className="dropdownLink">Anime</a>
                         </div>
                    </div>
                </div>
                <div className="navbarLeft">
                    <div className="dropdown">
                         <a href="" className="nav__link">THEME<i class = "ri-arrow-drop-down-fill"></i><br /><span>Buy&Docs</span></a>
                         <div className="dropdownMenu">
                             <a href="" className="dropdownLink">Dark</a>
                            <a href="" className="dropdownLink">Shooter</a>
                            <a href="" className="dropdownLink">Anime</a>
                         </div>
                    </div>
                     <div className="dropdown">
                         <a href="" className="nav__link"><i class = "bi bi-person-fill"></i><i class = "ri-arrow-drop-down-fill"></i><br /><span className="salam">Salam</span></a>
                         <div className="dropdownMenu">
                             <a href="" className="dropdownLink">Dark</a>
                            <a href="" className="dropdownLink">Shooter</a>
                            <a href="" className="dropdownLink">Anime</a>
                         </div>
                    </div>
                    <button><a href="" className="nav__link"><i class = "bx bx-search"></i></a><br /><span className="salam">salam</span></button>
                    <button><a href="" className="nav__link"><i class = "bi bi-cart"></i></a><br /><span className="salam">salam</span></button>
                </div>
            </div>
        </nav>
    )
}