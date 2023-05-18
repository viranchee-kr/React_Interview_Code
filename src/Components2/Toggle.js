// import React, { useState } from 'react'

// const Toggle = () => {
// const [name, setName] = useState(false);

// const handleClick = ()=>{
//     if (name=== true){
//         setName(false)
//     }
//     if(name===false){
//         setName(true)
//     }
// }

//   return (
//     <>
//    {
//     name ? <h1>hiiii</h1>:<h1>byyy</h1>
//    }
//     <button onClick={handleClick}>click</button>
    
//     </>
//   )
// }

// export default Toggle

import React, { useState } from 'react'

const Toggle = () => {

  const [count,setCount] = useState("hiiii");
  const setSubmit = ()=>{
    return setCount("byyy")
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={setSubmit}>click</button>
    </div>
  )
}

export default Toggle








