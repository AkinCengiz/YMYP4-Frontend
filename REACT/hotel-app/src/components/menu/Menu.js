import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
        <div class="w3-bar w3-white w3-large">
        <a href="#" class="w3-bar-item w3-button w3-red w3-mobile"><i class="fa fa-bed w3-margin-right"></i>Logo</a>
        <a href="#rooms" class="w3-bar-item w3-button w3-mobile">Rooms</a>
        <a href="#about" class="w3-bar-item w3-button w3-mobile">About</a>
        <a href="#contact" class="w3-bar-item w3-button w3-mobile">Contact</a>
        <a href="#contact" class="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Book Now</a>
      </div>
    )
  }
}
