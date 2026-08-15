import React from "react";
import "./Signup.css";

function Signup() {
  const handleSignup = (event) => {
    event.preventDefault();

    // Demo signup: open the deployed dashboard
    window.location.href = "https://zerodhaclone-project.netlify.app";
  };

  return (
    <div className="signup-container">

      <h1>Open Your Account</h1>

      <p>Start investing with Zerodha</p>

      <form onSubmit={handleSignup}>

        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="Enter your mobile number"
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit">
          Signup
        </button>

      </form>

      <p>
        Already registered?
        <a href="/login"> Login</a>
      </p>

    </div>
  );
}

export default Signup;
