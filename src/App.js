import React from 'react'
// import NewToDoList from './Components2/NewToDoList'
// import './App.css'
// import APIFetchDataTable from './Components/APIFetchDataTable'
//  import Registration from './Components/Registration'
// import Asyncawait from "./Components/Asyncawait"
// import Helloword from './Components/Helloword'
// import TodoLIst3 from './Components/TodoLIst3'
// import Toggle from './Components2/Toggle'
import CRUD from './Components2/CRUD'
// import NewToDoList from './Components2/NewToDoList'
// import SignUp from './Components2/SignUp'

const App = () => {
  return (
    <div>
      {/* <Registration /> */}
      {/* <APIFetchDataTable /> */}
      {/* <Asyncawait/> */}
      {/* <Helloword/> */}
      {/* <TodoLIst3 /> */}
      {/* <Toggle />  */}
      <CRUD/>
      {/* <NewToDoList/> */}
      {/* <SignUp /> */}
    </div>

  )
}

export default App



// // import React, { useState } from 'react'

// // const Registration = () => {
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");

// //     const [allentry, setAllentry] = useState([]);
// //     const submitForm = (e) => {
// //         e.preventDefault();
// //         const newEntry = { email: email, password: password };
// //         setAllentry([...allentry, newEntry])

// //     }
// //     return (
// //         <div>
// //             <form onSubmit={submitForm}>
// //                 <div>
// //                     <label htmlFor="email">Email</label>
// //                     <input type="email" name="email" autoComplete="off" value={email}
// //                         onChange={(e) => setEmail(e.target.value)}></input>
// //                 </div>
// //                 <div>
// //                     <label htmlFor="password">Password</label>
// //                     <input type="password" name="password" autoComplete="off" value={password}
// //                         onChange={(e) => setPassword(e.target.value)}></input>
// //                 </div>
// //                 <button type="submit">Login</button>
// //             </form>
// //             <div>
// //                 {allentry.map((item) => { 
// //                     return (
// //                         <div >
// //                             <p key={item}>{item.email} </p>
// //                             <p>{item.password}</p>

// //                         </div>
// //                     )
// //                 })}
// //             </div>
// //         </div>
// //     )
// // }

// // export default Registration


// import React from 'react';
// import './App.css';

// import  Routers  from './routes'

// import {setAuthToken} from './helpers/setAuthToken'

// function App() {

//   //check jwt token
//   const token = localStorage.getItem("token");
//   if (token) {
//       setAuthToken(token);
//   }

//   return (
//     <div className="App">
//       <Routers/>
//     </div>
//   );
// }

// export default App;