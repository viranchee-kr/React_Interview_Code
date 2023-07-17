import React from 'react'

const Product2 = (props) => {

    const Fname = "hvfxdyxsezetdy"
  return (
    <div>
        {/* <button onClick={props.name}>click</button> */}
        {props.name(Fname)}
    </div>
  )
}

export default Product2