import React, { Component } from 'react';
import "./Sidebar.css";

export default class Sidebar extends Component {
  state = {
    deneme : ""
  }
  //deneme = "";
  render() {
    return (
      <div className='Sidebar'>
        <p>{this.state.deneme}</p>
        <h3 >Kategoriler</h3>
        <ul className='Sidebar-List'>
            {
                this.props.x.map((category,index) => {
                    return(
                        <li onClick={ () => this.setState({deneme : "Kategori : "+category})} className="Sidebar-List-Item" key={index}>
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
