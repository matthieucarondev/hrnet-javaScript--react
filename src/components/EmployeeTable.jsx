import React from 'react';

const EmployeeTable = ({  employees,
    handleSort,
    getSortClass,
    currentEmployees}) => {
    return (
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
              <td className="first-name">{employee.firstName}</td>
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
    );
};

export default EmployeeTable;