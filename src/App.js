import React , {useState} from 'react';

function App() {
  const [state , setState] = useState({count: 5 , theme : 'Black'});
  const count = state.count;
  const theme = state.theme;

  function incrementCount() {
    // setCount(previousCount => previousCount + 1);
    setState(previousState => {
      return {count: previousState.count + 1 , theme};
    })
  }
  
  function decrementCount() {
    // setCount(previousCount => previousCount - 1);
    setState(previousState => {
      return {count: previousState.count - 1 , theme};
    })
  }

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={decrementCount}>-</button>
    </>
  )
}

export default App;
