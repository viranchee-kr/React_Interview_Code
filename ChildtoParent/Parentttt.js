import React from 'react'
import Childdd from './Childdd'


const Parentttt = () => {

    const Parent = (name) => {
        alert(name)
    }
    return (
        <div>
            <Childdd name = {Parent} />
        </div>
    )
}

export default Parentttt