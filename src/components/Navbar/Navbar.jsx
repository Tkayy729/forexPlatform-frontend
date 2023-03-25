import React from "react";
import "./Navbar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
       <Link to="/home"> <a>Home</a> </Link>  
        </li>
        <li className="nav-item">
          <Link to="/orders">
            {" "}
            <a>Placed Orders</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/banks"> <a>Bank Accounts</a> </Link>  
        </li>
      </ul>
      <div className="name">
        <div onClick={handlelogout} className="logo">
          <LogoutIcon alt="logout" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
