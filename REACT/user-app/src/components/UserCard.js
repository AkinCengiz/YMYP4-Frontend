import React from "react";

export default function UserCard() {
  return (
    <div className="user-card">
      <div>
        <h3>Görev Kartı</h3>
        <h4>Göreviniz</h4>
        <p>a</p>
        <h4>Açıklama</h4>
        <p>a</p>
        <div className="user-button-group">
          <button id="btn-update" className="card-button">
            Güncelle
          </button>
          <button id="btn-delete" className="card-button">
            Sil
          </button>
        </div>
      </div>
    </div>
  );
}
