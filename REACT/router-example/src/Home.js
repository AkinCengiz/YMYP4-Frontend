import React, { Component } from 'react'

export default class Home extends Component {
    state= {
        products : []
    }
    componentDidMount(){
        this.getProducts();
    }
    getProducts = () => {
        fetch("http://localhost:3000/product")
        .then(response => response.json())
        .then(data => this.setState({products : data}))
    }
  render() {
    return (
      <div style={{backgroundColor:"gray"}}>Home
      <ul>
        {
            this.state.products.map(x => (
                <li>{x.productName}</li>
            ))
        }
        
      </ul>
      </div>
    )
  }
}
