import React from "react";

const SortReview = ({ setSortOrder }) => {
  return (
    <form style={{ float: "right" }}>
      <label>Sort reviews: </label>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="descending">Descending</option>
        <option value="ascending">Ascending</option>
      </select>
    </form>
  );
};

export default SortReview;
