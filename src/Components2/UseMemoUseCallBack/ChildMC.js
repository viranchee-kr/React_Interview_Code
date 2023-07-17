import React, { memo } from 'react'

const ChildMC = (handleChange,data) => {
  console.log("Childcomponent")
  return (
    <div>Child</div>

  )
}

export default memo(ChildMC)