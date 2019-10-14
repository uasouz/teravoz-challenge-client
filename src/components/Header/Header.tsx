import React from "react"
import "./Header.css"
import {Typography} from "@material-ui/core";
// import Logo from "../../assets/images/logo.png"

const Header = () => {
    return (
        <header className="App-header">
            <Typography variant="h3" component="h4">TeraVoz Client Dashboard</Typography>
        </header>
    )
};

export default Header;