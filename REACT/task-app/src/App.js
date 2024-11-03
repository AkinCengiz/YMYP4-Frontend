//import { useState } from 'react';
//import { TaskContext} from "./context/Task"
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
// import CreateUser from './components/CreateUser';

function App() {


  
  // const createUser = (firstname,lastname,city) => {
  //   const newUser = [...users,{
  //     id:Math.floor(Math.random()*1000000),
  //     firstName : firstname,
  //     lastName : lastname,
  //     city : city
  //   }];
  //   setUsers(newUser);
  //   console.log(users);
  // }
  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler Listesi</h1>
      <TaskList />
      {/* <CreateUser createUser={createUser}/> */}
    </div>
  );
}
// USER
//Adı, soyadı,şehir kullanıcıya ait alanlar
//create user formu ile yeni bir kullanıcı oluşturan komponenti tasarlayın
export default App;
