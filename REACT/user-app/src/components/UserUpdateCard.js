import React, { useContext, useState } from 'react'
import UserContext from '../contexts/User'

export default function UserUpdateCard({user,setIsUpdate}) {
  const { updateUser } = useContext(UserContext);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [city, setCity] = useState(user.city);

  const changeFirstname = (e) => {
    setFirstname(e.target.value)
  }
  const changeLastname = (e) => {
    setLastname(e.target.value);
  }
  const changeCity = (e) => {
    setCity(e.target.value);
  }
  const onModify = () => {
    setIsUpdate(false);
    updateUser(user.id,firstname,lastname,city);
  }
  return (
    <div className="user-update-card">
          <div className="user-updated">
            <h2 className="user-title">Update User</h2>
            <form className="user-update-form">
              <label className="user-update-label">Firstname</label>
              <input className="user-update-input" value={firstname} onChange={changeFirstname}/>
              <label className="user-update-label">Lastname</label>
              <input className="user-update-input" value={lastname} onChange={changeLastname}/>
              <label className="user-update-label">Açıklama</label>
              <input className="user-update-input" value={city} onChange={changeCity}/>
              <button className="user-button" onClick={onModify}>Update User</button>
            </form>
          </div>
        </div>
  )
}
