import React from "react";
import { useParams } from "react-router-dom";

const About = (props) => {
  const {price} = useParams();
  
  console.log("About page data", props.val.price);
  return (
    <div>
      <h1> This is About page{price} </h1>

      {props.val.price}
    </div>
  );
};

export default About;

