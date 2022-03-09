import { React, useState } from "react";
import Axios from "axios";
import Layout from "../components/Layout";
import { Link, Outlet } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

const Employee = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const getEmployees = () => {
    Axios.get("http://localhost:5000/api/employees/getAll").then((response) => {
      setEmployeeList(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <Row className="text-center py-5 bg-light">
        <Col>
          <h1>Employees</h1>
        </Col>
      </Row>
      <Layout>
        <Row className="d-flex align-items-center justify-content-evenly w-100">
          <Col>
            <Button as={Link} to="listAll" onClick={getEmployees}>
              All Employees
            </Button>
            <Button as={Link} to="create">
              Search Employee
            </Button>
            <Button as={Link} to="create">
              Create Employee
            </Button>
            <Button as={Link} to="create">
              Update Employee
            </Button>
            <Button as={Link} to="create">
              Delete Employee
            </Button>
          </Col>
        </Row>
        <Outlet />
      </Layout>
    </>
  );
};

export default Employee;
