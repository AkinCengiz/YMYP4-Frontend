import React, { Component } from "react";

export default class ContactInfo extends Component {

  render() {
    return (
      <div
        class="w3-row-padding w3-large w3-center"
        style={{ margin: "32px 0" }}
      >
        <div class="w3-third">
          <i class="fa fa-map-marker w3-text-red"></i> {this.props.contactInfo?.address}
        </div>
        <div class="w3-third">
          <i class="fa fa-phone w3-text-red"></i> Phone: {this.props.contactInfo?.phone}
        </div>
        <div class="w3-third">
          <i class="fa fa-envelope w3-text-red"></i> Email: {this.props.contactInfo?.email}
        </div>
      </div>
    );
  }
}
