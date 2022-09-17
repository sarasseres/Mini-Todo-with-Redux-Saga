import { useEffect, useState } from "react";
import "./style.css";

const Input = (props) => {
  return (
    <input
      type={props.type || "text"}
      className={`form-control px-3 py-2 fw-medium ${props.className}`}
      value={props.value}
      id = {props.idname}
      name = {props.idname}
      placeholder={props.placeholder}
      onChange={(el) => {
        el.preventDefault();
        props.onChange(el.target.value);
      }}
    />
  )
}

// function StoreLogin(datas) {
//   for (let data in datas) {
//     if (data !== "confirmPassword") {
//       localStorage.setItem(data, datas[data]);
//       alert("OK");
//     }
//   }

//   delete datas.confirmPassword;
//   localStorage.setItem("user", JSON.stringify(datas));
// }

function CheckLogin(datas) {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username === datas.username && password === datas.password) {
    alert("Success Login!");
    localStorage.setItem("login", true);
    document.location.href = "/";
  } else {
    alert("Failed Login!");
    document.location.href = "/login";
  }
}

const Login = () => {
  const [formData, setFormData] = useState({username: "", password: "", confirmPassword: ""});
  const [isSame, setIsSame] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  useEffect(()=>{
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
    <div className="container mt-5">
      <h1 className="mb-5">Halaman Login</h1>
      <form id="loginForm" onSubmit={e => {
          e.preventDefault();
          console.log(formData);
          isSame ? CheckLogin(formData) : alert("Password Tidak Sama!");
        }
      }>
        <div className="my-4">
          <label htmlFor="username" className="form-label fw-medium normal mb-2">Username</label>
          <input type="text" name="username" id="username" className="form-control px-3 py-2 fw-medium" placeholder="eg. user" value={formData.username} onChange={el => {
            el.preventDefault();
            setFormData(prev => ({...prev, username: el.target.value}));
          }} />
        </div>
        {/* <div className="my-4">
          <label htmlFor="password" className="form-label fw-medium normal mb-2">Password</label>
          <input type="password" name="password" id="password" className="form-control px-3 py-2 fw-medium" placeholder="eg. *****" value={formData.password} onChange={el => {
            el.preventDefault();
            setFormData(prev => ({...prev, password: el.target.value}));
            setIsSame(el.target.value === formData.confirmPassword);
          }} />
        </div>
        <div className="my-4">
          <label htmlFor="confirmPassword" className="form-label fw-medium normal mb-2">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" className={`form-control px-3 py-2 fw-medium ${!isSame ? "border-danger" : ""}`} placeholder="eg. *****" value={formData.confirmPassword} onChange={el => {
            el.preventDefault();
            setFormData(prev => ({...prev, confirmPassword: el.target.value}));
            setIsSame(el.target.value === formData.password);
          }} />
        </div> */}
        <div className="my-4">
          <label htmlFor="password" className="form-label fw-medium normal mb-2">Password</label>
          <Input type="password" idname="password" placeholder={"eg. *****"} value={formData.password} onChange={
            val => {
              setFormData(prev => ({...prev, password: val}));
              setIsSame(formData.confirmPassword === val);
            }
          } />
        </div>
        <div className="my-4">
          <label htmlFor="confirmPassword" className="form-label fw-medium normal mb-2">Confirm Password</label>
          <Input type="password" className={!isSame ? "border-danger" : ""} idname="confirmPassword" placeholder={"eg. *****"} onChange={val => {
              setFormData(prev => ({...prev, confirmPassword: val}));
              setIsSame(formData.password === val);
            }
          } />
        </div>
        <div className="d-flex align-items-center">
          <div className="position-relative see-password">
            <input type="checkbox" id="seePassword" name="seePassword" className="form-check-input" onClick={()=>setSeePassword(!seePassword)} />
            <h5 className={`m-0 mt-1 ${seePassword ? "d-none" : "d-block"}`} id="hide"><i className="fa-solid fa-eye-slash"></i></h5>
            <h5 className={`m-0 mt-1 ${seePassword ? "d-block" : "d-none"}`} id="show"><i className="fa-solid fa-eye"></i></h5>
          </div>
          <label htmlFor="seePassword" className="form-label fw-semibold normal ms-3 mt-2 user-select-none">See Password</label>
        </div>
        <button type="submit" className="btn btn-success w-100 mt-4 fw-semibold py-25">Click Me</button>
      </form>
    </div>
  )
}

export default Login;