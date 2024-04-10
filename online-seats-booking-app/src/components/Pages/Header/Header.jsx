import React from 'react';
import "./Header.css";
import "../../Common.css";
import {FaPaperPlane} from "react-icons/fa";
import {Link} from 'react-router-dom';
import Spaces from "../Spaces/Spaces.jsx";

const Header = () => {
  return (
    <>
      <header className="header flex flex-center flex-column">
        <div className="containerr">
          <div className="header-content text-center flex flex-column">
            <h1 className="text-uppercase header-title">Book Your Seat</h1>
            <p className="text-lead">
              Welcome to Awfis - Your Convenient Seat Booking Solution
            </p>
            <Link to="/signin">
              <a href="/" className="btn header-btn btn-blue">
                <FaPaperPlane /> <span> get started</span>
              </a>
            </Link>
          </div>
        </div>
      </header>
      <Spaces></Spaces>
    </>
  );
}

export default Header