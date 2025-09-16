// src/Pages/SignUp.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Services/firebase"; 
import { doc, setDoc } from "firebase/firestore";
import "../Styles/Login.css";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // check passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      setSuccess("");
      return;
    }

    try {
      // create user in firebase auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // save extra data in firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        createdAt: new Date(),
      });

      // show success
      setSuccess("🎉 Account Created! Redirecting to Sign In...");
      setError("");

      // redirect after 2 sec
      setTimeout(() => {
        window.location.href = "/signin";
      }, 2000);
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignUp} className="auth-form">
        <h2>Create Account 🥤</h2>

        {/* error / success messages */}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{" "}
          <a href="/signin" style={{ color: "blue" }}>
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
