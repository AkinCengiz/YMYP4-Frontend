import React, { Component } from 'react';
import "./Content.css"

export default class Content extends Component {
  render() {
    return (
      <div className='Content'>
        <h3 className='Product-Title'>{this.props.products[0].name}</h3>
        <p className='Product-Text'>{this.props.products[0].description}</p>
        <p>Price : {this.props.products[0].price}</p>
        <h4>Özellikler</h4>
        <ul className='Detail-List'>
            {
                Object.entries(this.props.products[0].features).map(([key,value],index)=>{
                    return(
                        <li className='Detail-List-Item' key={index}>{key} : {value}</li>
                    )
                })
            }
            
        </ul>
      </div>
    )
  }
}
