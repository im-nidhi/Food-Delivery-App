import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Meenu from "./Pages/Meenu";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";

import Footer from "./Components/Footer";
import CategoryPage from "./Pages/CategoryPage";
import StoreContextProvider from "./Context/Context";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meenu" element={<Meenu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
