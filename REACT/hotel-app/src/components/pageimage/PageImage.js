import React, { Component } from 'react'

export default class PageImage extends Component {
    
    
  render() {
    return (
        <header class="w3-display-container w3-content" style={{maxWidth :"1500px"}}>
        <img class="w3-image" src={this.props.images[0]?.url} alt="The Hotel" style={{minWidth:"1000px"}} width="1500" height="800"/>
        <div class="w3-display-left w3-padding w3-col l6 m8">
          <div class="w3-container w3-red">
            <h2><i class="fa fa-bed w3-margin-right"></i>Hotel Name</h2>
          </div>
          <div class="w3-container w3-white w3-padding-16">
            <form action="/action_page.php" target="_blank">
              <div class="w3-row-padding" style={{margin:"0 -16px"}}>
                <div class="w3-half w3-margin-bottom">
                  <label><i class="fa fa-calendar-o"></i> Check In</label>
                  <input class="w3-input w3-border" type="text" placeholder="DD MM YYYY" name="CheckIn" required/>
                </div>
                <div class="w3-half">
                  <label><i class="fa fa-calendar-o"></i> Check Out</label>
                  <input class="w3-input w3-border" type="text" placeholder="DD MM YYYY" name="CheckOut" required/>
                </div>
              </div>
              <div class="w3-row-padding"  style={{margin:"8px -16px"}}>
                <div class="w3-half w3-margin-bottom">
                  <label><i class="fa fa-male"></i> Adults</label>
                  <input class="w3-input w3-border" type="number" value="1" name="Adults" min="1" max="6"/>
                </div>
                <div class="w3-half">
                  <label><i class="fa fa-child"></i> Kids</label>
                <input class="w3-input w3-border" type="number" value="0" name="Kids" min="0" max="6"/>
                </div>
              </div>
              <button class="w3-button w3-dark-grey" type="submit"><i class="fa fa-search w3-margin-right"></i> Search availability</button>
            </form>
          </div>
        </div>
      </header>
      
    )
  }
}
