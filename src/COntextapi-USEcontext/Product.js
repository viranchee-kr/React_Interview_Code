import React, { createContext } from 'react'
import Product2 from './Product2';


export const AppContext = createContext("");
const Product = () => {
    return (
        <AppContext.Provider value={"viranchee"}>
            <Product2 />
        </AppContext.Provider>
    )
}
export  default  Product 