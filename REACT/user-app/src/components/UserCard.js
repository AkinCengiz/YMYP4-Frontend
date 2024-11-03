import React, { useContext, useState } from "react";
import UserContext from "../contexts/User";
import UserUpdateCard from "./UserUpdateCard";

export default function UserCard({ user }) {
  const { deleteUser } = useContext(UserContext);
  const [isUpdate, setIsUpdate] = useState(false);
  const removeUser = () => {
    deleteUser(user.id);
  };
  const changePanel = () => {
    setIsUpdate(true);
  };
  return (
    <div className="user-card">
      {isUpdate ? (
        <UserUpdateCard user={user} setIsUpdate={setIsUpdate}/>
      ) : (
        <div>
          <h3>User Card</h3>
          <h4>Firstname</h4>
          <p>{user.firstname}</p>
          <h4>Lastname</h4>
          <p>{user.lastname}</p>
          <h4>City</h4>
          <p>{user.city}</p>
          <div className="user-button-group">
            <button
              id="btn-update"
              className="card-button"
              onClick={changePanel}
            >
              Güncelle
            </button>
            <button
              id="btn-delete"
              className="card-button"
              onClick={removeUser}
            >
              Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
