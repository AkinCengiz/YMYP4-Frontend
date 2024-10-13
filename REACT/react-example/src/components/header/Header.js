import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <Row>
          <Col xs="4">
            <div className="Header-Logo">
              <h1>YMYP4</h1>
            </div>
          </Col>
          <Col xs="8">
            <div className="Nav">
              <ul className="Nav-List">
                {
                    this.props.data.map((category, index) => {
                    return (
                        <li className="Nav-List-Item" key={index}>
                        {category}
                        </li>
                    );
                    })}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
