import React, { useState } from "react";

const CRUD = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [items, setItems] = useState([]);
  const [ToggleBtn, setToggleBtn] = useState(false);
  const [itemId, setItemId] = useState();

  const addSubmit = (e) => {
    e.preventDefault();
    const copy = {
      name: name,
      email: email,
      dob: dob,
    };
   
    if (ToggleBtn) {
      const newList = items.map((todo) => {
        if (todo.id === itemId) {
          return {...todo, copy} ;
        }
        return todo;
      });
      setItems(newList);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: name,
        email: email,
        dob: dob,
      };
      setItems([...items, allInputData]);
    }
    setName("");
    setEmail("");
    setDob("");
  };

  const deleteSubmit = (id) => {
    const deleted = items.filter((val) => {
      return id !== val.id;
    });
    setItems(deleted);
  };

  const editSubmit = (id) => {
    const editItem = items.find((crud) => {
      return crud.id === id;
    });
    setName(editItem.name);
    setEmail(editItem.email);
    setDob(editItem.dob);
    setToggleBtn(true);
    setItemId(id);
  };

  return (
    <>
      <div
        className="container"
        style={{
          border: "1px solid black",
        }}
      >
        <form>
          <h2
            style={{
              borderBottom: "1px solid red",
              width: "280px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Registraction Form
          </h2>
          <div className="main" style={{ paddingTop: "40px" }}>
            Name: Title{" "}
            <select>
              <option>Mr</option>
              <option>Mrs</option>
            </select>
            <input
              type="text"
              style={{ width: "80%" }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          Gender:{" "}
          <input type="radio" name="radio" style={{ margin: "10px" }}></input>
          Male
          <input
            type="radio"
            name="radio"
            style={{ marginLeft: "60px", margin: "10px", marginTop: "30px" }}
          ></input>
          Female
          <div style={{ marginTop: "10px" }}>
            Email:
            <input
              type="email"
              name="email"
              style={{ marginLeft: "30px" }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div style={{ marginTop: "30px" }}>
            DOB:
            <input
              type="date"
              name="date"
              style={{ marginLeft: "30px" }}
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
            ></input>
          </div>
          <div style={{ marginTop: "20px" }}>Permanent Address</div>
          <div style={{ marginTop: "30px" }}>
            Address:
            <textarea
              name="textarea"
              style={{ marginLeft: "30px", width: "300px" }}
            ></textarea>
          </div>
          <div style={{ marginTop: "30px" }}>
            Upload Your Photo:
            <input
              type="file"
              name="file"
              style={{ marginLeft: "30px", width: "300px" }}
            ></input>
          </div>
          <div style={{ marginTop: "30px" }}>
            <button
              style={{ marginLeft: "500px", width: "150px" }}
              onClick={addSubmit}
            >
              {ToggleBtn ? "Edit" : "Insert"}
            </button>
          </div>
          <br />
        </form>

        <table className="table">
          <thead>
            <tr scope="col">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Action</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((val, id) => {
              return (
                <tr key={id} scope="row">
                  <td>{id + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.dob}</td>
                  <td>
                    <button
                      onClick={() => {
                        editSubmit(val.id);
                      }}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        deleteSubmit(val.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CRUD;
