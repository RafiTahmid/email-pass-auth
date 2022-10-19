import React from "react";
import { Link } from "react-router-dom";

const LoginBS = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email;
    const password = form.password;
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-success">Please, Login..!!</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Example label
          </label>
          <input
            type="email"
            name="emial"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Another label
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <input class="btn btn-primary" type="submit" value="Login"></input>
      </form>
      <p>
        <small>
          New To This Site..? Please <Link to="/register">Register</Link>{" "}
        </small>
      </p>
    </div>
  );
};

export default LoginBS;
