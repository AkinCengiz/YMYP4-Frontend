import React, { Component } from "react";

export default class State extends Component {
  constructor(){
    super();
    this.state = {
      name : "Akın",
      surname : "Cengiz",
      address : {
        city : "İstanbul",
        town : "Eyüp",
        district : "Kemerburgaz"
      },
      languages : ["C#","JavaScript","Java"],
      appCss : {
        textAlign : "left",
        margin:"10px",
        padding:"10px", 
        backgroundColor:"#d8d8d8"
      },
      appListCss : {
        listStyleType : "none",
        margin : "0px"
      }
    }
  }

  render(){
    return(
      <div className="State">
        <div style={this.state.appCss}>
          <p>{this.state.name} {this.state.surname}</p>
          <p>Semt : {this.state.address.district}</p>
          <p>İlçe : {this.state.address.town}</p>
          <p>İl   : {this.state.address.city}</p>
          <ul style={this.state.appListCss}>
            <li>{this.state.languages[0]}</li>
            <li>{this.state.languages[1]}</li>
            <li>{this.state.languages[2]}</li>
          </ul>
        </div>
      </div>
    )
  }
}
