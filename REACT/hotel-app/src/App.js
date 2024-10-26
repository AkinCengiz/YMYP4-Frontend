import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Menu from './components/menu/Menu';
import PageImage from './components/pageimage/PageImage';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

export default class App extends Component {
  state = {
    images : [],
    pageImage : ""
  }
  componentDidMount(){
    this.getImages();
  }
  getImages = () => {
    fetch("http://localhost:3000/images")
    .then(res => res.json())
    .then(data => this.setState({images : data}))
  }
  render() {
    return (
      <div>
        <Menu/>
        <Container>
          <Row>
            <PageImage pageImage={this.state.pageImage} images={this.state.images}/>
            <Content/>
          </Row>
        </Container>
        <Footer/>
      </div>
      
    )
  }
}
