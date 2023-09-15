import { Link, useLocation } from "react-router-dom";
import "../components/css/navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/signup";

  return (
    <div className="Navbar-wrapper">
      <div className="Navbar-hamburger">
        <button>
          <img src="./hamburger.svg" height="40px" width="40px" alt="" />
        </button>
      </div>
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
