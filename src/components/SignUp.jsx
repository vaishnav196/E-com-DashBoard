import React, { useState } from "react";
import axios from 'axios';


let url="http://localhost:5000"

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

// const [error,setError]=useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  //  console.log(formData)

    axios.post(`${url}/signup`,formData).then((data)=>{
      console.log(data);
    });
    
  };

  return (
    <div className="container-md ">
      <div className="row">
        <div className="col-md-6">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit} className="">
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
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </form>
        </div>
        <div className="col-md-6 ">
            <img src="img/signup.jpg" alt="" className="img-fluid h-75 d-block m-auto" />
        </div>
      </div>
    </div>
  );
};
export default SignUp;
