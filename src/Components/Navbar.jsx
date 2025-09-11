// import { Link } from "react-router-dom";
// import '../Styles/Navbar.css'
// import { Asset } from "../assets/Asset.jsx";
// // import img from 'Foodie-Logo.jpg'


// function Navbar() {
//   return (
//     <nav className="p-4 bg-gray-800 text-white flex justify-between">
  
//       <div className="logo"> 
//           <img src={Asset.logo} alt="" /> 
//           <h1>Foodie</h1>
//       </div>
//       <div className="space-x-4 items">
//         <Link to="/">Home</Link>
//         <Link to="/meenu">Menu</Link>
//         <Link to="/cart">Cart </Link>
//         <Link to="/login">Login</Link>
//         <Link to="/admin">Admin</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { NavLink } from "react-router-dom";
import '../Styles/Navbar.css'
import { Asset } from "../assets/Asset.jsx";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div className="logo"> 
        <img src={Asset.logo} alt="" /> 
        <h1>Foodie</h1>
      </div>
      <div className="space-x-4 items">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink 
          to="/meenu" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Menu
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Cart
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Login
        </NavLink>
        <NavLink 
          to="/admin" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Admin
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
