import React, { Component } from "react";
import State from "./components/state/State";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";

import "./App.css";
import Footer from "./components/footer/Footer";


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuProp : {
        menuText : "İstanbul Eğitim Akademi",
        menuTitle : "YMYP - 4",
        menuNav : ["Anasayfa","Hakkımızda","İletişim"]
      },
      mainProp : {
        mainTitle : "Burası main başlık",
        mainText : "Burası main içerik",
        mainDeneme : "Burası main deneme propsu"
      },
      footerProp : {
        city : "İstanbul",
        town : "Beşiktaş",
        phone : "1234567890",
        email : "akin@ymyp.com",
        copyright : "Copyright YMYP-4 - İstanbul Eğitim Akademi",
        logo : "YMYP - 4"
      }
    }
  }
   render(){
    return(
      <div className="App">
        <Menu menuProp={this.state.menuProp} />
        <State />
        <Main mainProp={this.state.mainProp} />
        <Footer footerProp={this.state.footerProp} />
      </div>
    )
  }
}

//<h1 text=></h1>

