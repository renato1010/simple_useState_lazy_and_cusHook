import { useState } from "react";

const useCounter = initialState => {
  const [count, setCount] = useState(initialState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [count, { increment, decrement }];
};

export default useCounter;
