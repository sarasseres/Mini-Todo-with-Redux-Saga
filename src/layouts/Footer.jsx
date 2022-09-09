import "./style.css";

const Footer = () => {
  return (
    <>
      <footer className="py-5 bg-light-primary mt-5">
        <div className="container">
          <div className="row justify-content-between px-3 px-md-0">
            <div className="col-lg-4 ps-0 ps-lg-3 pe-0 mb-5 mb-lg-0 footer-brand">
              <a href="/">
                <h2 className="fw-bold mt-2 text-black">
                  B <span>H</span>
                  <span className="rotate">EV</span>I N
                </h2>
              </a>
              <p className="fw-medium small my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia natus, in modi perferendis atque eum repudiandae ipsam
                dolor similique. Adipisci laborum minima rerum nostrum veniam.
              </p>
              <div className="d-flex align-items-center">
                <p className="sosial m-0 me-4 cursor-pointer">
                  <i className="fa-brands fa-instagram"></i>
                </p>
                <p className="sosial m-0 me-4 cursor-pointer">
                  <i className="fa-brands fa-youtube"></i>
                </p>
                <p className="sosial m-0 me-4 cursor-pointer">
                  <i className="fa-brands fa-twitter"></i>
                </p>
                <p className="sosial m-0 me-4 cursor-pointer">
                  <i className="fa-brands fa-github"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-1 p-0 mb-4 mb-lg-0">
              <h6 className="fw-bold mb-4">Company</h6>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                About
              </a>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                Event
              </a>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                Blog
              </a>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                FAQ
              </a>
            </div>
            <div className="col-lg-1 p-0 mb-4 mb-lg-0">
              <h6 className="fw-bold mb-4">Resources</h6>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                How it Works
              </a>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                Features
              </a>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                Cookie
              </a>
            </div>
            <div className="col-lg-1 p-0 mb-4 mb-lg-0">
              <h6 className="fw-bold mb-4">Help</h6>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                Term of Service
              </a>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                Privacy Policy
              </a>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                Support
              </a>
              <a href="/" className="link d-block text-black small my-3 fw-medium">
                Career
              </a>
            </div>
            <div className="col-lg-2 p-0">
              <h6 className="fw-bold mb-4">Contact Us</h6>
              <div className="link d-flex align-items-center cursor-pointer">
                <h5>
                  <i className="fa-solid fa-location-dot"></i>
                </h5>
                <p className="mt-1 ms-3 small fw-medium">
                  Jalan Venus, Blok Andreas No.16
                </p>
              </div>
              <div className="link d-flex align-items-center cursor-pointer">
                <h6>
                  <i className="fa-solid fa-envelope"></i>
                </h6>
                <p className="mt-1 ms-3 small fw-medium">
                  supportcenter@bhevin.com
                </p>
              </div>
              <div className="link d-flex align-items-center cursor-pointer mt-1">
                <h6>
                  <i className="fa-solid fa-phone"></i>
                </h6>
                <p className="mt-2 ms-3 small fw-medium">+628991813547</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p className="fw-semibold normal text-white m-0">
          &copy; Copyright 2022 Team Bhevin All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;