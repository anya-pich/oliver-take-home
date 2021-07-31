import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data)
    return (
      <div className="container">
        <h1>Products</h1>
        {data.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    );
  return null;
}

export default Products;
