import React, { useState } from "react";

const Loginform = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };

  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("mydetails are:-", data);
  };
  return (
    <div>
      <label>Name</label>
      <input
        type="name"
        name="name"
        value={data.name}
        onChange={handleChange}
      ></input><br></br>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      ></input><br></br>
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      ></input><br></br>
      <label>Phone</label>
      <input
        type="phone"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      ></input><br></br>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Loginform;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Loginform = () => {
//   const initialValues = {
//     email: "",
//     password: "",
//   };
//   const [data, setData] = useState(initialValues);

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = () => {
//     console.log(data);
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <label>Email</label>
//         <input type="email" name="email" onChange={handleChange}></input>
//         <br></br>
//         <label>Password</label>
//         <input type="password" name="password" onChange={handleChange}></input>
//         <br></br>
//         <Link to={"/"}>
//           <button type="submit" onClick={handleSubmit}>
//             Login
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Loginform;
