import React, { Component } from "react";

export default class OurHotels extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    fetch("http://localhost:3000/images")
      .then((res) => res.json())
      .then((data) => {
        let list = data.filter(x => Number(x.id) !== 1 && Number(x.id) !== 3);
        this.setState({ images: list });
      });
  };
  render() {
    return (
      <>
        <div class="w3-container">
          <h3>Our Hotels</h3>
          <h6>You can find our hotels anywhere in the world:</h6>
        </div>

        <div class="w3-row-padding w3-padding-16 w3-text-white w3-large">
          {this.state.images.slice(0, 1).map((x) => (
            <div class="w3-half w3-margin-bottom" key={x.id}>
              <div class="w3-display-container">
                <img
                  src={x.url}
                  alt={x.alt}
                  style={{width:"100%"}}
                />
                <span class="w3-display-bottomleft w3-padding">
                  {x.alt}
                </span>
              </div>
            </div>
          ))}

          <div class="w3-half">
          <div class="w3-row-padding"  style={{margin:"0 -16px"}}>
            {
              this.state.images.slice(1,3).map(x => (
                <div class="w3-half w3-margin-bottom" key="x.id">
                <div class="w3-display-container">
                  <img
                    src={x.url}
                    alt={x.alt}
                    style={{width:"100%"}}
                  />
                  <span class="w3-display-bottomleft w3-padding">{x.alt}</span>
                </div>
              </div>
              ))
            }
            </div>
            <div class="w3-row-padding" style={{margin:"0 -16px"}}>
              {
                this.state.images.slice(3,5).map(x => (
                  <div class="w3-half w3-margin-bottom" key={x.id}>
                <div class="w3-display-container">
                  <img src={x.url} alt={x.alt} style={{width:"100%"}} />
                  <span class="w3-display-bottomleft w3-padding">{x.alt}</span>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}
