import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div class="w3-container" id="contact">
        <h2>Contact</h2>
        <p>If you have any questions, do not hesitate to ask them.</p>
        <i class="fa fa-map-marker w3-text-red" style={{width:"30px"}}></i> Chicago, US<br/>
        <i class="fa fa-phone w3-text-red" style={{width:"30px"}}></i> Phone: +00 151515<br/>
        <i class="fa fa-envelope w3-text-red" style={{width:"30px"}} > </i> Email: mail@mail.com<br/>
        <form action="/action_page.php" target="_blank">
          <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"/></p>
          <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email"/></p>
          <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message"/></p>
          <p><button class="w3-button w3-black w3-padding-large" type="submit">SEND MESSAGE</button></p>
        </form>
      </div>
    )
  }
}
