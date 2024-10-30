import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
        <div class="w3-bar w3-white w3-large">
        <Link to="/" class="w3-bar-item w3-button w3-red w3-mobile"><i class="fa fa-bed w3-margin-right"></i>Logo</Link>
        <Link to="rooms" class="w3-bar-item w3-button w3-mobile">Rooms</Link>
        {/* <Link to="roomdetail/0" class="w3-bar-item w3-button w3-mobile">Room Detail</Link> */}
        <a href="#about" class="w3-bar-item w3-button w3-mobile">About</a>
        <a href="#contact" class="w3-bar-item w3-button w3-mobile">Contact</a>
        <Link to="#contact" class="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Book Now</Link>
      </div>
    )
  }
}
