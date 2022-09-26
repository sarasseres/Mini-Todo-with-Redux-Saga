import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Layout from './layouts/Layout';

import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  const auth = useSelector(state => state).access_token === undefined;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Static Route */}
          <Route index element={<Home />} />
          <Route path="clothes" element={auth ? <Navigate to="/login" /> : <Clothes />} />
          <Route path="categories" element={auth ? <Navigate to="/login" /> : <Categories />} />
          <Route path="about" element={auth ? <Navigate to="/login" /> : <About />} />
          {/* Dynamic Route */}
          <Route path="clothes/:slug" element={<Detail />} />
        </Route>
        <Route path="/login" element={auth ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;