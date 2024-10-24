import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Container, Row, Col } from "reactstrap";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import Employees from "./components/employees/Employees";
import Customers from "./components/customers/Customers";
import Cart from "./components/cart/Cart";

export default class App extends Component {
  state = {
    products : [],
    selectedCategory : "",
    cart : []
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
  addToCart = (product) => {
    //ID değeri 3 olan elemanı sepete eklemek istedim
    let newCart = this.state.cart;
    //Sepetimin içinde id değeri 3 olan eleman var mı diye kontrol ettim. Eğer varsa added değişkeni 3 id ye sahip ürüne eşitlenecek yoksa -1 değeri ile false dönmüş olacak
    let added = newCart.find(c => c.product.entityId === product.entityId);
    
    if(added){
      added.quantity += 1;
    }else{
      newCart.push({product : product, quantity : 1})
    }    
    this.setState({cart : newCart});
  }
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(x => x.product.entityId !== product.entityId);
    this.setState({cart : newCart});
  }
  render() {
    return (
      <Container>
        <Row>          
            <Categories changeCategory = {this.changeCategory} selectedCategory={this.state.selectedCategory} />
            <Router>            
            <Routes>
              <Route path="/" element={<Products addToCart={this.addToCart} products = {this.state.products} selectedCategory={this.state.selectedCategory} />}/>
              <Route path="employees/" element = {<Employees/>}/>
              <Route path="customers/" element = {<Customers/>}/>
            </Routes>
            </Router>          
   
          
            <Cart cart={this.state.cart} removeFromCart = {this.removeFromCart} />       
        </Row>
      </Container>
    );
  }
}
