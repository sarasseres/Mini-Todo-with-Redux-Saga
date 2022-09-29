import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../bootstrap/action';

const Input = (props) => {
  return (
    <input
      type={props.type || 'text'}
      className={`form-control shadow-none px-3 py-2 fw-medium ${props.className}`}
      value={props.value}
      id={props.idname}
      name={props.idname}
      placeholder={props.placeholder}
      onChange={(el) => {
        el.preventDefault();
        props.onChange(el.target.value);
      }}
      required
    />
  );
};

export const Login = () => {
  const [formData, setFormData] = useState({});
  const [isSame, setIsSame] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const [error, setError] = useState(false);

  // const users = useSelector(state => state).users;
  const dispatch = useDispatch();

  function checkLogin(datas) {
    axios({
      method: 'post',
      url: 'https://kawahedukasibackend.herokuapp.com/login',
      data: datas,
    })
      .then(({ data }) => {
        alert('Success Login!');
        dispatch(setAuth({ access_token: data?.access_token }));
      })
      .catch((err) => {
        setError(true);
        console.log(err.message);
      });
  }

  function formChange(title, value) {
    setFormData((prev) => ({ ...prev, [title]: value }));
  }

  useEffect(() => {
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');

    if (seePassword) {
      password.type = 'text';
      confirmPassword.type = 'text';
    } else {
      password.type = 'password';
      confirmPassword.type = 'password';
    }
  }, [seePassword]);

  return (
    <section className="login">
      {error ? (
        <div className="alert fixed-top alert-danger alert-dismissible fade show ps-md-5 m-0" role="alert">
          <p className="fw-bold text-danger m-0">Username atau Password Salah!</p>
          <button type="button" className="btn-close shadow-none me-md-5" data-bs-dismiss="alert" onClick={() => setError(false)} aria-label="Close"></button>
        </div>
      ) : (
        ''
      )}
      <div className="row justify-content-between align-items-center h-100">
        <div className="col-lg-5 login-left order-lg-1 order-2">
          <div className="header mb-5">
            <h1>
              Welcome to B<span className="text-primary2">HEV</span>IN
            </h1>
            <p className="normal mt-3">Welcome back, please fill in data to continue</p>
          </div>

          <form
            className="login-form"
            id="loginForm"
            onSubmit={(e) => {
              e.preventDefault();
              isSame ? checkLogin(formData) : alert('Password Tidak Sama!');
            }}
          >
            <div className="my-4">
              <label htmlFor="username" className="form-label fw-medium normal mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control shadow-none px-3 py-2 fw-medium"
                placeholder="eg. user"
                value={formData.username || ''}
                required
                onChange={(el) => {
                  el.preventDefault();
                  formChange('username', el.target.value);
                }}
              />
            </div>

            <div className="my-4">
              <label htmlFor="password" className="form-label fw-medium normal mb-2">
                Password
              </label>
              <Input
                type="password"
                idname="password"
                placeholder={'eg. *****'}
                value={formData.password || ''}
                onChange={(val) => {
                  formChange('password', val);
                  setIsSame(formData.confirmPassword === val);
                }}
              />
            </div>

            <div className="my-4">
              <label htmlFor="confirmPassword" className="form-label fw-medium normal mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                className={!isSame ? 'border-danger' : ''}
                idname="confirmPassword"
                placeholder={'eg. *****'}
                onChange={(val) => {
                  formChange('confirmPassword', val);
                  setIsSame(formData.password === val);
                }}
              />
            </div>

            <div className="d-flex align-items-center mt-4 mb-5">
              <div className="position-relative see-password cursor-pointer">
                <input type="checkbox" id="seePassword" name="seePassword" className="form-check-input" onClick={() => setSeePassword(!seePassword)} />
                <h5 className={`m-0 mt-1 ${seePassword ? 'd-none' : 'd-block'}`} id="hide">
                  <i className="fa-solid fa-eye-slash"></i>
                </h5>
                <h5 className={`m-0 mt-1 ${seePassword ? 'd-block' : 'd-none'}`} id="show">
                  <i className="fa-solid fa-eye"></i>
                </h5>
              </div>
              <label htmlFor="seePassword" className="form-label cursor-pointer fw-semibold normal ms-3 mt-2 user-select-none">
                See Password
              </label>
            </div>

            <button type="submit" className="button-login fw-semibold py-25 rounded-3">
              Login
            </button>
            <div className="text-center mt-4">
              <Link to="/" className="fw-medium normal text-primary2">
                Back to Home
              </Link>
            </div>
          </form>
        </div>
        <div className="col-lg-7 p-0 ps-lg-5 order-lg-2 order-1">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <div className="login-img" style={{ backgroundImage: `url(${require('../../assets/images/login/cl-1.jpg')})` }} />
                {/* <img src={require("../../assets/images/login/cl-1.jpg")} className="d-block w-100" alt="..."/> */}
                <div className="carousel-caption d-none d-md-block">{/* <h5>title / caption </h5>  */}</div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="login-img" style={{ backgroundImage: `url(${require('../../assets/images/login/cl-2.jpg')})` }} />
                {/* <img src={require("../../assets/images/login/cl-2.jpg")}  className="d-block w-100" alt="..."/> */}
                <div className="carousel-caption d-none d-md-block">{/* <h5>title / caption</h5>  */}</div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="login-img" style={{ backgroundImage: `url(${require('../../assets/images/login/cl-3.jpg')})` }} />
                {/* <img src={require("../../assets/images/login/cl-3.jpg")}  className="d-block w-100" alt="..."/> */}
                <div className="carousel-caption d-none d-md-block">{/* <h5>title / caption</h5>  */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
