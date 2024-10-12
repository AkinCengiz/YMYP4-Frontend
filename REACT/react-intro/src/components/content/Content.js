//Class Component
import React, { Component } from "react";
import "./Content.css"

export default class Content extends Component{
    render(){
        return(
            <div className="content">
                <h2 className="content-title">Product Detail</h2>
                <p className="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <ul className="content-list">
                    <li className="content-list-item">Özellik 1</li>
                    <li className="content-list-item">Özellik 2</li>
                    <li className="content-list-item">Özellik 3</li>
                    <li className="content-list-item">Özellik 4</li>
                    <li className="content-list-item">Özellik 5</li>
                    <li className="content-list-item">Özellik 6</li>
                </ul>
                <h4 className="subtitle">Yorumlar</h4>
            </div>
        )
    }
}

