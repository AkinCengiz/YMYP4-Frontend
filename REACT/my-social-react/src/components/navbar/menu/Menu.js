import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <nav id="menu" class="nav-right">
      <ul class="menu-list">
          <li class="nav-item"><a href="#" class="nav-link p-3"><i class="fa-solid fa-globe"></i></a></li>
          <li class="nav-item"><a href="#" class="nav-link p-3"><i class="fa-solid fa-user"></i></a></li>
          <li class="nav-item"><a href="#" class="nav-link p-3"><i class="fa-solid fa-envelope"></i></a></li>
          <li class="nav-item bell"><a href="#" class="nav-link p-3"><i class="fa-solid fa-bell"></i></a></li>
          {/* <span class="badge text-bg-danger">5</span> */}
      </ul>
      <div id="profile-img">
          <img src="https://i.pravatar.cc/40?u=fake@pravatar.com" alt=""/>
      </div>
  </nav>
    );
  }
}
