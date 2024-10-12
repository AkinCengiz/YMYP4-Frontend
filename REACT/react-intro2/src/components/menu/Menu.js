import React, { Component } from "react";
import "./Menu.css"

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "Logo",
      profile: "Profile",
    };
  }
  render() {
    return (
      <div className="Menu">
        <p className="Menu-Logo">{this.props.menuProp.menuTitle}</p>
        <p className="Menu-Text">{this.props.menuProp.menuText}</p>
        <ul className="Menu-Nav">
            <li>{this.props.menuProp.menuNav[0]}</li>
            <li>{this.props.menuProp.menuNav[1]}</li>
            <li>{this.props.menuProp.menuNav[2]}</li>
        </ul>
      </div>
    );
  }
}
