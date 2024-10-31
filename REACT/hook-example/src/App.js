import React, { useState , useEffect } from "react"

import './App.css';
import Deneme from "./Deneme";

function App() {
  
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [numbers,setNumbers] = useState([1,2,3])
  const [user, setUser] = useState({name:"Akın",lastname:"Cengiz"})
  const [year, setYear] = useState(2024);
  const [users, setUsers] = useState([{name : "Akın", lastname : "Cengiz"}]);

  useEffect(() => {
    console.log("Her koşulda çalışır...");
  })
  useEffect(() => {
    console.log("İlk render edildiği zaman çalışır bir daha çalışmaz...");
  },[])

  useEffect(() => {
    console.log("Komponent ilk render edildiğinde çalışır veya count değişkeni her güncellendiğinde çalışır...")
  },[count])
  useEffect(() => {
    console.log("Komponent ilk render edildiğinde çalışır veya name değişkeni her güncellendiğinde çalışır...")
  },[name])
  useEffect(() => {
    console.log("Komponent ilk render edildiğinde çalışır veya count ya da name değişkeni her güncellendiğinde çalışır...")
  },[count, name])
  


  useEffect(()=> {
    console.log("3 değişken takip ediliyor....")
  },[count,name,numbers])

  
  return (
    <>
    <div className="App">
      <div>{count}</div>      
      <div>Name : {name}</div>
      <div>{numbers.length}. eleman : {numbers[numbers.length-1]}</div>
      <div>Name : {user.name} - Lastname : { user.lastname}</div>
      <div>User Name : {users[users.length-1].name} - User Lastname : {users[users.length-1].lastname}</div>
      <div>Year : {year}</div>
      <button onClick={() => setCount(count + 1)}>ARTTIR</button>
      <button onClick={() => setCount(count - 1)}>AZALT</button>
      <button onClick={() => setName("Cengiz")}>Değiştir</button>
      <button onClick={() => setYear(year + 1)}>Yıl Arttır</button>
      <button onClick={() => setNumbers(arr => [...numbers,count,count+1])}>Eleman Ekle</button>
      <button onClick={() => setUsers(arr => [...users,{name:"Name"+count, lastname:"LastName"+count}])}>UserList Ekle</button>
      <button onClick={() => setUser(obj => ({...obj,name:"Cengiz",lastname:"Akın"}))}>User Ekle</button>
    </div>
    <Deneme count={count} setCount={setCount} user={user} />
    <Deneme count={name} setName={setName} user={user} />
    </>
    
  );
}

export default App;
