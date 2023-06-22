import React, { useState } from 'react'

const IncrementDecrement = () => {

  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1)
  }

  const Decrement = () => {
    setCount(count - 1)
  }


  return (
    <div>
      <button onClick={Increment}>+</button>
      <h1>{count}</h1>
      <button onClick={Decrement}>-</button>
      <button onClick={() => setCount(count * 2)}>*</button>
    </div>
  )
}

export default IncrementDecrement