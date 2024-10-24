import React, { Component } from "react";
import { Table, Col } from "reactstrap";

export default class Employees extends Component {
  state = {
    employees: []
  };
  componentDidMount() {
    this.getEmployees();
  }
  getEmployees = () => {
    fetch("http://localhost:3000/employee")
      .then((response) => response.json())
      .then((data) => this.setState({ employees: data }));
  };
  render() {
    return (
      <Col xs="7">
        <div>
        <h3>Employees</h3>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title Of Courtesy</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Title</th>
              <th>City</th>
              <th>Region</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => {
              return (
                <tr>
                  <th scope="row">{employee.entityId}</th>
                  <td>{employee.titleOfCourtesy}</td>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.title}</td>
                  <td>{employee.city}</td>
                  <td>{employee.region}</td>
                  <td>{employee.country}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      </Col>
      
    );
  }
}
