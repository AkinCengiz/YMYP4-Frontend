import React, { Component } from 'react'

export default class Rooms extends Component {
  render() {
    return (
      <div class="w3-row-padding w3-padding-16">
            <div class="w3-third w3-margin-bottom">
              <img src="./images/room_single.jpg" alt="Norway" style={{width:"100%"}}/>
              <div class="w3-container w3-white">
                <h3>Single Room</h3>
                <h6 class="w3-opacity">From $99</h6>
                <p>Single bed</p>
                <p>15m<sup>2</sup></p>
                <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i></p>
                <button class="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
              </div>
            </div>
            <div class="w3-third w3-margin-bottom">
              <img src="./images/room_double.jpg" alt="Norway" style={{width:"100%"}}/>
              <div class="w3-container w3-white">
                <h3>Double Room</h3>
                <h6 class="w3-opacity">From $149</h6>
                <p>Queen-size bed</p>
                <p>25m<sup>2</sup></p>
                <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i> <i class="fa fa-tv"></i></p>
                <button class="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
              </div>
            </div>
            <div class="w3-third w3-margin-bottom">
              <img src="./images/room_deluxe.jpg" alt="Norway" style={{width:"100%"}}/>
              <div class="w3-container w3-white">
                <h3>Deluxe Room</h3>
                <h6 class="w3-opacity">From $199</h6>
                <p>King-size bed</p>
                <p>40m<sup>2</sup></p>
                <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i> <i class="fa fa-tv"></i> <i class="fa fa-glass"></i> <i class="fa fa-cutlery"></i></p>
                <button class="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
              </div>
            </div>
          </div>
    )
  }
}
