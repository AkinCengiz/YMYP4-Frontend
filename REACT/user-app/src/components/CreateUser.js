import React from 'react'

export default function CreateUser() {
  return (
    <div className="user-created">
      <h2 className="user-title">Görev Ekle</h2>
      <form className="user-form">
        <label className="user-label">Firstname</label>
        <input className="user-input"  />
        <label className="user-label">Lastname</label>
        <input className="user-input"  />
        <label className="user-label">City</label>
        <input className="user-input"  />
        <button className="user-button" >
          Görev Oluştur
        </button>
      </form>
    </div>
  )
}
