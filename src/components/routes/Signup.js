import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./signupstyle.css"
import axios from "axios";

function Signup() {
  const [validated, setValidated] = useState(false);




  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
   
  };

 //adding data to backend
      axios
        .post("http://localhost:8000/saveStudent", )
        .then((response) => {
          document.getElementById("message").innerHTML = "Successfully added";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  
  return (
    <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="mb-300 text-light bg-dark  pl-3">
          <Form.Group as={Col} md="40" controlId="validationCustom01">
            <br />
            <br />
            <Form.Label>First name </Form.Label>
            <Form.Control required type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group as={Col} md="40" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
          </Form.Group>
          <Form.Group as={Col} md="40" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="40" controlId="validationCustom03">
            <Form.Label>password </Form.Label>
            <Form.Control type="password" placeholder="password" required />
            <Form.Control.Feedback type="invalid">
              Please provide password.
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Button type="submit" >
            Submit form
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
