import React from "react";
import "../styles.css";

function Login() {
  const handleGoogleLogin = () => {
    console.log("Google Sign-In Clicked"); // Replace with actual Google Auth logic
  };

  const handleAppleLogin = () => {
    console.log("Apple Sign-In Clicked"); // Replace with actual Apple Auth logic
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
