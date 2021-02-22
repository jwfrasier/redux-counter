import React from 'react'
import {useState} from 'react'
import ReduxCounter from "./ReduxCounter";
import {useSelector, useDispatch} from 'react-redux'

// useSelector
// selects a portion of state (usually the state you want to modify) and gives you back only that piece of state

// useDispatch
// uses the dispatch method, to update state when you pass it an action object

function App() {
 const [count,setCount] = useState(0)
  return (
    <div>
      <h1>Local State Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count +1)}>Increment</button>
      <button onClick={() => setCount(count -1)}>Decrement</button>

      <ReduxCounter />
    </div>
  );
}

export default App;
