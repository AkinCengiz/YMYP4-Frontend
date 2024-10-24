import React, { Component } from "react";
import { Table, Button, Col } from "reactstrap";

export default class Products extends Component {
  render() {
    return (
      <Col xs="7">
        <div className="Products">
          <h3>Products {this.props.selectedCategory}</h3>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Supplier</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => {
                return (
                  <tr>
                    <th scope="row">{product.entityId}</th>
                    <td>{product.productName}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.supplierId}</td>
                    <td>{product.categoryId}</td>
                    <td>
                      <Button
                        color="primary"
                        onClick={() => this.props.addToCart(product)}
                      >
                        Add
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Col>
    );
  }
}
