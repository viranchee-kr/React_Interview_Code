
import React, { useReducer } from 'react'



const initialstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment": {
      return state + 1
    }
    case "Decrement": {
      return state - 1
    }
    default: {
      return state
    }

  }

}

const UseReducer = () => {


  const [count, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
      <button onClick={() => { dispatch("Increment") }}> Increment</button>
      <h1>{count}</h1>
      <button onClick={() => { dispatch("Decrement") }}>Decrement</button>
    </div>
  )
}

export default UseReducer