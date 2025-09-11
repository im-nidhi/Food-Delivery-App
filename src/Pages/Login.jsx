import React from 'react'
import '../Styles/Login.css'

const Login = () => {
  return (
    <>
      <div class="container">
    <div class="form-box">
      <div class="toggle-buttons">
        <button id="signInBtn" class="active">Sign In</button>
        <button id="signUpBtn">Sign Up</button>
      </div>

      <form id="signInForm" class="form active-form">
        <h2>Welcome Back 🍕</h2>
        <div class="input-group">
          <input type="email" id="signInEmail" placeholder="Email" required />
          <span class="input-icon">📧</span>
        </div>
        <div class="input-group">
          <input type="password" id="signInPassword" placeholder="Password" required />
          <span class="input-icon">🔒</span>
        </div>
        <button type="submit" class="submit-btn">Sign In</button>
        <p class="switch-text">Don't have an account? <span id="toSignUp">Sign Up</span></p>
      </form>

      <form id="signUpForm" class="form">
        <h2>Create Account 🥤</h2>
        <div class="input-group">
          <input type="text" placeholder="Full Name" required />
          <span class="input-icon">👤</span>
        </div>
        <div class="input-group">
          <input type="email" placeholder="Email" required />
          <span class="input-icon">📧</span>
        </div>
        <div class="input-group">
          <input type="password" id="signUpPassword" placeholder="Password" required />
          <span class="input-icon toggle-password" data-target="signUpPassword">👁️</span>
        </div>
        <div class="input-group">
          <input type="password" id="confirmPassword" placeholder="Confirm Password" required />
          <span class="input-icon toggle-password" data-target="confirmPassword">👁️</span>
        </div>

        <button type="submit" class="submit-btn">Sign Up</button>
        <p class="switch-text">Already have an account? <span id="toSignIn">Sign In</span></p>
      </form>

    </div>
  </div>

    </>
  )
}

export default Login

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });