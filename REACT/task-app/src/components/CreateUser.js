import React, { useState } from 'react'

export default function CreateUser({createUser}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const changeLastName = (e) => {
        setLastName(e.target.value);
    }
    const changeCity = (e) =>{
        setCity(e.target.value);
    }
    const formSubmit = (e) => {
        e.preventDefault();
        createUser(firstName,lastName,city);
        
    }
  return (
    <div className="task-created">
      <h2 className="task-title">Kullanıcı Ekle</h2>
      <form className="task-form">
        <label className="task-label">First Name</label>
        <input className="task-input" value={firstName} onChange={changeFirstName} />
        <label className="task-label">Last Name</label>
        <input className="task-input" value={lastName} onChange={changeLastName} />
        <label className="task-label">City</label>
        <input className="task-input" value={city} onChange={changeCity} />
        <button className="task-button" onClick={formSubmit}>
          Görev Oluştur
        </button>
      </form>
    </div>
  )
}
