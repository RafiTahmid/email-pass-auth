import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const RegisterReactBs = () => {
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    if (!/^(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least two uppercase letters");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 character");
      return;
    }
    if (!/(?=.*[!@#$&*])/) {
      setPasswordError("Please add one special character");
      return;
    }
    setPasswordError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);

        //To reset the form
        form.reset();
      })
      .catch((error) => {
        console.error("error: ", error);
        setPasswordError(error.message);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-danger">Please Register..!!!</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="text-primary">{passwordError}</p>
        {success && <p className="text-success">User Created Successfully</p>}

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>
        <small>
          Already Have an Account..? Please <Link to="/login">Login</Link>
        </small>
      </p>
    </div>
  );
};

export default RegisterReactBs;
