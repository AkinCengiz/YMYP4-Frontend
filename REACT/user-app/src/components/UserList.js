import React,{ useContext } from "react";
import UserContext from "../contexts/User"
import UserCard from "./UserCard";

export default function UserList() {
  const {users} = useContext(UserContext);
  return (
    <div className="user-list">
      {
        users.map((user,index) => {
          return(
            <UserCard key={index} user={user} />
          )
        })
      }
    </div>
  );
}
