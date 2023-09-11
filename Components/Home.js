import React from "react";
import { useParams } from "react-router-dom";

const Home = (props) => {
  const {id} = useParams();
  
  console.log("home page data", props.val.title);
  return (
    <div>
      <h1> This is home page{id} </h1>

      {props.val.id}
    </div>
  );
};

export default Home;
