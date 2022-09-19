import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Input = (props) => {
  return (
    <input
      type={props.type || "text"}
      className={`form-control shadow-none px-3 py-2 fw-medium ${props.className}`}
      value={props.value}
      id = {props.idname}
      name = {props.idname}
      placeholder={props.placeholder}
      onChange={(el) => {
        el.preventDefault();
        props.onChange(el.target.value);
      }}
      required
    />
  )
}

// function StoreLogin(datas) {
//   for (let data in datas) {
//     if (data !== "confirmPassword") {
//       localStorage.setItem(data, datas[data]);
//     }
//   }

//   delete datas.confirmPassword;
//   localStorage.setItem("user", JSON.stringify(datas));
// }

function CheckLogin(datas) {
  // const username = localStorage.getItem("username");
  // const password = localStorage.getItem("password");

  if ("user" === datas.username && "user123" === datas.password) {
    alert("Success Login!");
    localStorage.setItem("login", true);
    document.location.href = "/";
  } else {
    alert("Failed Login!");
    document.location.href = "/login";
  }
}

export const Login = () => {
  const [formData, setFormData] = useState({});
  const [isSame, setIsSame] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  function formChange(title, value) {
    setFormData(prev => ({...prev, [title]: value}));
  }

  useEffect(() => {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    if (seePassword) {
      password.type = "text";
      confirmPassword.type = "text";
    } else {
      password.type = "password";
      confirmPassword.type = "password";
    }
  }, [seePassword]);

  return (
    <section className="login">
      <div className="row justify-content-between align-items-center h-100">
        <div className="col-lg-5 login-left order-lg-1 order-2">
          <div className="header mb-5">
            <h1>Welcome to B<span className="text-primary2">HEV</span>IN</h1>
            <p className="normal mt-3">Welcome back, please fill in data to continue</p>
          </div> 

          <form className="login-form" id="loginForm" onSubmit={e => {
            e.preventDefault();
            console.log(formData);
            isSame ? CheckLogin(formData) : alert("Password Tidak Sama!");
          }}>
            <div className="my-4">
              <label htmlFor="username" className="form-label fw-medium normal mb-2">Username</label>
              <input type="text" name="username" id="username" className="form-control shadow-none px-3 py-2 fw-medium" placeholder="eg. user" value={formData.username} required onChange={el => {
                el.preventDefault();
                formChange("username", el.target.value);
              }} />
            </div>

            <div className="my-4">
              <label htmlFor="password" className="form-label fw-medium normal mb-2">Password</label>
            <Input type="password" idname="password" placeholder={"eg. *****"} value={formData.password} onChange={
                val => {
                  formChange("password", val);
                  setIsSame(formData.confirmPassword === val);
                }
              } />
            </div>

            <div className="my-4">
              <label htmlFor="confirmPassword" className="form-label fw-medium normal mb-2">Confirm Password</label>
              <Input type="password" className={!isSame ? "border-danger" : ""} idname="confirmPassword" placeholder={"eg. *****"} onChange={val => {
                  formChange("confirmPassword", val);
                  setIsSame(formData.password === val);
                }
              } />
            </div>

            <div className="d-flex align-items-center mt-4 mb-5">
              <div className="position-relative see-password">
                <input type="checkbox" id="seePassword" name="seePassword" className="form-check-input" onClick={()=>setSeePassword(!seePassword)} />
                <h5 className={`m-0 mt-1 ${seePassword ? "d-none" : "d-block"}`} id="hide"><i className="fa-solid fa-eye-slash"></i></h5>
                <h5 className={`m-0 mt-1 ${seePassword ? "d-block" : "d-none"}`} id="show"><i className="fa-solid fa-eye"></i></h5>
              </div>
              <label htmlFor="seePassword" className="form-label fw-semibold normal ms-3 mt-2 user-select-none">See Password</label>
            </div>

            <button type="submit" className="button-login fw-semibold py-25 rounded-3">Login</button>
            <div className="text-center mt-4">
              <Link to="/" className="fw-medium normal text-primary2">Back to Home</Link>
            </div>
          </form>

        </div>
        <div className="col-lg-7 p-0 ps-lg-5 order-lg-2 order-1">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <div className="login-img" style={{backgroundImage: `url(${require("../../assets/images/login/cl-1.jpg")})`}} />
                {/* <img src={require("../../assets/images/login/cl-1.jpg")} className="d-block w-100" alt="..."/> */}
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>title / caption </h5>  */}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="login-img" style={{backgroundImage: `url(${require("../../assets/images/login/cl-2.jpg")})`}} />
                {/* <img src={require("../../assets/images/login/cl-2.jpg")}  className="d-block w-100" alt="..."/> */}
                  <div className="carousel-caption d-none d-md-block">
                  {/* <h5>title / caption</h5>  */}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="login-img" style={{backgroundImage: `url(${require("../../assets/images/login/cl-3.jpg")})`}} />
                {/* <img src={require("../../assets/images/login/cl-3.jpg")}  className="d-block w-100" alt="..."/> */}
                  <div className="carousel-caption d-none d-md-block">
                  {/* <h5>title / caption</h5>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};