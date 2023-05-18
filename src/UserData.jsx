import React from "react";
import "./Components/APIFetchDataTable.css"

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curElem) => {
        const { id, name, email  } = curElem;
        const { street, city  } = curElem.address;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{street}, {city}</td>
          </tr>
        );
      })}
    </>
  );
};
export default UserData;
