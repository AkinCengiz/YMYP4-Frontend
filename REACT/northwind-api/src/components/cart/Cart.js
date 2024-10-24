import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  CardLink,
  Badge,
  Col
} from "reactstrap";

export default class Cart extends Component {
  render() {
    return (
      <Col xs="3">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Sepetim</CardTitle>
            <CardText>Sepetinizdeki ürünler aşağıda listelenmektedir.</CardText>
          </CardBody>
          <ListGroup flush>
            {this.props.cart.map((item) => (
              <ListGroupItem key={item.product.entityId}>
                {item.product.productName} 
                <Badge style={{marginLeft:"5px", cursor:"pointer"}} color="primary"> {item.quantity}</Badge>
                <Badge onClick={() => this.props.removeFromCart(item.product)} style={{marginLeft:"5px", cursor:"pointer"}} color="danger"> X </Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
          <CardBody>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Card Link</CardLink>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
