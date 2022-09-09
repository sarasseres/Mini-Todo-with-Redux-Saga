import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg py-3 mb-4">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h2 className="fw-bold mt-2">B <span>H</span><span className="rotate">EV</span>I N</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <div onClick={() => navigate("/")} className={`nav-link cursor-pointer fw-medium normal me-lg-4 ${location.pathname === "/" ? " active" : ""}`}>
              Home
            </div>
            <div onClick={() => navigate("/products")} className={`nav-link cursor-pointer fw-medium normal me-lg-4 ${location.pathname === "/products" ? " active" : ""}`}>
              Products
            </div>
            <div onClick={() => navigate("/categories")} className={`nav-link cursor-pointer fw-medium normal me-lg-4 ${location.pathname === "/categories" ? " active" : ""}`}>
              Categories
            </div>
            <div onClick={() => navigate("/hot-sale")} className={`nav-link cursor-pointer fw-medium normal me-lg-4 ${location.pathname === "/hot-sale" ? " active" : ""}`}>
              Hot Sale
            </div>
          </div>
          <div className="d-none d-lg-flex align-items-center">
            <div className="position-relative me-5 cursor-pointer">
              <img src={require('../assets/icons/cart.png')} alt="cart" width="24" />
              <div className="fill"></div>
            </div>
            <img src={require('../assets/icons/user.png')} alt="cart" width="19" className="cursor-pointer" />
          </div>
          <button className="btn btn-login w-100 d-block d-lg-none mt-3" onClick={()=>navigate("/")}>
            <i className="fa-solid fa-user me-2"></i>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;