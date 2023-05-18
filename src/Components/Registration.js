import React, { useState } from "react"



const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allentry, setallEntry] = useState([]);

    const SubmitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password };
        setallEntry([...allentry, newEntry]);
    }

    return (
        <div>
            <form onSubmit={SubmitForm} >
                <div>
                    <label htmlFor="email"> Email</label>
                    <input type="email" name="email" autoComplete="off" value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                </div>               <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" autoComplete="off" value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                {allentry.map((item) => {
                    return (<div>
                        <p key={item}>{item.email}</p>
                        <p>{item.password}</p>
                    </div>)
                })}

            </div>
        </div>
    )
}

export default Registration

// import React, { useState } from 'react'

// const Registration = () => {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [allentry, setAllentry] = useState([]);

//     const SubmitForm = (e) => {
//         e.preventDefault();
//         const newEntry = { email: email, password: password };
//         setAllentry([...allentry, newEntry])
//     }
//     return (

//         <div onSubmit={SubmitForm}>
//             <form>
//                 <div>
//                     <label htmlFor='email'>Email</label>
//                     <input type="email" name="email" value={email}
//                         onChange={(e) => { setEmail(e.target.value) }}></input>
//                 </div>
//                 <div>
//                     <label htmlFor='password'>Password</label>
//                     <input type="password" name="password" value={password}
//                         onChange={(e) => { setPassword(e.target.value) }}></input>
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//             <div>
//                 {allentry.map((item) => {
//                     return (
//                         <div key={item}>
//                             <p>{item.email}</p>
//                             <p >{item.password}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Registration

// import React, { useState } from 'react';

// const Registration = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [allentry, setAllentry] = useState([]);

//     const submitData = (e) => {
//         e.preventDefault()
//         const newEntry = { email: email, password: password }
//         setAllentry ([...allentry, newEntry])
//     }
//     return (
//         <div>
//             <form onSubmit={submitData}>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
//                 </div>
//                 <button type="submit" name="submit">Submit</button>
//             </form>
//             <div>
//                 {allentry.map((item) => {
//                     return (
//                         <div key={item}>
//                             <p>{item.email}</p>
//                             <p>{item.password}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div >
//     )
// }
// export default Registration;
