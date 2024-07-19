import React from 'react';

const TableOptions = ({ employeesPerPage,
    handleEmployeesPerPageChange,
    searchTerm,
    handleSearchChange,
    totalEmployees}) => {
    return (
        <div className="table-options">
        {totalEmployees > 5  &&
       
          <div className="options">
            <label htmlFor="employeesPerPage">
              show
              <select
                id="employeesPerPage"
                value={employeesPerPage}
                onChange={handleEmployeesPerPageChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
              entries
            </label>
          </div>
        
          } 
            <div className="search-bar ">
            <label htmlFor="search">Search:</label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by first name or last name"
            />
          </div>
          </div>
    );
};

export default TableOptions;