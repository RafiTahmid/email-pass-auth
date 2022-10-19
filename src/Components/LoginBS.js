import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const LoginBS = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("Please, enter your email address");
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Reset password mail has been sent, please check your email");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-success">Please, Login..!!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input
            onBlur={handleEmailBlur}
            type="email"
            name="emial"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Login"></input>
      </form>
      {success && <p>Successfully loged in the Account</p>}
      <p>
        <small>
          New To This Site..? Please <Link to="/register">Register</Link>{" "}
        </small>
      </p>
      <p>
        Forget Password?{" "}
        <button
          type="button"
          onClick={handleForgetPassword}
          className="btn btn-link"
        >
          Reset
        </button>
      </p>
    </div>
  );
};

export default LoginBS;
