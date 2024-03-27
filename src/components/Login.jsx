import React, { useState } from "react";
import axios from 'axios';

const url = "http://localhost:5000";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/login`, formData);
      console.log(response.data); // Assuming backend sends some token or user information upon successful login
      // You can handle the response here, such as storing tokens in local storage or redirecting the user to another page
    } catch (error) {
      console.error("Login failed:", error.response.data);
      // Handle login error, display message to the user, etc.
    }
  };

  return (
    <div className="container-md">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center fw-bolder mt-3">Login</h1>
          <form onSubmit={handleSubmit} className="d-block m-auto w-25">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary m-auto d-block w-50">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
