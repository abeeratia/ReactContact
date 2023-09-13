
import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;
export default class Navbar extends Component {
  render() {
    return<>
        
        <nav className="navbar navbar-expand-lg bg-dark blue ">
  <div className="container">
    <Link className="navbar-brand text-white fs-1 py-3" to="home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto text-white mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white fs-4 py-3" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fs-4 py-3" to="protfolio">protfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fs-4 py-3" to="contact">contact</Link>
        </li>
       
        
      </ul>
   
    </div>
  </div>
</nav> </>
    
  }
}

   