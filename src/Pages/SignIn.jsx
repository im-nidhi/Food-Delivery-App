// src/Pages/SignIn.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Services/firebase";
import "../Styles/Login.css"
// import "../Styles/Auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful ✅");
      window.location.href = "/home"; // redirect
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container container">
      <form onSubmit={handleSignIn} className="auth-form">
        <h2>Sign In 🍕</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        <p>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
