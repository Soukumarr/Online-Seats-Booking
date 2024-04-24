import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../Common.css";
import {
  FaTwitter,
  FaSkype,
  FaInstagram,
  FaRegUserCircle,
} from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const { isLoggedIn, logOut, roles } = useContext(AuthContext);
  const navigate = useNavigate();
  //console.log(isLoggedIn);

  let role;
  let token;
  let decodedToken;

  if (isLoggedIn == true){
  token = localStorage.getItem("jwtToken");
  decodedToken = jwtDecode(token);
  role = decodedToken.roles || [];
  }
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  const handleLogout = () => {
    logOut(); // Set isLoggedIn to false
    localStorage.clear(); // Clear local storage
    navigate("/"); // Navigate to home page
  };

  return (
    <nav className="navbar w-100 flex">
      <div className="containerr w-100">
        <div className="navbar-content flex fw-7">
          <div className="brand-and-toggler flex flex-between w-100">
            <Link to="/" className="navbar-brand fs-26">
              AWFIS
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li className="text-white">
                  <Link to={"/about"}>About</Link>
                </li>
                {isLoggedIn && roles.includes("ROLE_ADMIN") && (
                  <li className="text-white">
                    <Link to="admin_dashboard">Bookings</Link>
                  </li>
                )}
                {isLoggedIn && roles.includes("ROLE_USER") && (
                  <li className="text-white">
                    <Link to="/bookingscard">Bookings</Link>
                  </li>
                )}
                {isLoggedIn && roles.includes("ROLE_USER") && (
                  <li className="text-white">
                    <Link to="/calender">Calender</Link>
                  </li>
                )}
                {(isLoggedIn && role == "ROLE_USER") && (
                  <>
                    <li className="text-white">
                      <Link to="bookingscard">Bookings</Link>
                    </li>
                    <li className="text-white">
                      <Link to="/calender">Calender</Link>
                    </li>
                  </>
                )}
                <li className="text-white">
                  <Link to="/">Contacts</Link>
                </li>
              </ul>
              <ul className="navbar-social flex">
                <li className="text-white">
                  <Link to="" className="flex flex-center">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="" className="flex flex-center">
                    <FaSkype />
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="" className="flex flex-center">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
              {isLoggedIn ? (
                <div className="navbar-btns">
                  <button type="button" className="btn" onClick={handleLogout}>
                    <IoMdRocket /> <span>logout</span>
                  </button>
                </div>
              ) : (
                <div className="navbar-btns">
                  <Link to="/signin">
                    <button type="button" className="btn">
                      <IoMdRocket /> <span>login</span>
                    </button>
                  </Link>
                </div>
              )}

              {/* <div className="navbar-btns">
                <Link to="/signin">
                  <button type="button" className="btn">
                    <IoMdRocket /> <span>login</span>
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {
        isLoggedIn && !roles.includes("ROLE_ADMIN") && (
          <div className="userprofile">
            <Link to="/userprofile" className="flex flex-center text-white">
              <FaRegUserCircle size={45} />
            </Link>
          </div>
        )
        // : (
        //   <></>
        // )
      }
    </nav>
  );
};

export default Navbar;
