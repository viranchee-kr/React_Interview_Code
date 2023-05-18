import React, { useState } from 'react'

const SignUp = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const SignUp =  async() => {
        let item = { name, password, email };
        let result = await fetch("https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            })
        result = await result.json();
        console.warn(result)
    }
    return (
        <div className='col-sm-4 offset-sm-3'>
            <h1 >User SignUp</h1>
            <input className='form-control' type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <br />
            <input className='form-control' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <br />
            <input className='form-control' type='email' value={email}  placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
            <br />
            <button className='btn btn-primary offset-sm-4' onClick={SignUp}>SignUp</button>
        </div>
    )
}

export default SignUp