import { createContext, useState } from "react";

const UserContext = createContext();

function Provider({children}){
    const [users,setUsers] = useState([]);

    const createUser = (firstname, lastname, city) => {
        const newUsers = [...users,{
            id:Math.floor(Math.random()*1000000),
            firstname:firstname,
            lastname : lastname,
            city : city
        }];
        setUsers(newUsers);
    }

    const deleteUser = (id) => {
        const newUsers = users.filter(x => x.id !== id);
        setUsers(newUsers);
    }

    const updateUser = (id, firstname, lastname, city) => {
        const newUsers = users.map(user => {
            if(user.id === id){
                return {id : id, firstname : firstname, lastname : lastname, city : city}
            }
            return user
        });
        setUsers(newUsers);
    }

    const valueAndMethods = {
        users, createUser, deleteUser,updateUser
    }


    return(
        <UserContext.Provider value={valueAndMethods}>
            {children}
        </UserContext.Provider>
    )
}

export { Provider }
export default UserContext