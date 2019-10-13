import React from "react"
// import Logo from "../../assets/images/loja_daora.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="FooterContent">
                <div className={"FooterLogo"}>
                {/*<img  style={{height: "100px"}} src={Logo}/>*/}
                </div>
                <div className={"WorkingHours"}>
                    Horários de Funcionamento:<br/>
                    Segunda a Quinta 14h às 02h
                    <br/>
                    Sexta e sábado 14h às 06h.
                </div>
            </div>
        </footer>
    )
};

export default Footer;

