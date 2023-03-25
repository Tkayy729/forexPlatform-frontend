import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
    <div className="content">
      <h2>Welcome to our Forex platform</h2>
      <p>Buy currencies easily with our user-friendly platform.</p>
      <Link to="/register"><button>Sign up</button></Link>
      <p>Already have an account with us? <Link to="/login"><a>login</a></Link></p>
    </div>
  </div>
  );
}

export default LandingPage;