import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useInput } from "./hooks/useInput";

const Review = () => {
  let { productId } = useParams();
  const [name, resetName] = useInput("");
  const [rating, resetRating] = useInput("");
  const [title, resetTitle] = useInput("");
  const [body, resetBody] = useInput("");

  const submit = (event) => {
    event.preventDefault();
    console.log(name, rating, title, body);
    // TODO: add api call to submit the gathered data to the database
    resetName();
    resetRating();
    resetTitle();
    resetBody();
  };

  return (
    <div className="container">
      <h1>New Review</h1>
      <form onSubmit={submit}>
        {/* TODO: add form validation */}
        <input {...name} type="text" placeholder="Name" required />
        {/* TODO: replace with star component */}
        <input {...rating} type="text" placeholder="Rating out of 5" required />
        <input {...title} type="text" placeholder="Heading" />
        <textarea {...body} type="textarea" placeholder="Comments" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Review;
