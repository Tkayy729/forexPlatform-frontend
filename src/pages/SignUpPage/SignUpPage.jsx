import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { BASE_URL } from "../../Utils/BaseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          toast.error("Passwords do not match")
          return;
        }
        const data = { firstname, lastname, email, password };
    
        const config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };
    
        try {
          const response = await axios.post(
            `${BASE_URL}/auth/register`,
            data,
            config
          );
          console.log(response);
          localStorage.setItem("authToken", response.data.token);
          if (response.status === 200) {
            toast.success('sign up successful!');
            navigate("/home");
            setFirstname("");
            setLastname("");
            setConfirmPassword("");
            setEmail("");
            setPassword("");
          } 
        } catch (error) {
            setError(error.message.substring(0,14)); 
            toast.error("Login Failed")
        }
        
    
      };

  return (
    <div className="signup-page">
    <h1>sign Up Forex Platform</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstname">First name</label>
        <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Last name</label>
        <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
      </div>
      <br />
        {error && <small style={{ color: "red" }}>{error}</small>}
      <button type="submit">sign up</button>
    </form>
  </div>
  )
}

export default SignUpPage