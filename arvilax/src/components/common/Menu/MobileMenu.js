import React from "react";
import { Link } from "react-router-dom";
import Appointbtn from "./Appointbtn";

const MobileMenu = () => {
  return (
    <>
      <div className=" col-lg-7 col-md-4 d-none d-md-block">
        <div className="main-menu text-center">
          <nav id="mobile-menu mobile-menu-area">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
              <ul className="submenu">
                        <li>
                          <Link to="/service-details">Taxation</Link>
                        </li>
                        <li>
                          <Link to="/service-details">Financial accountss</Link>
                        </li>
                        <li>
                          <Link to="/service-details">Xero Training</Link>
                        </li>
                        <li>
                          <Link to="/service-details">Bookkeeping & Payroll services</Link>
                        </li>
                        <li>
                          <Link to="//service-details">Other services</Link>
                        </li>
                        
              </ul>        
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Appointbtn/>
            </li>
            
          </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
