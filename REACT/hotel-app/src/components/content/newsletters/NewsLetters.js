import React, { Component } from 'react'

export default class NewsLetters extends Component {
  render() {
    return (
        <div class="w3-container w3-padding-32 w3-black w3-opacity w3-card w3-hover-opacity-off" style={{margin:"32px 0"}} >
        <h2>Get the best offers first!</h2>
        <p>Join our newsletter.</p>
        <label>E-mail</label>
        <input class="w3-input w3-border" type="text" placeholder="Your Email address"/>
        <button type="button" class="w3-button w3-red w3-margin-top">Subscribe</button>
      </div>
    )
  }
}
