import React, { Component } from "react";

export default class Reservation extends Component {
  render() {
    return (
      <>
        <div class="w3-container w3-margin-top" id="rooms">
          <h3>Rooms</h3>
          <p>
            Make yourself at home is our slogan. We offer the best beds in the
            industry. Sleep well and rest well.
          </p>
        </div>

        <div class="w3-row-padding">
          <div class="w3-col m3">
            <label>
              <i class="fa fa-calendar-o"></i> Check In
            </label>
            <input
              class="w3-input w3-border"
              type="text"
              placeholder="DD MM YYYY"
            />
          </div>
          <div class="w3-col m3">
            <label>
              <i class="fa fa-calendar-o"></i> Check Out
            </label>
            <input
              class="w3-input w3-border"
              type="text"
              placeholder="DD MM YYYY"
            />
          </div>
          <div class="w3-col m2">
            <label>
              <i class="fa fa-male"></i> Adults
            </label>
            <input class="w3-input w3-border" type="number" placeholder="1" />
          </div>
          <div class="w3-col m2">
            <label>
              <i class="fa fa-child"></i> Kids
            </label>
            <input class="w3-input w3-border" type="number" placeholder="0" />
          </div>
          <div class="w3-col m2">
            <label>
              <i class="fa fa-search"></i> Search
            </label>
            <button class="w3-button w3-block w3-black">Search</button>
          </div>
        </div>
      </>
    );
  }
}
