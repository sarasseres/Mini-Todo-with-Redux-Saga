import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Layout from './layouts/Layout';

import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Detail from './pages/Detail';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          {/* Static Route */}
          <Route index element={<Home />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="about" element={<About />} />
          {/* Dynamic Route */}
          <Route path="clothes/:slug" element={<Detail />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
