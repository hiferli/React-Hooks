import React , {useState} from 'react';

function App() {
  const [count , setCount] = useState(5);

  function incrementCount() {
    setCount(previousCount => previousCount + 1);
  }
  
  function decrementCount() {
    setCount(previousCount => previousCount - 1);
  }

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
    </>
  )
}

export default App;
