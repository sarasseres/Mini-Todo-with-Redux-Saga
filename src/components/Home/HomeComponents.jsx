import { useNavigate } from "react-router-dom";

const PartnersImage = (props) => {
  return (
    <img
      src={props.value}
      alt="partners"
      width="80%"
    />
  );
};

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 pe-0 order-lg-1 order-2">
            <div className="subtitle">Perfect Clothing Store</div>
            <h1 className="fw-bolder lh-base title">
              The Best Place To Find And Buy <span>Amazing</span> Brand New{" "}
              <span>Clothes</span>
            </h1>
            <div className="d-flex align-items-center mt-4 mb-5">
              <div className="description-border"></div>
              <p className="description fw-medium text-secondary normal m-0 ms-3">
                Fashion is part of the daily air and it changes all of time,
                with all the events. We only sell the best and serve you
                comfortably
              </p>
            </div>
            <div className="d-sm-flex align-items-center">
              <button className="btn btn-dark text-white fw-semibold normal rounded-3 py-25 px-sm-4 px-5 me-sm-5">
                Start Shopping
                <span className="ms-2 text-primary2">
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </button>
              <a
                href="/"
                className="d-flex align-items-center flex-wrap text-primary2 mt-sm-0 mt-4"
              >
                <h3 className="me-3 m-0">
                  <i className="fa-solid fa-circle-play"></i>
                </h3>
                <p className="fw-bold normal m-0">Explore More</p>
              </a>
            </div>
          </div>
          <div className="col-lg-7 p-0 ps-lg-5 order-lg-2 order-1 mb-lg-0 mb-5">
            <img
              src={require("../../assets/images/hero.png")}
              alt="hero"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnersSection = () => {
  return (
    <section className="partners-section text-center">
      <div className="subtitle">Partnership</div>
      <h1 className="title fw-bold mb-5">Our Partners</h1>
      <div className="bg-main partners">
        <div className="container">
          <div className="row justify-content-sm-between justify-content-center align-items-center m-0 py-5">
            <div className="col-md-2 col-sm-5 col-7 p-0">
              <PartnersImage value={require("../../assets/images/partners/partners1.png")} />
            </div>
            <div className="col-md-2 col-sm-5 col-7 mt-5 mt-sm-0 p-0">
              <PartnersImage value={require("../../assets/images/partners/partners2.png")} />
            </div>
            <div className="col-md-2 col-sm-5 col-7 mt-5 mt-md-3 p-0 mt-3">
              <PartnersImage value={require("../../assets/images/partners/partners3.png")} />
            </div>
            <div className="col-md-2 col-sm-5 col-7 mt-5 mt-md-0 p-0">
              <PartnersImage value={require("../../assets/images/partners/partners4.png")} />
            </div>
            <div className="col-md-2 col-sm-5 col-7 mt-5 mt-md-0 p-0">
              <PartnersImage value={require("../../assets/images/partners/partners5.png")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PromotionSection = () => {
  return (
    <section className="promotion-section">
      <div className="container">
        <div className="row m-0 justify-content-between align-items-center">
          <div className="col-lg-6 pe-0 mb-lg-0 mb-5">
            <img src={require("../../assets/images/promotion.png")} alt="promotion" width="100%" />
          </div>
          <div className="col-lg-5 ps-0">
            <div className="subtitle">Promotion</div>
            <h1 className="title fw-bold lh-base">The <span className="bg-primary2 text-white">Ultimate Clothing</span> To See The World In</h1>
            <h6 className="fw-medium mt-4 mb-5 text-secondary lh-base">
              Anyone can get dressed up and glamorious, but it is how people dress in their days off that are the most intriguing
            </h6>
            <button className="btn p-0"><h5 className="m-0 fw-bold lh-lg">Find Out More <i className="fa-solid fa-arrow-trend-up ms-2"></i></h5></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const ProductsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="products-section">
      <div className="container">
        <div className="text-center">
          <div className="subtitle">Best Products</div>
          <h1 className="title fw-bold lh-sm mb-5">This week's <span className="text-primary2">newest</span> and <br /><span className="text-primary2">best selling</span> products</h1>
        </div>
        <div className="row justify-content-between m-0">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
            <div className="product position-relative primary d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/products1.jpg")})` }}>
              <small className="category fw-semibold position-absolute py-1 px-3">LADIES</small>
              <div className="product-content d-flex justify-content-between align-items-center py-25 px-4">
                <p className="fw-semibold text-white normal m-0">Rp. 400.000,00</p>
                <button onClick={()=>navigate("/products/product")} className="btn btn-dark fw-semibold normal px-md-4 px-3 rounded-0">
                  BUY NOW
                  <span className="text-primary2 ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="row m-0">
              <div className="col-12 p-0 pb-2">
                <div className="product position-relative d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/products2.jpg")})` }}>
                  <small className="category fw-semibold position-absolute py-1 px-3">MEN</small>
                  <div className="product-content d-flex justify-content-between align-items-center py-25 px-4">
                    <p className="fw-semibold text-white normal m-0">Rp. 280.000,00</p>
                    <button onClick={()=>navigate("/products/product")} className="btn btn-dark fw-semibold normal px-md-4 px-3 rounded-0">
                      BUY NOW
                      <span className="text-primary2 ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 p-0 pt-3">
                <div className="product position-relative d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/products4.jpg")})` }}>
                  <small className="category fw-semibold position-absolute py-1 px-3">LADIES</small>
                  <div className="product-content d-flex justify-content-between align-items-center py-25 px-4">
                    <p className="fw-semibold text-white normal m-0">Rp. 450.000,00</p>
                    <button onClick={()=>navigate("/products/product")} className="btn btn-dark fw-semibold normal px-md-4 px-3 rounded-0">
                      BUY NOW
                      <span className="text-primary2 ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 pt-4">
            <div className="product position-relative d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/products5.jpg")})` }}>
              <small className="category fw-semibold position-absolute py-1 px-3">LADIES</small>
              <div className="product-content d-flex justify-content-between align-items-center py-25 px-4">
                <p className="fw-semibold text-white normal m-0">Rp. 519.999,00</p>
                <button onClick={()=>navigate("/products/product")} className="btn btn-dark fw-semibold normal px-md-4 px-3 rounded-0">
                  BUY NOW
                  <span className="text-primary2 ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 pt-4">
            <div className="product position-relative d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/products3.jpg")})` }}>
              <small className="category fw-semibold position-absolute py-1 px-3">MEN</small>
              <div className="product-content d-flex justify-content-between align-items-center py-25 px-4">
                <p className="fw-semibold text-white normal m-0">Rp. 340.000,00</p>
                <button onClick={()=>navigate("/products/product")} className="btn btn-dark fw-semibold normal px-md-4 px-3 rounded-0">
                  BUY NOW
                  <span className="text-primary2 ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}