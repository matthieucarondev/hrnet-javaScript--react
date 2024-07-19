import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/pagination";
import EmployeeTable from "../components/EmployeeTable";
import TableOptions from "../components/TableOptions";






const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.employees);
  const [employeesPerPage, setEmployeesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "startDate",
    direction: "ascending",
  });

  //recherche
  const filteredEmployees = (employees || []).filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //fonction de tri des employés
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  //nombre de pages total
  const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage);

  // obtenir  les employés pour la page courant
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indecOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indecOfFirstEmployee,
    indexOfLastEmployee
  );

  // gestion  des  changement de page

  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  // gestion du changement du nombre employer par page
  const handleEmployeesPerPageChange = (event) => {
    setEmployeesPerPage(Number(event.target.value));
    setCurrentPage(1); //revenir a la premiére page des  que le nombre d'employer change
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Revenir à la première page lorsque le terme de recherche change
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    } else if (
      sortConfig.key === key &&
      sortConfig.direction === "descending"
    ) {
      direction = null;
      key = null;
    }
    setSortConfig({ key, direction });
  };

  const getSortClass = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending"
        ? "sortable asc"
        : sortConfig.direction === "descending"
        ? "sortable desc"
        : "sortable";
    }
    return "sortable";
  };

  return (

      <div className="employee-list"> 
         <h2>Current Employees</h2>
         {employees.length > 0 && 
         <section>
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
        <div>
          {totalPages > 1 && (
          <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          />          
          )}
        </div>
        </section>}
        {
          employees.length === 0 && 
          <span>No employee is recorded </span>
        }
      </div>
  );
};

export default EmployeeList;
