import React, { useState, useEffect } from 'react';
import EmployeeService from './EmployeeServce';

function EmployeeComponent() {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
    });
  };

  useEffect(() => {
    // Fetch data initially
    getEmployees();

    // Set up polling every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      getEmployees();
    }, 5000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Employees List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeComponent;
