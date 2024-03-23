import React, { useState } from "react";
import "./SigninForm.css";
import { useNavigate } from "react-router-dom"; 

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useHistory

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    navigate("/seatbook");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h3>Login</h3>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          id="input"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="input"
          required
        />
        <button type="submit">Login</button>
        <p className="forgot-password">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};
export default SigninForm;
