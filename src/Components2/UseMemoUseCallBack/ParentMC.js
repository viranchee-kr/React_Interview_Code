import React, { useCallback, useState } from 'react'
import ChildMC from './ChildMC'


// ek component parent banayenge and usme ek child pass karayenge as a component parent m ek button banayenge  aur jb hum button p click  karenge to child coponent bhi rerender hoga eske liye usememo lagadenge but parent m ek function banayenge an desko child m pass karayenge as a props to phir se components child wala rerender hone lagega eske liye usecallback hook lagayenge aur dependency empty array dalenge to render nhi hoga aur agar hum chAHE KI parent m koi aur function banaye aur esko click karne p child component phir se rerender5 ho to dependency m ye wala function daal  denge to child components phir se rerender hone lgega 

const ParentMC = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(10);

  const handleChange = useCallback(() => {
  }, [])
  return (
    <div>
      <ChildMC handleChange={handleChange } data={data}/>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{data}</h1>
      <button onClick={() => setData(data + 2)}>Increment2</button>
    </div>
  )
}

export default ParentMC
