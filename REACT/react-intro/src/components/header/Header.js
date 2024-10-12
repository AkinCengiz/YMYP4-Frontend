//Class Component 
import React, { Component } from "react";
import DateTime from "../datetime/DateTime";
import "./Header.css";

class Header extends Component {
    constructor(){
        super();
        this.state = {
            title : "YMYP-4",
            description : "İstanbul Eğitim Akademi",
            counter : 0,
            isActive : true,
            categories : [
                {id:1,name:"Biilgisayar"},
                {id:2, name:"Cep Telefoun"}
            ],
            address : {
                city : "İstanbul",
                town : "Eyüp",
                district : "Göktürk"
            }
        }
    }

    render(){
        return(
            <>
                <header className="header">
                    <h1 className="title">{this.state.title}</h1>
                    <p className="content">{this.state.description}</p>
                    <DateTime />
                </header>
            </>
        )
    }
}
export default Header