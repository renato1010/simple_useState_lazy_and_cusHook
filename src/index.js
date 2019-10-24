import React, { useState } from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import useCounter from "./useCounter";

import "./styles.css";

function App() {
  // useState lazy initial state
  const [greeting, setGreeting] = useState(() => "Hello World");
  // use custom Hook
  const [customCounter, { increment, decrement }] = useCounter(0);
  return (
    <div className="App">
      {/* functional updates */}
      <h1 onClick={() => setGreeting(prevState => prevState + " Cool!")}>
        {greeting}
      </h1>
      <h2>Check out my cool kid counter</h2>
      <Counter initVal={35} />
      <h2 style={{ color: "crimson" }}>using my useCounter custom Hook </h2>
      <div>
        <h3>{customCounter}</h3>
        <button onClick={increment}>Incrment(cusHook)</button>
        <button onClick={decrement}>Decrement(cusHook)</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
