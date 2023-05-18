import React from "react";

const Helloword = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("welcome to react !!!");
  };
  return (
    <div>
      <button onClick={handleClick}>
        Click Me !
      </button>
    </div>
  );
};

export default Helloword;
