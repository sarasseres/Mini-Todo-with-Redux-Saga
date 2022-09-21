import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Layout from './layouts/Layout';
import Reducer from './bootstrap/reducer';

import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import About from './pages/About';
import Login from './pages/Login';

const store = createStore(Reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {localStorage.getItem("login") === "true" ? (
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Static Route */}
              <Route index element={<Home />} />
              <Route path="clothes" element={<Clothes />} />
              <Route path="categories" element={<Categories />} />
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
    </Provider>
  );
}

export default App;