import React, { Component } from 'react'

export default class OurHotels extends Component {
  render() {
    return (
      <div>
                  <div class="w3-container">
            <h3>Our Hotels</h3>
            <h6>You can find our hotels anywhere in the world:</h6>
          </div>
          
          <div class="w3-row-padding w3-padding-16 w3-text-white w3-large">
            <div class="w3-half w3-margin-bottom">
              <div class="w3-display-container">
                <img src="./images/cinqueterre.jpg" alt="Cinque Terre" style={{width:"100%"}}/>
                <span class="w3-display-bottomleft w3-padding">Cinque Terre</span>
              </div>
            </div>
            <div class="w3-half">
              <div class="w3-row-padding" style={{margin:"0 16px"}}>
                <div class="w3-half w3-margin-bottom">
                  <div class="w3-display-container">
                    <img src="./images/newyork2.jpg" alt="New York" style={{width:"100%"}} />
                    <span class="w3-display-bottomleft w3-padding">New York</span>
                  </div>
                </div>
                <div class="w3-half w3-margin-bottom">
                  <div class="w3-display-container">
                    <img src="./images/sanfran.jpg" alt="San Francisco" style={{width:"100%"}} />
                    <span class="w3-display-bottomleft w3-padding">San Francisco</span>
                  </div>
                </div>
              </div>
              <div class="w3-row-padding" style={{margin:"0 16px"}}>
                <div class="w3-half w3-margin-bottom">
                  <div class="w3-display-container">
                    <img src="./images/pisa.jpg" alt="Pisa" style={{width:"100%"}} />
                    <span class="w3-display-bottomleft w3-padding">Pisa</span>
                  </div>
                </div>
                <div class="w3-half w3-margin-bottom">
                  <div class="w3-display-container">
                    <img src="./images/paris.jpg" alt="Paris" style={{width:"100%"}} />
                    <span class="w3-display-bottomleft w3-padding">Paris</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
