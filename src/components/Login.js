import React, { useState } from "react";
// import AuthenticationService from "../services/AuthenticationService";
import "../styles/Login.css";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async () => {
    //   console.warn("Logging in...");
    //   setEmailError("");
    //   setPasswordError("");
    //   setError("");
    //   const regex =
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   if (!email) {
    //     setEmailError("Email is required.");
    //     return;
    //   } else if (!regex.test(email)) {
    //     setEmailError("Please enter a valid email address.");
    //     return;
    //   } else if (!password) {
    //     setPasswordError("Password is required.");
    //     return;
    //   }
    //   try {
    //     const userData = await AuthenticationService.login(email, password);
    //     console.log("Logged in:", userData);
    //     localStorage.setItem("token", userData.token);
    //     localStorage.setItem("userId", userData.userId);
    //     history.push("/BookingHouse");
    //   } catch (error) {
    //     console.error("Login failed:", error.message);
    //     setError("Invalid Email Address or Password");
    //   }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="title">Login</div>
        {error && <div className="error">{error}</div>}
        <input
          className="input"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {emailError && <div className="error">{emailError}</div>}
        <input
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        {passwordError && <div className="error">{passwordError}</div>}

        <div className="forgot_container">
          <span
            className="forgotPassword"
            onClick={() => history.push("/Reset")}
          >
            Forgot Password?
          </span>
        </div>

        <button className="button" onClick={handleLogin}>
          Login
        </button>

        <span>
          Don't have an account?{" "}
          <span className="register" onClick={() => history.push("/Signup")}>
            Register
          </span>
        </span>
      </div>
    </div>
  );
};

export default LoginScreen;
