import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SideMenu } from "./Sidemenu";
import openMenu from "../../src/assets/menu.svg";
import closeMenu from "../../src/assets/close-menu.svg";
import user from "../../src/assets/user.svg";
import "../components/css/sidemenu.css";
import "../components/css/navbar.css";
import useAuth from "./Hooks/useAuth";
import useLogout from "./Hooks/useLogout";

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/signup";
  const [sidebar, setSidebar] = useState(false);
  const auth = useAuth();

  const showSidebar = () => {
    console.log("Hamburger button clicked");
    setSidebar(!sidebar);
  };
  const handleLogout = () => {
    useLogout();
  };

  return (
    <div className="Navbar-wrapper">
      <div className="Navbar-hamburger">
        <button onClick={showSidebar}>
          {sidebar ? (
            <img src={closeMenu} height="40px" width="40px" alt="" />
          ) : (
            <img src={openMenu} height="40px" width="40px" alt="" />
          )}
        </button>
      </div>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-content" onClick={showSidebar}>
          {SideMenu.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          {auth && (
            <li className="nav-text" onClick={handleLogout}>
              <span>LOGOUT</span>
            </li>
          )}
        </div>
      </div>
      <div className="Navbar-title">
        <Link to="/">
          <h1>WATCHSTOP</h1>
        </Link>
      </div>
      <div className="Navbar-text">
        {auth ? (
          <Link to="/profile">
            <img src={user} alt="" />
          </Link>
        ) : (
          <>
            <Link to="/login" className={isLoginPage ? "blue-text" : ""}>
              LOGIN
            </Link>
            <h1>/</h1>
            <Link to="/signup" className={isRegisterPage ? "blue-text" : ""}>
              REGISTER
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
