import React, { Component } from "react";
import "./Categories.css";

export default class Categories extends Component {
  state = {
    categories: []
  };

  componentDidMount(){
    this.getCategories();
  }
  getCategories = () => {
    fetch("http://localhost:3000/category")
    .then(response => response.json())
    .then(data => this.setState({categories:data}))
  }
  render() {
    return (
      <div className="Categories">
        <h3>Categories</h3>
        <ul className="Category-List">
          {this.state.categories.map((category) => {
            return <li onClick={() => this.props.changeCategory(category)} className="Category-List-Item" key={category.entityId}>{category.categoryName}</li>;
          })}
        </ul>
      </div>
    );
  }
}
