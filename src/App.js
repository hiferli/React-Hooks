import React , {useState} from 'react';

function App() {
  const [count , setCount] = useState(0);
  const [color , setColor] = useState("Blue");
  
  function incrementCount() {
    setCount(previousCount => previousCount + 1);
    setColor('Green');
  }
  
  function decrementCount() {
    setCount(previousCount => previousCount - 1);
    setColor('Red');
    
  }

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={decrementCount}>-</button>
    </>
  )
}

export default App;
