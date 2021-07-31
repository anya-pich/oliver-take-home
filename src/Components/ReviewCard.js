import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="card">
      <h2>{props.headline}</h2>
      <h4>Rating: {props.star_rating}</h4>
      <h4>Author: {props.author}</h4>
      <p>{props.body}</p>
    </div>
  );
};

export default ReviewCard;
