import React, { Component } from "react";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar" class="container-fluid border">
        <Logo/>
        <Menu/>
    </div>
    );
  }
}
