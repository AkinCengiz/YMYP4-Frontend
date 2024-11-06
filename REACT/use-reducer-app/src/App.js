import './App.css';
import React,{ useReducer } from "react"
import Calculate from './Calculate';

export const CalculateContext = React.createContext();
const initialValue = 0;

const reducer = (state,action) => {
  switch(action){
    case "increment" :
      return state + 1;
    case "decrement" : 
      return state - 1;
    case "reset" :
      return initialValue;
    case "addedTwo":
      return state + 2;
    case "decreeTwo" : 
      return state - 2;
    case "divide":
      return state / 2;
    case "multiply":
      return state * 2;
    default :
      return state;
  }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialValue);

  return (
    <div className="App">
      <CalculateContext.Provider value={{count:count, dispatch:dispatch}}>
          <Calculate />
      </CalculateContext.Provider>
    </div>
  );
}

export default App;
