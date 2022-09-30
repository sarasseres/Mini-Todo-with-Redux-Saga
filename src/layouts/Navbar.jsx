import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuth } from '../bootstrap/action';
import './style.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state).access_token;
  // const user = useSelector(state => state).users.filter(user => user.access_token === auth)[0];

  const navs = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Clothes',
      path: '/clothes',
    },
    {
      title: 'Categories',
      path: '/categories',
    },
    // {
    //   title: "Cloth",
    //   path: "/clothes/cloth"
    // },
    {
      title: 'About',
      path: '/about',
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg pt-4">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h2 className="fw-bold mt-2">
            B <span>H</span>
            <span className="rotate">EV</span>I N
          </h2>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            {navs.map((el, id) => {
              return (
                <div key={id} onClick={() => navigate(el.path)} className={`nav-link cursor-pointer fw-semibold ms-lg-5 ${location.pathname === el.path ? 'active' : ''}`}>
                  {el.title}
                </div>
              );
            })}
          </div>
          <div className="d-none d-lg-flex align-items-center">
            <div className="position-relative cursor-pointer">
              <img src={require('../assets/icons/cart.png')} alt="cart" width="24" />
              <div className="fill"></div>
            </div>
            {auth ? (
              <div className="d-flex align-items-center cursor-pointer ms-5" onClick={() => dispatch(setAuth({ access_token: undefined }))}>
                <img src={require('../assets/icons/user.png')} alt="cart" width="19" />
                <p className="m-0 ms-3 fw-semibold m-0">Bhevin_4</p>
              </div>
            ) : (
              <div className="ms-5">
                <img src={require('../assets/icons/user.png')} alt="cart" width="19" className="cursor-pointer" onClick={() => navigate('/login')} />
              </div>
            )}
          </div>
          {auth ? (
            <button className="btn btn-login w-100 d-block d-lg-none mt-3" onClick={() => dispatch(setAuth({ access_token: undefined }))}>
              <i className="fa-solid fa-user me-2"></i>
              Logout
            </button>
          ) : (
            <button className="btn btn-login w-100 d-block d-lg-none mt-3" onClick={() => navigate('/login')}>
              <i className="fa-solid fa-user me-2"></i>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
