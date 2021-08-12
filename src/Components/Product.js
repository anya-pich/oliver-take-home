import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import SortReview from "./SortReview";

const Product = () => {
  let { productId } = useParams();
  const [reviews, setReviews] = useState();
  const [productData, setProductData] = useState();
  const [sortOrder, setSortOrder] = useState("descending");

  // TODO: lift API calls out into a reusable custom hook
  useEffect(() => {
    fetch(`http://localhost:3004/products/${productId}/reviews`)
      .then((response) => response.json())
      .then(setReviews)
      .catch(console.error);
  }, [productId]);

  useEffect(() => {
    fetch(`http://localhost:3004/products/${productId}`)
      .then((response) => response.json())
      .then(setProductData)
      .catch(console.error);
  }, [productId]);

  const setSortOrder = (e) => {
    preventDefault(e);
    if (sortOrder == "ascending") {
      sortedReviews = reviews.sort();
    } else if (sortOrder == "descending") {
      sortedReviews = reviews.sort((a, b) => b > a);
    }
    setReviews(sortedReviews);
    console.log(e);
  };

  if (reviews && productData) {
    const averageRating =
      reviews.reduce((sum, each) => sum + each.star_rating, 0) / reviews.length;
    return (
      <div className="container">
        <h1>{productData.name}</h1>
        {/* TODO: replace with star rating component */}
        {averageRating ? (
          <h3>Average rating: {averageRating} / 5</h3>
        ) : (
          <h3>Unrated</h3>
        )}
        <Link to={`review/${productId}`}>Leave a review</Link>
        <SortReview setSortOrder={setSortOrder} />
        {reviews.map((review) => (
          <ReviewCard {...review} key={review.id} />
        ))}
      </div>
    );
  }
  return null;
};

export default Product;
