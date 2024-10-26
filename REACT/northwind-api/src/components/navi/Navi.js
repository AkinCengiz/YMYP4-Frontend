import React, { Component } from "react";
import { Link } from "react-router-dom"
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
  } from 'reactstrap';
  import "./Navi.css"
  
 
export default class Navi extends Component {
  render() {
    return (
        <div>
        <Navbar>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
        
            <Nav>
              <NavItem className="NavItem">
                <Link className="NavLink" to="/">Products</Link>
              </NavItem>
              <NavItem className="NavItem">
                <Link className="NavLink" to="customers/">Customers</Link>
              </NavItem>
              <NavItem className="NavItem">
                <Link className="NavLink" to="employees/">Employees</Link>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
        </Navbar>
      </div>
    );
  }
}