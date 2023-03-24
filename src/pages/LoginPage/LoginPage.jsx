import axios from "axios";
import React, { useState } from "react";
import "./LoginPage.css";
import { BASE_URL } from "../../Utils/BaseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };
    const token = localStorage.getItem("authToken");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/authenticate`,
        data,
        headers
      );
      localStorage.setItem("authToken", response.data.token);

      if (response.status === 200) {
        toast.success('Login successful!');
        navigate("/home");
        setEmail("");
        setPassword("");
      } 
    } catch (error) {
        setError(error.message.substring(0,14)+ " !! Incorrect credentials"); 
        toast.error("Login Failed")
    }
  };

  return (
    <div className="login-page">
      <h1>login to Forex Platform</h1>
      <form onSubmit={handleSubmit}>
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
        <br/>
        {error && <small style={{ color: "red" }}>{error}</small>}
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
