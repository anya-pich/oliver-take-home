import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <Link to={`product/${props.id}`}>See more..</Link>
    </div>
  );
};

export default ProductCard;
