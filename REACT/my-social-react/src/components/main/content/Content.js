import React, { Component } from "react";
import "./Content.css";

export default class Content extends Component {
  render() {
    return (
      <div>
        <div class="post-box">
          <h6 class="post-title">Social Media template by w3.css</h6>
          <p contenteditable="true" class="post-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
            nulla.
          </p>
          <button class="btn btn-secondary">
            <i class="fa-solid fa-pen me-2"></i>Post
          </button>
        </div>
        <div class="post-box">
          <div class="post-header">
            <img class="avatar" src="./asset/images/avatar2.png" alt="" />
            <h4 class="post-title">John Doe</h4>
            <span>1 min</span>
          </div>
          <hr />
          <p class="post-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="post-images px-2 row">
            <div class="img-box col-6">
              <img class="" src="./asset/images/lights.jpg" alt="" />
            </div>
            <div class="img-box col-6">
              <img src="./asset/images/nature.jpg" alt="" />
            </div>
          </div>
          <button class="btn btn-secondary my-1">
            <i class="fa fa-thumbs-up ms-0 me-2"></i>Like
          </button>
          <button class="btn btn-secondary my-1">
            <i class="fa fa-comment me-2"></i>Comment
          </button>
        </div>
        <div class="post-box">
          <div class="post-header">
            <img class="avatar" src="./asset/images/avatar5.png" alt="" />
            <h4 class="post-title">Jane Doe</h4>
            <span>1 min</span>
          </div>
          <hr />
          <p class="post-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button class="btn btn-secondary my-1">
            <i class="fa fa-thumbs-up ms-0 me-2"></i>Like
          </button>
          <button class="btn btn-secondary my-1">
            <i class="fa fa-comment me-2"></i>Comment
          </button>
        </div>
        <div class="post-box">
          <div class="post-header">
            <img class="avatar" src="./asset/images/avatar6.png" alt="" />
            <h4 class="post-title">Angie Jane</h4>
            <span>1 min</span>
          </div>
          <hr />
          <p class="post-description">Have you seen this?</p>
          <div class="post-images px-2 row">
            <div class="img-box col-12">
              <img src="./asset/images/nature.jpg" alt="" />
            </div>
          </div>
          <p class="post-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button class="btn btn-secondary my-1">
            <i class="fa fa-thumbs-up ms-0 me-2"></i>Like
          </button>
          <button class="btn btn-secondary my-1">
            <i class="fa fa-comment me-2"></i>Comment
          </button>
        </div>
      </div>
    );
  }
}
