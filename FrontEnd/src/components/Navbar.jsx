import React, {useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import "../components/css/navbar.css";
import { SideMenu } from './Sidemenu'
import "../components/css/sidemenu.css"

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/signup";
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    console.log("Hamburger button clicked");
    setSidebar(!sidebar);
  };

  return (
    <div className="Navbar-wrapper">
      <div className="Navbar-hamburger">
        <button onClick={showSidebar}>
          <img src="./hamburger.svg" height="40px" width="40px" alt="" />
        </button>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to ='#' className='menu-bars'>
                </Link>
              </li>
              {SideMenu.map((item,index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
      <div className="Navbar-title">
        <Link to="/">
          <h1>WATCHSTOP</h1>
        </Link>
      </div>
      <div className="Navbar-text">
        <Link to="/login" className={isLoginPage ? "blue-text" : ""}>
          LOGIN
        </Link>
        <h1>/</h1>
        <Link to="/signup" className={isRegisterPage ? "blue-text" : ""}>
          REGISTER
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
