import React from 'react'
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info ms-auto ">
      <div className="container">
        <Link className="navbar-brand " to="/"><h3>DashBoard</h3> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-auto" to="/add-products">Add Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update-products">Update Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
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
