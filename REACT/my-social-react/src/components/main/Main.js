import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Main.css";
import Leftside from "./leftside/Leftside";
import Content from "./content/Content";
import Rightside from "./rightside/Rightside";

export default class Main extends Component {
  render() {
    return (
      <Row>
        <Col xs="3">
          <Leftside/>
        </Col>
        <Col xs="7">
          <Content/>
        </Col>
        <Col xs="2">
          <Rightside/>
        </Col>
      </Row>
    );
  }
}
