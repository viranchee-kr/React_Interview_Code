import React, { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);

    const UpdateCount = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h1>count {count}</h1>
            <button onClick={UpdateCount}>Update</button>
        </div>
    )
}

export default UseState