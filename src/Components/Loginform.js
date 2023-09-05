import React, { useState } from "react";

const Loginform = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <div className="container">
      <div className="row">
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange}></input>
        <br></br>
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange}></input>
        <br></br>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Loginform;
