import React, { Component } from "react";

export default class ContactInfo extends Component {
  render() {
    return (
      <div
        class="w3-row-padding w3-large w3-center"
        style={{ margin: "32px 0" }}
      >
        <div class="w3-third">
          <i class="fa fa-map-marker w3-text-red"></i> 423 Some adr, Chicago, US
        </div>
        <div class="w3-third">
          <i class="fa fa-phone w3-text-red"></i> Phone: +00 151515
        </div>
        <div class="w3-third">
          <i class="fa fa-envelope w3-text-red"></i> Email: mail@mail.com
        </div>
      </div>
    );
  }
}
