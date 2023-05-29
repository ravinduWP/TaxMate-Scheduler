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
            <Link to="/service-details">Taxation</Link>
          </li>
          <li>
            <Link to="/service-details">Financial accounts</Link>
          </li>
          <li>
            <Link to="/service-details">Xero Training</Link>
          </li>
          <li>
            <Link to="/service-details">Bookkeeping & Payroll services</Link>
          </li>
          <li>
            <Link to="/service-details">Other services</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/">
          <button className={`btn btn-lg  ${isActivePage("/") ? "btn-outline-light" : "btn-outline-dark"}`}>
            Book An Appointment
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default Menus;
