import React, { Component } from "react";
import "./Rideside.css";
export default class Rightside extends Component {
  render() {
    return (
      <div>
        <div class="event-card p-3">
          <p class="card-sup-title">Upcoming Events:</p>
          <div class="img-box">
            <img src="./asset/images/forest.jpg" alt="" />
          </div>

          <p class="card-title">
            <strong>Holiday</strong>
          </p>
          <p class="card-text">Friday 15:00</p>
          <button class="btn btn-secondary btn-block" type="button">
            Info
          </button>
        </div>
        <div class="event-card p-3">
          <p class="card-sup-title">Friend Request</p>
          <div class="avatar-box row">
            <img
              src="./asset/images/avatar6.png"
              class="col-8 mx-auto"
              alt=""
            />
          </div>
          <p class="card-text">Jane Doe</p>
          <div class="btn-group">
            <button class="btn btn-success btn-block" type="button">
              <i class="fa fa-check"></i>
            </button>
            <button class="btn btn-danger btn-block" type="button">
              <i class="fa fa-remove"></i>
            </button>
          </div>
        </div>
        <div class="event-card p-3">
          <p style={{ marginBottom: 0 }}>ADS</p>
        </div>
        <div class="event-card p-3">
          <p style={{ marginBottom: 0 }}>
            <i class="fa fa-bug w3-xxlarge"></i>
          </p>
        </div>
      </div>
    );
  }
}
