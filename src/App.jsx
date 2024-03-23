
import React from 'react'
import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
// import { Link } from 'react-router-dom';
function App() {
  return (
    <div className=' '>
 <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Products/>} />
        
         
        </Routes>
       <Footer/>
      </Router>
    </div>
  )
}

export default App
