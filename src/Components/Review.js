import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useInput } from "./hooks/useInput";

const Review = () => {
  const [submitting, setSubmitting] = useState(false);
  let { productId } = useParams();
  const [name, resetName] = useInput("");
  const [rating, resetRating] = useInput("");
  const [title, resetTitle] = useInput("");
  const [body, resetBody] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(name, rating, title, body);

    // simulate API submission with timeout
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
    // TODO: add api call to submit the gathered data to the database
    resetName();
    resetRating();
    resetTitle();
    resetBody();
  };

  return (
    <div className="container">
      <h1>New Review</h1>
      {submitting && <div>Submitting form...</div>}
      <form onSubmit={handleSubmit}>
        {/* TODO: add form validation */}
        <input {...name} type="text" placeholder="Name" />
        {/* TODO: replace with star component */}
        <input {...rating} type="text" placeholder="Rating out of 5" />
        <input {...title} type="text" placeholder="Heading" />
        <textarea {...body} type="textarea" placeholder="Comments" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Review;
