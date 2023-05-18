import { useState, useEffect } from 'react';


const API = "https://jsonplaceholder.typicode.com/users"


function Asyncawait() {

const [temp, setTemp] = useState(0);

    const FetchData = async (url) => {
        const result = await fetch(url);
        const data = await result.json()
        console.log(data);
    }
    useEffect(() => {
        FetchData(API)

    }, [])
}

export default Asyncawait