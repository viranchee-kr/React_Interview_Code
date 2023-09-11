import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {post.map((value) => {
        return (
          <div style={{ height: "500px", width: "500px", border: "1px solid" }}>
            <img
              src={value.image}
              alt="image not show"
              style={{ height: "200px" }}
            ></img>
            <div> {value.category}</div>
            <div> {value.price}</div>
            <div> {value.id}</div>
            <div> {value.description}</div>
            <Link to={`/${value.id}`}>
           
              <button onClick={() => props.name(value)}>Show Data</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
