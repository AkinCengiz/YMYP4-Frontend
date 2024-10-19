import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import Employees from "./components/employees/Employees";
import Customers from "./components/customers/Customers";

export default class App extends Component {
  state = {
    products : [],
    selectedCategory : ""
  }
  changeCategory = (category) => {
    this.setState({selectedCategory : category.categoryName});
    this.getProducts(category.entityId);
  }
  
  componentDidMount(){
    this.getProducts();
}

  getProducts = (categoryId) => {
    let productUrl = "http://localhost:3000/product";
    if(categoryId){
      productUrl += "?categoryId="+ categoryId;
    }
    fetch(productUrl)
    .then(response => response.json())
    .then(data => this.setState({products : data}));
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <Categories changeCategory = {this.changeCategory} selectedCategory={this.state.selectedCategory} />
          </Col>
          <Col xs="9">
            <Products products = {this.state.products} selectedCategory={this.state.selectedCategory} />
          </Col>
        </Row>
        <Row>
          <Employees/>
        </Row>
        <Row>
          <Customers/>
        </Row>
      </Container>
    );
  }
}
