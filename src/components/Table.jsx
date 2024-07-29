import React from "react";
import TableOptions from "./TableOptions";
import EmployeeTable from "./EmployeeTable";
import TablePagination from "./TablePagination";
import '../css/Table.css';

const Table = ({
  employeesPerPage,
  handleEmployeesPerPageChange,
  searchTerm,
  handleSearchChange,
  // totalEmployees,
  employees,
  handleSort,
  getSortClass,
  currentEmployees,
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <section className="Table">
      <TableOptions
        employeesPerPage={employeesPerPage}
        handleEmployeesPerPageChange={handleEmployeesPerPageChange}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        totalEmployees={employees.length}
      />
      <EmployeeTable
        employees={employees}
        handleSort={handleSort}
        getSortClass={getSortClass}
        currentEmployees={currentEmployees}
      />
      
        {totalPages > 1 && (
          <nav className='pagination-nav'>
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
          </nav>
        )}
      
    </section>
  );
};

export default Table;
