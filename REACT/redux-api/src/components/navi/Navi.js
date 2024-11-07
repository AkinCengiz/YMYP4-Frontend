import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

export default class Navi extends Component {
  render() {
    return (
        <div>
        <Navbar>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
              <Nav>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
        </Navbar>
      </div>
    )
  }
}
