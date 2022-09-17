export const Login = () => {
    return ( 
      <section className="login d-flex">
        <div className="login-left w-50 h-100">
  
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-8">
  
              <div className="header">
                <h1>Welcome! </h1>
                <p className="normal">Welcome back, please fill in data to continue</p>
              </div> 
  
              <div className="login-form">  
                <label for="username" className="form-label">Username </label>
                <input type="username" className="form-control" id="username" placeholder="Enter your username"/>
  
                <label for="password" className="form-label">Password </label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
  
                <label for="confirm-password" className="form-label">Confirm Password </label>
                <input type="password" className="form-control" id="confirm-password" placeholder="Enter your confirm password"/>
  
                <div className="custom-control custom-checkbox sp">
                  <input type="checkbox" className="custom-control-input" id="see-password"/>
                  <label className="custom-control-label ms-3" for="see-password">See Password</label>
                </div> 
  
                <button className="button-login fw-semibold py-25 rounded-3">Login</button>
                 
                 
                
              </div>
  
            </div>
          </div>
  
          
        </div> 
  
        <div className="login-right w-50 h-100">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <div className="login-img" style={{backgroundImage: `url(${require("../../assets/images/login/cl-1.jpg")})`}} />
                {/* <img src={require("../../assets/images/login/cl-1.jpg")} className="d-block w-100" alt="..."/> */}
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>title / caption </h5>  */}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div className="login-img" style={{backgroundImage: `url(${require("../../assets/images/login/cl-2.jpg")})`}} />
                {/* <img src={require("../../assets/images/login/cl-2.jpg")}  className="d-block w-100" alt="..."/> */}
                 <div className="carousel-caption d-none d-md-block">
                  {/* <h5>title / caption</h5>  */}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div className="login-img" style={{backgroundImage: `url(${require("../../assets/images/login/cl-3.jpg")})`}} />
                {/* <img src={require("../../assets/images/login/cl-3.jpg")}  className="d-block w-100" alt="..."/> */}
                 <div className="carousel-caption d-none d-md-block">
                  {/* <h5>title / caption</h5>  */}
                </div>
              </div>
            </div>
          </div>
        </div> 
  
      </section>
  
      );
  };