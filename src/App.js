import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Layout from './layouts/Layout';
import * as Pages from './pages';

function App() {
  const auth = useSelector(state => state).access_token === undefined;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Static Route */}
          <Route index element={<Pages.Home />} />
          <Route path="clothes" element={auth ? <Navigate to="/login" /> : <Pages.Clothes />} />
          <Route path="categories" element={auth ? <Navigate to="/login" /> : <Pages.Categories />} />
          <Route path="about" element={auth ? <Navigate to="/login" /> : <Pages.About />} />
          {/* Dynamic Route */}
          <Route path="clothes/:slug" element={auth ? <Navigate to="/login" /> : <Pages.Detail />} />
          <Route path="categories/:category" element={auth ? <Navigate to="/login" /> : <Pages.Clothes />} />
        </Route>
        <Route path="/login" element={auth ? <Pages.Login /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
