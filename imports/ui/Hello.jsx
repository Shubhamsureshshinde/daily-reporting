import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

	 const decrement = () => {meteor 
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
			<h1>{counter}</h1>
      <button onClick={decrement}>Click Me</button>
    </div>
  );
};
