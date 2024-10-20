import React, { Component } from "react";
import "./Leftside.css";

export default class Leftside extends Component {
  render() {
    return (
      <div>
        <div id="profile" class="card shadow-lg mb-3">
          <h1 class="card-title display-3 my-2">My Profile</h1>
          <div class="card-image">
            <img
              src="https://i.pravatar.cc/150?u=fake@pravatar.com"
              class="card-img-top"
              alt="profile-img"
            />
          </div>
          <div class="card-list">
            <p>
              <i class="fa-solid fa-pen"></i> Designer, UI
            </p>
            <p>
              <i class="fa-solid fa-house"></i> London, UK
            </p>
            <p>
              <i class="fa-solid fa-cake-candles"></i> April 1, 1988
            </p>
          </div>
        </div>
        <div class="my-section p-1 mb-3">
          <button class="btn btn-secondary btn-block">
            <i class="fa-regular fa-circle fa-fw "></i> <p>My Groups</p>
          </button>
          <button class="btn btn-secondary btn-block">
            <i class="fa-solid fa-calendar-days fa-fw"></i> My Events
          </button>
          <button class="btn btn-secondary btn-block">
            <i class="fa-solid fa-users fa-fw"></i> My Photos
          </button>
        </div>
        <div class="tags p-1 text-light">
          <span class="w3-tag w3-small bg-secondary p-1 my-1">News</span>
          <span class="w3-tag w3-small bg-secondary p-1 my-1">W3Scholls</span>
          <span class="w3-tag w3-small bg-secondary p-1 my-1">Labels</span>
          <span class="w3-tag w3-small bg-secondary p-1 my-1">Games</span>
          <span class="w3-tag w3-small bg-secondary p-1 my-1">Friends</span>
          <span class="w3-tag w3-small bg-secondary p-1 my-1">Food</span>
          <span class="w3-tag w3-small bg-secondary p-1 my-1">Desing</span>
        </div>
        <div class="alert-box bg-secondary p-1">
          <p id="alert-title" class="m-2">
            Hey!
          </p>
          <p id="alert-text" class="m-2">
            People are looking at your profile. Find out who.
          </p>
          <span class="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
      </div>
    );
  }
}
