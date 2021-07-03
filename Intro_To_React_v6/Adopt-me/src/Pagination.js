import { useState } from "react";

const Pagination = ({ onClick, currentPage }) => {
  return (
    <div className="pagination">
      <button onClick={onClick} id="prev">
        Previous
      </button>
      <span>Page: {currentPage}</span>
      <button onClick={onClick} id="next">
        Next
      </button>
    </div>
  );
};

export default Pagination;
