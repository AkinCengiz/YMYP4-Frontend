import React, { Component } from "react";
import "./Categories.css";

export default class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <ul className="CategoryList">
          {this.props.categoryList.map((category) => {
            return (
              <li
                onClick={() => this.props.changeCategory(category)}
                className="Category-List-Item"
              >
                {category.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
