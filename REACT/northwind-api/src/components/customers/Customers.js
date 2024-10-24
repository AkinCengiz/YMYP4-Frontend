import React, { Component } from "react";
import {Col} from "reactstrap"
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "./Customers.css";

export default class Customers extends Component {
  state = {
    customers: [],
  };
  componentDidMount() {
    this.getCustomers();
  }
  getCustomers = () => {
    fetch("http://localhost:3000/customer")
      .then((response) => response.json())
      .then((data) => this.setState({ customers: data }));
  };
  render() {
    return (
      <Col xs="7">
      <h3>Customers</h3>
      <div className="Customers">
        
        {this.state.customers.map((customer) => {
          return (
            <div className="Card-Border">
              <Card>
              <img alt="Card" src={"https://picsum.photos/200/100?random="+customer.entityId} />
              <CardBody>
                <CardTitle tag="h5">{customer.companyName}</CardTitle>
                <CardText>{customer.contactName}</CardText>
                <CardText>{customer.contactTitle}</CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>{customer.address}</ListGroupItem>
                <ListGroupItem>{customer.city}</ListGroupItem>
                <ListGroupItem>{customer.country}</ListGroupItem>
              </ListGroup>
              <CardBody>
                <CardText>{customer.phone}</CardText>
                <CardText>{customer.fax}</CardText>
              </CardBody>
            </Card>
            </div>
            
          );
        })}
        </div>
      </Col>
    );
  }
}
