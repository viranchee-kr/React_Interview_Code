import React from 'react'

const Childdd = (props) => {

    const name = "viranchee kumar"

    return (
        <div>
            <button onClick={() => props.name(name)}>Click Me</button>
        </div>
    )
}

export default Childdd