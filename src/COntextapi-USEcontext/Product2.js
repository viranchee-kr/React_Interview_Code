import React, { useContext } from 'react'
import { AppContext } from './Product'

const Product2 = () => {

    const name = useContext(AppContext)
    return (
        <div>
            {name}
        </div>
    )
}

export default Product2