import React, { Component } from "react";
import Reservation from "./reservation/Reservation";
import Rooms from "./rooms/Rooms";
import About from "./about/About";
import ContactInfo from "./contactinfo/ContactInfo";
import OurHotels from "./ourhotels/OurHotels";
import NewsLetters from "./newsletters/NewsLetters";
import Contact from "./contact/Contact";

export default class Content extends Component {
  render() {
    return (
      // <!-- Page content -->
      <div class="w3-content" style={{ maxWidth: "1532px" }}>
        <Reservation />
        <Rooms />
        <About />
        <ContactInfo />
        <OurHotels />
        <NewsLetters />

        <Contact />

        {/* <!-- End page content --> */}
      </div>
    );
  }
}
