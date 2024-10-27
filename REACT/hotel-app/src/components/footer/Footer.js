import React, { Component } from 'react'

export default class Footer extends Component {
    state = {
        socialAccounts : []
    }
    componentDidMount(){
        this.getSocialAccount();
    }
    getSocialAccount = () => {
        fetch("http://localhost:3000/socialAccounts")
        .then(response => response.json())
        .then(data => this.setState({socialAccounts : data}))
    }
  render() {
    return (
        <footer class="w3-padding-32 w3-black w3-center w3-margin-top">
        <h5>Find Us On</h5>
        <div class="w3-xlarge w3-padding-16">
            {
                this.state.socialAccounts.map(account => (
                    <i class={account.icon} style={{padding:"2px"}} key={account.id}> </i>
                ))
            }
          {/* <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-snapchat w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i> */}
        </div>
      </footer>
    )
  }
}
