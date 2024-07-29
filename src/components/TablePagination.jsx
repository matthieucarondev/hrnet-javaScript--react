import React from "react";

const TablePagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li>
          <button
            onClick={(event) => handlePageChange(event, currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button "
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index + 1}>
            <button
              onClick={(event) => handlePageChange(event, index + 1)}
              className={
                currentPage === index + 1 ? "active" : "pagination-button"
              }
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={(event) => handlePageChange(event, currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button "
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TablePagination;
