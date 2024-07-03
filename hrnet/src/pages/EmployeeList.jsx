import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [employeesPerPage, setEmployeesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
   
   useEffect(() => {

    const fetchEmployees= () => {
        let storedData= JSON.parse(localStorage.getItem('employeeData')) ;
        if (!Array.isArray(storedData)){
            storedData=Object.values(storedData);
        }
        setEmployees(storedData);
    };
    fetchEmployees();
   }, []);

   //nombre de pages total
   const totalPages = Math.ceil(employees.length/employeesPerPage);

   // obtenir  les employés pour la page courantz
   const indexOfLastEmployee = currentPage* employeesPerPage;
   const indecOfFirstEmployee = indexOfLastEmployee -employeesPerPage;
   const currentEmployees = employees.slice(indecOfFirstEmployee ,indexOfLastEmployee);

   // gestion  des  changement de page

   const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
   };


   // gestion du changement du nombre employer par page 
   const handleEmployeesPerPageChange = (event)=> {
    setEmployeesPerPage(Number(event.target.value));
    setCurrentPage(1);//revenir a la premiére page des  que le nombre d'employer change
   };

   return (
    <div className="employee-list">
      <h2>Current Employees</h2>
      <div className="options">
      <label htmlFor="employeesPerPage">show
        <select
          id="employeesPerPage"
          value={employeesPerPage}
          onChange={handleEmployeesPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>entries</label>
      </div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>             
              <th>Zip Code</th>
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
        <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={(event) => handlePageChange(event, index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <div className="back-link">
        <Link to="/">Back to Form</Link>
      </div>
      </div>
    </div>
  );
};

export default EmployeeList;