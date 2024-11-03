import React, { useState, useContext } from 'react'
import UserContext from "../contexts/User"

export default function CreateUser() {
  const {createUser} = useContext(UserContext)
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");


  const changeFirstname = (e) => {
    setFirstname(e.target.value);
  }
  const changeLastname = (e) => {
    setLastname(e.target.value);
  }
  const changeCity = (e) => {
    setCity(e.target.value);
  }
  const userSubmit = (e) => {
    e.preventDefault();
    createUser(firstname,lastname,city);
    setFirstname("");
    setLastname("");
    setCity("");

  }

  return (
    <div className="user-created">
      <h2 className="user-title">Create User</h2>
      <form className="user-form">
        <label className="user-label">Firstname</label>
        <input className="user-input" value={firstname} onChange={changeFirstname} />
        <label className="user-label">Lastname</label>
        <input className="user-input" value={lastname} onChange={changeLastname} />
        <label className="user-label">City</label>
        <input className="user-input" value={city} onChange={changeCity}/>
        <button className="user-button" onClick={userSubmit} >
          Create User
        </button>
      </form>
    </div>
  )
}
