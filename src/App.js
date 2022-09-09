import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Static Route */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* Dynamic Route */}
        <Route path="/products/:nama" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;