import React, { Component } from 'react';
import "./Footer.css"

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = []
    }
  render() {
    return (
      <div className='Footer'>
        <h2 className='Footer-Title'>{this.props.footerProp.logo}</h2>
        <p className='Copyright'>{this.props.footerProp.copyright}</p>
        <ul className='Footer-List'>
            <li>Şehir   : {this.props.footerProp.city}</li>
            <li>İlçe    : {this.props.footerProp.town}</li>
            <li>Telefon : {this.props.footerProp.phone}</li>
            <li>Email   : {this.props.footerProp.email}</li>
        </ul>
      </div>
    )
  }
}
