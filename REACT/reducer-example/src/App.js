import './App.css';
import React, { useReducer, useState } from "react";

const added = (number) => {
  return {
    type : "added",
    payload : number
  }
}
const decrement = (number) => {
  return{
    type : "decrement",
    payload : number
  }
}
const divide = (number) => {
  return{
    type: "divide",
    payload : number
  }
}
const multiply = (number) => {
  return {
    type : "multiply",
    payload : number
  }
}



const reducer = (state,action) => {
  switch(action.type){
    case "added":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    case "divide" : 
      return state / action.payload;
    case "multiply":
      return state * action.payload;
    default:
      return state;
  }
}

// const addUser = (user) => {
//   return{
//     type : "createUser",
//     payload : user
//   }
// }

// const userReduce = (state,action) => {
//   switch(action.type){
//     case "createUser":
//       return action.payload;
//     default :
//       return state;
//   }
// }



function App() {
 
  const [numberOne,setNumberOne] = useState(1);
  // const [numberTwo, setNumberTwo] = useState(0);
  const [result,dispatch] = useReducer(reducer,numberOne);
  // const [user, setUser] = useState({id:1,name:"Akın"});

  // const [users,userActions] = useReducer(userReduce,[]);
  const changeNumberOne = (e) => {
    setNumberOne(Number(e.target.value));
  }
  
  // cocnst changeNumberTwo = (e) => {
  //   setNumberTwo(Number(e.target.value));
  // }
  return (
    <div className="App">
      <p>Result : {result}</p>
      <input type='number' placeholder='Number One' onChange={changeNumberOne}/>
      {/* <input type='number'placeholder='Number Two' onChange={changeNumberTwo} /> */}
      <button onClick={() => dispatch(added(numberOne))}>ADDED</button>
      <button onClick={() => dispatch(decrement(numberOne))}>DECREMENT</button>
      <button onClick={() => dispatch(divide(numberOne))}>DIVIDE</button>
      <button onClick={() => dispatch(multiply(numberOne))}>MULTIPLY</button>
      {/* <button onClick={() => dispatch(addUser(user))}>AddUser</button>
      {console.log(users)}; */}
    </div>
  );
}

export default App;
