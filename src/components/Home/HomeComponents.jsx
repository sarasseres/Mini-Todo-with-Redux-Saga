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
              <p className="description fw-medium text-secondary m-0 ms-3">
                Fashion is part of the daily air and it changes all of time,
                with all the events. We only sell the best and serve you
                comfortably
              </p>
            </div>
            <div className="d-sm-flex align-items-center">
              <button className="btn btn-dark text-white fw-semibold rounded-0 py-3 px-sm-4 px-5 me-sm-5">
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
                <p className="fw-bold m-0">Explore More</p>
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
  )
}

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
  )
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
            <div className="product position-relative primary d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/ribbed-blouse-outfit.jpg")})` }}>
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
                <div className="product position-relative d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/regular-fit-overshirt.jpg")})` }}>
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
                <div className="product position-relative d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/shirt-white-a-sheen.jpg")})` }}>
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
            <div className="product position-relative d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/flared-shirt.jpg")})` }}>
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
            <div className="product position-relative d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${require("../../assets/images/products/relaxed-fit-sweatshirt.jpg")})` }}>
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
  )
}

export const TestimonialsSection = () => {
  return (
    <section className="testimonials-section pt-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <div className="subtitle">What Customers Say</div>
            <h1 className="title fw-bold lh-sm">Recent <span className="text-primary2">Reviews</span></h1>
          </div>
          <button className="btn btn-primary2 text-white rounded-4 py-2 px-5">
            <h5 className="m-0"><i className="fa-solid fa-arrow-right"></i></h5>
          </button>
        </div>
        <div className="row m-0">
          <div className="col-lg-4 ps-0 pe-lg-4 p-0 my-4">
            <div className="card rounded-3 shadow">
              <div className="card-body p-4 mt-2 border-bottom">
                <p className="fw-medium normal m-0">
                  Morbi in metus rutrum, Nunc id dolor eget dui rhoncus vehicula. Integer sit amet ante eleifend, ullamcorper lectus et, Mauris neque justo, tristique vitae massa in, malesuada suscipit nisl.
                </p>
              </div>
              <div className="card-body d-flex align-items-center justify-content-between p-4 mb-2">
                <div className="d-flex align-items-center">
                  <div className="testimonial-img rounded-circle" style={{backgroundImage: `url(${require("./../../assets/images/about/adedaudhasan.png")})`}} />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Hasan Daud Ade</p>
                    <p className="fw-semibold small m-0">Digital Marketing</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-regular fa-star"></i></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 px-lg-2 p-0 my-4">
            <div className="card rounded-3 shadow">
              <div className="card-body p-4 mt-2 border-bottom">
                <p className="fw-medium normal m-0">
                  Nullam a iaculis lacus, non ultricies magna. Donec sagittis est a est sollicitudin dignissim ac sed velit. Praesent et mi tincidunt, condimentum diam nec, finibus odio.
                </p>
              </div>
              <div className="card-body d-flex align-items-center justify-content-between p-4 mb-2">
                <div className="d-flex align-items-center">
                  <div className="testimonial-img rounded-circle" style={{backgroundImage: `url(${require("./../../assets/images/about/adeilham.jpeg")})`}} />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Ilham Ade</p>
                    <p className="fw-semibold small m-0">Developer</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star-half-stroke"></i></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ps-lg-4 pe-0 p-0 my-4">
            <div className="card rounded-3 shadow">
              <div className="card-body p-4 mt-2 border-bottom">
                <p className="fw-medium normal m-0">
                  Curabitur volutpat arcu in nisi porta vestibulum. Sed interdum nisl vel enim varius, vel venenatis risus viverra. Nunc molestie sem a justo laoreet, eget cursus justo porta. Interdum et malesuada fames ac
                </p>
              </div>
              <div className="card-body d-flex align-items-center justify-content-between p-4 mb-2">
                <div className="d-flex align-items-center">
                  <div className="testimonial-img rounded-circle" style={{backgroundImage: `url(${require("./../../assets/images/about/saras.jpg")})`}} />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Saras Dewi</p>
                    <p className="fw-semibold small m-0">Influencer</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                  <p className="ms-1 text-primary2 my-0"><i className="fa-solid fa-star"></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}