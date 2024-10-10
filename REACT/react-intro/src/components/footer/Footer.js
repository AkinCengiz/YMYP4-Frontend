//Function Component
import React from "react"


//Object Css => css özellikleri object olarak tanımlanıp atanır...
const footerCss = {
    backgroundColor : "#00ddff",
    color : "black",
    textAlign : "center",
    padding : "10px"
}

const Footer = () => {
    return(
        <p style={footerCss}>&copy; Copyright 2024 YMYP-4 by İstanbul Eğitim Akademi</p>       
        //<p style={{backgroundColor : "#00ddff", color : "black", textAlign : "center", padding : "10px"}}>&copy; Copyright 2024 YMYP-4 by İstanbul Eğitim Akademi</p>       
    );
};

export default Footer;

//Sidebar

/**
 * ul
 * li Bilgisayar
 * li Cep Telefonu
 * li Televizyon
 * /ul
 * 
 * 
 * 
 * 
 */