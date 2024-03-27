import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import './Header.css';
function Header() {
const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/signup")
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
            <h6 className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </h6>
            <h6 className="nav-item">
              <Link className="nav-link" onClick={logout} to="/signup">Logout</Link>
            </h6>
           
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header
