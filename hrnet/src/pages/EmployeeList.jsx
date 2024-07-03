import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
   
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


   return (
    <div className="employee-list">
      <h2>Current Employees</h2>
    
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
            {employees.map((employee, index) => (
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
        <div className="back-link">
        <Link to="/">Back to Form</Link>
      </div>
    </div>
  );
};

export default EmployeeList;