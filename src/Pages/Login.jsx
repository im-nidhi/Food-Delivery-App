// import React, { useState } from "react";
// import "../Styles/Login.css";
// import { auth } from "../Services/firebase.jsx"; 
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../Services/firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// const Login = () => {
//   const [isSignIn, setIsSignIn] = useState(true); // toggle between Sign In & Sign Up
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   // 🔹 Handle Sign In
//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login Successful ✅");
//       window.location.href = "/dashboard"; // redirect
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // 🔹 Handle Sign Up
//   // const handleSignUp = async (e) => {
//   //   e.preventDefault();
//   //   if (password !== confirmPassword) {
//   //     setError("Passwords do not match ❌");
//   //     return;
//   //   }
//   //   try {
//   //     await createUserWithEmailAndPassword(auth, email, password);
//   //     alert("Account Created 🎉");
//   //     setIsSignIn(true); // switch to Sign In after successful signup
//   //   } catch (err) {
//   //     setError(err.message);
//   //   }
//   // };

//   const handleSignUp = async (e) => {
//   e.preventDefault();
//   if (password !== confirmPassword) {
//     setError("Passwords do not match ❌");
//     return;
//   }
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Save user data in Firestore
//     await setDoc(doc(db, "users", user.uid), {
//       fullName: fullName,
//       email: email,
//       createdAt: new Date(),
//     });

//     alert("Account Created 🎉");
//     setIsSignIn(true); // switch to Sign In after signup
//   } catch (err) {
//     setError(err.message);
//   }
// };

//   return (
//     <div className="container">
//       <div className="form-box">
//         <div className="toggle-buttons">
//           <button onClick={() => setIsSignIn(true)} className={isSignIn ? "active" : ""}>
//             Sign In
//           </button>
//           <button onClick={() => setIsSignIn(false)} className={!isSignIn ? "active" : ""}>
//             Sign Up
//           </button>
//         </div>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         {/* Sign In Form */}
//         {isSignIn && (
//           <form onSubmit={handleSignIn} className="form active-form">
//             <h2>Welcome Back 🍕</h2>
//             <div className="input-group">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <span className="input-icon">📧</span>
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span className="input-icon">🔒</span>
//             </div>
//             <button type="submit" className="submit-btn">Sign In</button>
//             <p className="switch-text">
//               Don't have an account?{" "}
//               <span onClick={() => setIsSignIn(false)}>Sign Up</span>
//             </p>
//           </form>
//         )}

//         {/* Sign Up Form */}
//         {!isSignIn && (
//           <form onSubmit={handleSignUp} className="form">
//             <h2>Create Account 🥤</h2>
//             <div className="input-group">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 required
//               />
//               <span className="input-icon">👤</span>
//             </div>
//             <div className="input-group">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <span className="input-icon">📧</span>
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span className="input-icon">🔒</span>
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//               <span className="input-icon">🔒</span>
//             </div>
//             <button type="submit" className="submit-btn">Sign Up</button>
//             <p className="switch-text">
//               Already have an account?{" "}
//               <span onClick={() => setIsSignIn(true)}>Sign In</span>
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Login = () => {
  return (
    <>
      <SignIn/>
      <SignUp/>
    </>
  )
}

export default Login
