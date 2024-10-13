import React, { Component } from "react";
import Sidebar from "./sidebar/Sidebar";
import { Col, Row } from "reactstrap";
import Content from "./content/Content";

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Row>
          <Col xs="3">
            {/* <Sidebar x={this.props.categoryList} deneme="Akın" lastname="Cengiz" /> */}
            <Sidebar x={this.props.categoryList} />
          </Col>
          <Col xs="9">
            <Content products={this.props.products} />
          </Col>
        </Row>
      </div>
    );
  }
}
