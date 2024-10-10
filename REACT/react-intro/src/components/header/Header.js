//Class Component 
import React, { Component } from "react";
import DateTime from "../datetime/DateTime";
import "./Header.css";

class Header extends Component {
    constructor(){
        super();
        this.state = {
            title : "YMYP-4",
            description : "İstanbul Eğitim Akademi"
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