import React, { Component } from 'react'

export default class About extends Component {
  state = {
    about : null,
    image : null
  }

  componentDidMount(){
    this.getAbout();
    this.getImage();
  }

  getImage = () => {
    fetch("http://localhost:3000/images")
    .then(res => res.json())
    .then(data => {
      let img = data.find(x => x.id == 3)
      this.setState({image : img})    
    })
  }

  getAbout = () => {
    fetch("http://localhost:3000/about")
    .then(res => res.json())
    .then(data => this.setState({about : data}));
  }
  render() {
    return (
        <div class="w3-row-padding" id="about">
        <div class="w3-col l4 12">
          <h3>About</h3>
          <h6>{this.state.about?.description}</h6>
        <p>We accept: <i class="fa fa-credit-card w3-large"></i> <i class="fa fa-cc-mastercard w3-large"></i> <i class="fa fa-cc-amex w3-large"></i> <i class="fa fa-cc-cc-visa w3-large"></i><i class="fa fa-cc-paypal w3-large"></i></p>
        </div>
        <div class="w3-col l8 12">
          {/* <!-- Image of location/map --> */}
          <img src={this.state.image?.url} class="w3-image w3-greyscale" style={{width:"100%"}}/>
        </div>
      </div>
    )
  }
}
