import React, { Component } from "react";
import Reservation from "./reservation/Reservation";
import Rooms from "./rooms/Rooms";
import About from "./about/About";
import ContactInfo from "./contactinfo/ContactInfo";
import OurHotels from "./ourhotels/OurHotels";
import NewsLetters from "./newsletters/NewsLetters";
import Contact from "./contact/Contact";
import PageImage from "../pageimage/PageImage";

export default class Content extends Component {
  render() {
    return (
      // <!-- Page content -->
      <div class="w3-content" style={{ maxWidth: "1532px" }}>
        <PageImage pageImage={this.props.pageImage} images={this.props.images} />
        <Reservation />
        <Rooms rooms = {this.props.rooms} roomTypes = {this.props.roomTypes} />
        <About />
        <ContactInfo contactInfo = {this.props.contactInfo} />
        <OurHotels />
        <NewsLetters />
        <Contact />
        {/* <!-- End page content --> */}
      </div>
    );
  }
}
