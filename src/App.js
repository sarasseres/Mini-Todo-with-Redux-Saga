import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Layout from './layouts/Layout';

import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Detail from './pages/Detail';
import About from './pages/About';
import Login from './pages/Login2';

function App() {
  return (
    <BrowserRouter>
      {localStorage.getItem("login") === "true" ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Static Route */}
            <Route index element={<Home />} />
            <Route path="clothes" element={<Clothes />} />
            <Route path="about" element={<About />} />
            {/* Dynamic Route */}
            <Route path="clothes/:slug" element={<Detail />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
