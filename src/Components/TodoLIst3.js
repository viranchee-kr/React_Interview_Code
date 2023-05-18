// import React, { useState } from 'react'

// const TryalCRUD = () => {

//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [address, setAddress] = useState("")
//     const [items, setItems] = useState([])
//     const [active, setActive] = useState(null)
//     const [edit, setEdit] = useState(false)

//     const save_handal = (e) => {
//         e.preventDefault();
//         const copy = {
//             name: name,
//             email: email,
//             address: address
//         }
//         if (edit == true) {
//             let a = items
//             a[active] = copy
//             setItems(a)
//             setEdit(false)

//         } else if (copy !== " ") {
//             setItems((oldItems) => {
//                 return [...oldItems, copy]
//             })
//         }
//         setName("")
//         setEmail("")
//         setAddress("")
//     }

//     const handle_edit = (ind) => {
//         const elem = items[ind]
//         setName(elem.name)
//         setEmail(elem.email)
//         setAddress(elem.address)
//         setActive(ind)
//         setEdit(true)
//     }
//     const handle_delete = (id) => {
//         setItems((oldItems) => {
//             return oldItems.filter((arr, ind) => {
//                 return ind !== id
//             })
//         })
//     }
//     return (
//         <>
//             <div className='container'>

//                 <table className='table'>

//                     <tr scope="col">
//                         <th>#</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>address</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>

//                     <tbody>
//                         {
//                             items.map((val, ind) => {
//                                 return (
//                                     <tr key={ind} id={ind} scope="row">
//                                         <td>{ind + 1}</td>
//                                         <td>{val.name}</td>
//                                         <td>{val.email}</td>
//                                         <td>{val.address}</td>
//                                         <td><button onClick={() => { handle_edit(ind) }}>Edit</button></td>
//                                         <td>  <button onClick={() => { handle_delete(ind) }}>Delete</button></td>
//                                     </tr>
//                                 )
//                             })
//                         }

//                     </tbody>
//                 </table>
//                 <form className='form-control' style={{ backgroundColor: "lime" }}>
//                     <h1> CRUD APP </h1>
//                     <br></br><br></br>
//                     Name : <input type="text" placeholder='Enter name....' value={name} onChange={(e) => { setName(e.target.value) }} /> <br />
//                     Email : <input type="email" placeholder='Enter email....' value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br />
//                     Password : <input type="address" placeholder='Enter address....' value={address} onChange={(e) => { setAddress(e.target.value) }} /> <br />
//                     <button onClick={save_handal} style={{ backgroundColor: "blue" }}>{edit ? "Update" : "Save"}</button>
//                 </form>

//             </div>

//         </>
//     )
// }

// export default TryalCRUD


