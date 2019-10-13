import React from "react"
import "./Header.css"
// import Logo from "../../assets/images/logo.png"

const toogleMenu = () => {
    const navbarItems = document.getElementsByClassName("Navbar__Link");
    for(let i=0;i<navbarItems.length;i++){
        navbarItems.item(i)!!.classList.toggle("Navbar__ToggleShow")
    }
};

const Header = () => {
    return (
        <header className="App-header">

        </header>
    )
};

export default Header;