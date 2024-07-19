import React from 'react';

const Pagination = ({currentPage, totalPages, handlePageChange }) => {
    return (
        <div className="pagination">
              <button
                onClick={(event) => handlePageChange(event, currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-button "
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={(event) => handlePageChange(event, index + 1)}
                  className={
                    currentPage === index + 1 ? "active" : "pagination-button"
                  }
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={(event) => handlePageChange(event, currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-button "
              >
                Next
              </button>
            </div>
    );
};

export default Pagination;