//Function Component
import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <h2 className="side-title">Kategoriler</h2>
            <ul className="nav">
                <li className="nav-item">Bilgisayar</li>
                <li className="nav-item">Cep Telefonu</li>
                <li className="nav-item">Televizyon</li>
            </ul>
        </div>
    );
}

export default Sidebar;