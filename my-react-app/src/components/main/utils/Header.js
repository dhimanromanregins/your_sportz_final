import React, { useState } from 'react';
import Switcher from './Switcher';
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
   <div className='container'>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container  p-0">
            <div>
         
                <img className="img-fluid" src="logo.svg" alt="Main Logo"></img>
          
            </div>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              onClick={toggleOffcanvas}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <div>
                    <a className="navbar-brand me-1" href="#">
                      <img src="main-logo.png" alt="Main Logo"></img>
                    </a>
                  </div>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleOffcanvas}
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body pl-10">
                <ul className="navbar-nav  pe-3">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/feature" className="nav-link">
                      Features
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pricing" className="nav-link">
                      Pricing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>
                  <div className='col'>
                    <Switcher />
                    <div id="google_translate_element"></div>
                  </div>
                </ul>
                <div className='col'>
                  <div className="login-wrapper align-items-center col">
                    <div className="login-button">
                      <NavLink to="/login" className="flex items-center login-wrap ">
                        Log In
                        <img className='ms-1' src="Vector.png" alt="Login Icon"></img>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
<div>
  
</div>  
    </>
 

  );
}

export default Header;
