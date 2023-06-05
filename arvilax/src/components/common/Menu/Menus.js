import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menus = () => {
  const location = useLocation();

  const isActivePage = (pathname) => {
    return location.pathname === pathname;
  };

  return (
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
            <Link to="/service-details/service1">Taxation</Link>
          </li>
          <li>
            <Link to="/service-details/service2">Financial accounts</Link>
          </li>
          <li>
            <Link to="/service-details/service3">Xero Training</Link>
          </li>
          <li>
            <Link to="/service-details/service4">Bookkeeping</Link>
          </li>
          <li>
            <Link to="/service-details/service5">Payroll services</Link>
          </li>
          <li>
            <Link to="/service-details/service6">Other services</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/appointment">
          <button className={`btn btn-lg  ${isActivePage("/") ? "btn-outline-light" : "btn-outline-dark"}`}>
            Book An Appointment
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default Menus;
