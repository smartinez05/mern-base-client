import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

const Formulario = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  const addEmployee = () => {
    Axios.post("http://localhost:5000/api/employees/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      salary: salary,
    }).then(() => {
      console.log("Employee added");
    });
  };

  return (
    <>
      <Form>
        <Form.Label className="my-2">Name: </Form.Label>
        <Form.Control
          type="text"
          name=""
          id=""
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Form.Label className="my-2">Age: </Form.Label>
        <Form.Control
          type="number"
          name=""
          id=""
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <Form.Label className="my-2">Country: </Form.Label>
        <Form.Control
          type="text"
          name=""
          id=""
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <Form.Label className="my-2">Position: </Form.Label>
        <Form.Control
          type="text"
          name=""
          id=""
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <Form.Label className="my-2">Salary (year): </Form.Label>
        <Form.Control
          type="number"
          name=""
          id=""
          onChange={(event) => {
            setSalary(event.target.value);
          }}
        />
        <Button
          variant="primary"
          type="submit"
          className="my-3"
          onClick={addEmployee}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
