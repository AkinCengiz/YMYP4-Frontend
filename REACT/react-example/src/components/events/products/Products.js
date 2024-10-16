import React, { Component } from "react";
import "./Products.css";

export default class Products extends Component {
  render() {
    return (
      <div className="Products">
        {this.props.productList.map((product) => {
          if (this.props.selectedCategory === "") {
            return (
              <div className="Box">
                <div className="Product">
                <img src={`https://picsum.photos/200/300?random=${product.id}`} alt={`${product.name}`}></img>
                  <p className="Product-Name">Ürün Adı : {product.name}</p>
                  <p className="Price">Fiyatı : {product.unitPrice}</p>
                  <p className="Stock">Stok : {product.unitsInStock}</p>
                  <p className="Quantity">İçerik : {product.quantityPerUnit}</p>
                </div>
              </div>
            );
          } else if (
            parseInt(this.props.selectedCategory) === product.categoryId
          )
            return (
              <div className="Box">
                <div className="Product">
                  <img src={`https://picsum.photos/200/300?random=${product.id}`} alt={`${product.name}`}></img>
                  <p className="Product-Name">Ürün Adı : {product.name}</p>
                  <p className="Price">Fiyatı : {product.unitPrice}</p>
                  <p className="Stock">Stok : {product.unitsInStock}</p>
                  <p className="Quantity">İçerik : {product.quantityPerUnit}</p>
                </div>
              </div>
            );
          return null;
        })}
      </div>
    );
  }
}
// id: 5,
//
//         quantityPerUnit: "36 boxes",
//         unitPrice: 21.35,
//         unitsInStock: 0,
//         unitsOnOrder: 0,
//         reorderLevel: 0,
//         discontinued: true,
//         name: "Chef Anton's Gumbo Mix",
