import React, { Component } from 'react'

export default class DateTime extends Component {
    constructor(){
        super();
        this.state = {
            date : "",
            time : ""
        }
    };

    showTime = setInterval(() => {
        this.setState({
            date : new Date().toLocaleDateString(),
            time : new Date().toLocaleTimeString()
        });        
    },1000);
  render() {
    return (
      <div style={{backgroundColor : "black", color : "white", padding : "10px", fontSize : "20px", fontWeight : "bold", border : "5px solid silver", textAlign : "center"}}>
        <h2>Tarih : {this.state.date} - Saat : {this.state.time}</h2>
      </div>
    )
  }
}

