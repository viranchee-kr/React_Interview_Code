import React, { useRef, useState } from 'react'
import { useEffect } from 'react';

const UseRef = () => {
    const [myData, setMyData] = useState();
    // const [count, setCount] = useState(0);
    const count = useRef(0)
    useEffect(() => {
        // setCount(count + 1)
        count.current = count.current + 1
    })
    return (
        <div>
            {/* <h1>render {count} times </h1> */}
            <input type='text ' value={myData} onChange={(e) => setMyData(e.target.value)}></input>
            <h1>render {count.current} times</h1>
        </div>
    )
}

export default UseRef