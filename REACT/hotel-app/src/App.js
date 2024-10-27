import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Menu from './components/menu/Menu';
import PageImage from './components/pageimage/PageImage';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { Routes, Route } from "react-router-dom";
import RoomList from './pages/RoomList';
import RoomDetail from './pages/RoomDetail';

export default class App extends Component {
  state = {
    images : [],
    pageImage : "",
    contactInfo : null,
    rooms : [],
    roomTypes : []
  }
  componentDidMount(){
    this.getImages();
    this.getContact();
    this.getRooms();
    this.getRoomTypes();
  }
  getImages = () => {
    fetch("http://localhost:3000/images")
    .then(res => res.json())
    .then(data => this.setState({images : data}));
  }

  getRooms = () => {
    fetch("http://localhost:3000/rooms")
    .then(res => res.json())
    .then(data => this.setState({rooms : data}));
  }

  getRoomTypes = () => {
    fetch("http://localhost:3000/roomTypes")
    .then(res => res.json())
    .then(data => this.setState({roomTypes : data}));
  }

  getContact = () => {
    fetch("http://localhost:3000/contact")
    .then(res => res.json())
    .then(data => this.setState({contactInfo : data}));
  }
  render() {
    return (
      <div>
        <Menu/>
        <Container>
          <Row>
            {/* <PageImage pageImage={this.state.pageImage} images={this.state.images} /> */}
            <Routes>
              <Route path="/" element={<Content contactInfo={this.state.contactInfo} rooms = {this.state.rooms} roomTypes = {this.state.roomTypes} pageImage={this.state.pageImage} images={this.state.images}/>}/>
              <Route path='rooms/' element={<RoomList rooms = {this.state.rooms} roomTypes = {this.state.roomTypes}/>}/>
              <Route path='roomdetail/' element={<RoomDetail />} />
            </Routes>            
          </Row>
        </Container>
        <Footer/>
      </div>
      
    )
  }
}
