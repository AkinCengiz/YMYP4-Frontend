import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        categories : []
    }
    componentDidMount(){
        this.getCategories();
    }
    getCategories = () => {
        fetch("http://localhost:3000/category")
        .then(response => response.json())
        .then(data => this.setState({categories : data}))
    }
  render() {
    return (
      <div style={{backgroundColor:"green"}}>Contact
      <ul>
        {
            this.state.categories.map(c => (
                <li>{c.categoryName}</li>
            ))
        }
      </ul>
      </div>
    )
  }
}
