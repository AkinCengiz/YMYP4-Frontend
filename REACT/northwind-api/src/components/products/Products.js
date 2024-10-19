import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Products extends Component {
    
    
  render() {
    return (
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
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
