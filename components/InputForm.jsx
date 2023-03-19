import HomeStyles from "../styles/Home.module.css";
import Swal from "sweetalert2";
import { useState } from "react";

// import { Container } from "@mui/material";
// import { TextField } from "@mui/material";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

export default function InputForm(props) {
  let [name, setName] = useState({ firstName: "", lastName: "" });

  function handleFirtNameChange(event) {
    setName({ ...name, firstName: event.target.value });
  }
  function handleLastNameChange(event) {
    setName({ ...name, lastName: event.target.value });
  }
  function handleFormSubmission(event) {
    event.preventDefault();
    console.log(name);
    if (!name.firstName || !name.lastName) {
      Swal.fire({
        title: "Skyler is bich",
        text: "Yo, enter your name its not rocket science yo",
        icon: "error",
        confirmButtonText: "Okay My bad",
      });
    } else {
      props.fun(name);
    }
  }
  return (
    <Container className="mt-4">
      <Form onSubmit={handleFormSubmission}>
        <Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>first name</Form.Label>
            <Form.Control
              className={HomeStyles.textInput}
              label="first name"
              color="secondary"
              placeholder="Breaking"
              onChange={handleFirtNameChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>last name</Form.Label>
            <Form.Control
              className={HomeStyles.textInput}
              label="last name"
              color="secondary"
              placeholder="Bad"
              onChange={handleLastNameChange}
              required
            />
          </Form.Group>
        </Row>

        <Button type="submit" className="my-3">Generate</Button>
      </Form>
    </Container>
  );
}
