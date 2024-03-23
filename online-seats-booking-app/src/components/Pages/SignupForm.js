import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h3>Sign Up</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          id="input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="input"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          id="input"
        />
        <button type="submit">Sign Up</button>
        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
