import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import { Container } from "reactstrap";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

export default class App extends Component {
  render() {
    return <div>
      <Navbar/>
      <Container>
        <Main/>
      </Container>
      <Footer/>
    </div>;
  }
}
