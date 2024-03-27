import React from 'react'
import {Link, useNavigate} from "react-router-dom"

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js"
function Header() {
const navigate=useNavigate();
  const auth=localStorage.getItem('userDetail');
  if(auth){
    navigate("/")
  }
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg   bg-nav ms-auto ">
      <div className="container">
        <Link className="navbar-brand " to="/"><h3>DashBoard</h3> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <h6 className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </h6>
            <h6 className="nav-item">
              <Link className="nav-link ms-auto" to="/add-products">Add Products</Link>
            </h6>
            <h6 className="nav-item">
              <Link className="nav-link" to="/update-products">Update Products</Link>
            </h6>
            <h6 className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </h6>
            <h6 className="nav-item">
              <Link className="nav-link" to="/SignUp">SignUp</Link>
            </h6>
            <li className="nav-item">
              <button className="btn btn-primary" to="/logout">Logout</button>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header
