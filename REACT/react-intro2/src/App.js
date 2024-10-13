import React, { Component } from "react";
import State from "./components/state/State";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";

import "./App.css";
import Footer from "./components/footer/Footer";
import { Container, Row } from "reactstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuProp: {
        menuText: "İstanbul Eğitim Akademi",
        menuTitle: "YMYP - 4",
        menuNav: ["Anasayfa", "Hakkımızda", "İletişim"],
      },
      mainProp: {
        mainTitle: "Burası main başlık",
        mainText: "Burası main içerik",
        mainDeneme: "Burası main deneme propsu",
        mainCss : {
          border : "5px solid silver",
          backgroundColor : "red",
          color : "white"
        },
        mainList : {
          listStyleType : "none",
          margin : "0px",
          padding : "0px"
        }
      },
      footerProp: {
        city: "İstanbul",
        town: "Beşiktaş",
        phone: "1234567890",
        email: "akin@ymyp.com",
        copyright: "Copyright YMYP-4 - İstanbul Eğitim Akademi",
        logo: "YMYP - 4",
      },
    };
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Menu menuProp={this.state.menuProp} />
          </Row>
          <Row>
            <State />
          </Row>
          <Row>
            <Main mainProp={this.state.mainProp} />
          </Row>
          <Row>
            <Footer footerProp={this.state.footerProp} />
          </Row>
        </Container>
      </div>
    );
  }
}

//<h1 text=></h1>
