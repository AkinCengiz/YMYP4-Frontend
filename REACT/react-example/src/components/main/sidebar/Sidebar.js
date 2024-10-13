import React, { Component } from 'react';
import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <h3 >Kategoriler</h3>
        <ul className='Sidebar-List'>
            {
                this.props.x.map((category,index) => {
                    return(
                        <li className="Sidebar-List-Item" key={index}>
                        {category}
                        </li>
                    );
                })
            }
        </ul>
      </div>
    )
  }
}
