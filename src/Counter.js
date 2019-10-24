import React, { useState } from "react";

const Counter = ({ initVal = 0 }) => {
  const [count, setCount] = useState(initVal);

  const increment = () => setCount(prevState => prevState + 1);
  const decrement = () => setCount(prevState => prevState - 1);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
