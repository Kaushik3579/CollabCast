import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log("Google Sign-In Clicked"); // Replace with actual Google Auth logic
    navigate("/dashboard");
  };

  const handleAppleLogin = () => {
    console.log("Apple Sign-In Clicked"); // Replace with actual Apple Auth logic
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <button onClick={handleGoogleLogin} className="google-btn">
          Sign in with Google
        </button>
        <button onClick={handleAppleLogin} className="apple-btn">
          Sign in with Apple
        </button>
      </div>
    </div>
  );
}

export default Login;
