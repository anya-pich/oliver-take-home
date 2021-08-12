import React from "react";

const SortReview = (setSortOrder) => {
  return (
    <div>
      <form onSubmit={setSortOrder}>
        <label for="reviews">Sort reviews:</label>
        <select id="reviews" name="reviews">
          <option value="ascending">Ascending</option>
          <option value="descending" selected>
            Descending
          </option>
        </select>
        <input type="submit" value="Sort Reviews" />
      </form>
    </div>
  );
};

export default SortReview;
