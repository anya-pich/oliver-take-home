import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

const Product = () => {
  let { productId } = useParams();
  const [reviews, setReviews] = useState();
  const [productData, setProductData] = useState();

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

  if (reviews && productData) {
    const averageRating =
      reviews.reduce((sum, each) => sum + each.star_rating, 0) / reviews.length;
    return (
      <div className="container">
        <h1>{productData.name}</h1>
        <h3>Average rating: {averageRating} / 5</h3>
        {reviews.map((review) => (
          <Review {...review} key={review.id} />
        ))}
      </div>
    );
  }
  return null;
};

export default Product;
