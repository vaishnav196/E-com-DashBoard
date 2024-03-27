import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${url}/signup`, formData);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error.response.data);
      // Handle signup error, display message to the user, etc.
    }
  };

  return (
    <div className="container-md">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mt-4 fw-bolder">Signup</h1>
          
          <form onSubmit={handleSubmit} className="d-block m-auto w-25">
          {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
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
              />
            </div>
            <button type="submit" className="btn btn-primary m-auto d-block w-50">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
