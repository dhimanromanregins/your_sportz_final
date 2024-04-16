import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <section className='footer-wrap-bg'>

        <footer className="container">
          <div className='row'>
            <div className='col-md-3'>
              <img src="main-logo.png" alt="Logo"></img>
            </div>
         
              <div className='col-md-2 mt-5'>
                <h4 className='link-head'>Social</h4>
                <ul className='social-links p-0 m-0'>
                  <li >
                    <span className='me-3'><img src='mail.png' alt="Mail"></img></span>
                    <NavLink to="email.com">Email</NavLink>
                  </li>
                  <li>
                    <span className='me-3'><img src='Vector (3).png' alt="Youtube"></img></span>
                    <NavLink to="youtube.com">Youtube</NavLink>
                  </li>
                  <li>
                    <span className='me-3'><img src='instagram.png' alt="Instagram"></img></span>
                    <NavLink to="instagram.com">Instagram</NavLink>
                  </li>
                </ul>
              </div>
              <div className='col-md-2 mt-5'>
                <h4 className='link-head'>Pricing</h4>

              </div>
              <div className='col-md-2 mt-5'>
                <h4 className='link-head'>Need Help</h4>
                <ul className='social-links p-0 m-0'>
                  <li >
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQ</NavLink>
                  </li>
                </ul>
              </div>
              <div className='col-md-2 mt-5'>
                <h4 className='link-head'>Legal</h4>
                <ul className='social-links p-0 m-0'>
                  <li >
                    <NavLink to="/terms">Terms of use</NavLink>
                  </li>
                  <li>
                    <NavLink to="/privacy">Privacy Policy</NavLink>
                  </li>
                </ul>
              </div>
         
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
