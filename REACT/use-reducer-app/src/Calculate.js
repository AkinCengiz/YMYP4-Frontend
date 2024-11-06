import React, { useContext } from "react";
import { CalculateContext } from "./App";


export default function Calculate () {
    const context = useContext(CalculateContext);
  return (
    <div>
      <div id="counter">Counter : {context.count}</div>
      <button onClick={() => context.dispatch("decrement")}>Decrement</button>
      <button onClick={() => context.dispatch("increment")}>Increment</button>
      <button onClick={() => context.dispatch("reset")}>Reset</button>
      <button onClick={() => context.dispatch("decreeTwo")}>Decrement 2</button>
      <button onClick={() => context.dispatch("addedTwo")}>Increment 2</button>
      <button onClick={() => context.dispatch("divide")}>Divide 2</button>
      <button onClick={() => context.dispatch("multiply")}>Multiply 2</button>
    </div>
  );
}
