import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/pagination";


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
        <div className="table-options">
          {employees.length > 5  &&
         
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
        <table>
          <thead>
            <tr>
              <th
                onClick={() => handleSort("firstName")}
                className={getSortClass("firstName")}
              >
                First Name
              </th>
              <th
                onClick={() => handleSort("lastName")}
                className={getSortClass("lastName")}
              >
                Last Name
              </th>
              <th
                onClick={() => handleSort("startDate")}
                className={getSortClass("startDate")}
              >
                Start Date
              </th>
              <th
                onClick={() => handleSort("department")}
                className={getSortClass("department")}
              >
                Department
              </th>
              <th
                onClick={() => handleSort("dateOfBirth")}
                className={getSortClass("dateOfBirth")}
              >
                Date of Birth
              </th>
              <th
                onClick={() => handleSort("street")}
                className={getSortClass("street")}
              >
                Street
              </th>
              <th
                onClick={() => handleSort("city")}
                className={getSortClass("city")}
              >
                City
              </th>
              <th
                onClick={() => handleSort("state")}
                className={getSortClass("state")}
              >
                State
              </th>
              <th
                onClick={() => handleSort("zipCode")}
                className={getSortClass("zipCode")}
              >
                Zip Code
              </th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee, index) => (
              <tr key={index}>
                <td className="FirstName">{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
