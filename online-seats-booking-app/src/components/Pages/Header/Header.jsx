import React from 'react';
import "./Header.css";
import "../../Common.css";
import {FaPaperPlane} from "react-icons/fa";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <div className="containerr">
        <div className="header-content text-center flex flex-column">
          <h1 className="text-uppercase header-title">Book Your Seat</h1>
          <p className="text-lead">
            Welcome to Awfis - Your Convenient Seat Booking Solution
          </p>
          <a href="/" className="btn header-btn btn-blue">
            <FaPaperPlane />{" "}
            <span>
              {" "}
              <Link to="/login">get started</Link>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header