import { useState } from "react";
import { useParams } from "react-router-dom";

function slugToTitle(slug) {
  let prevTitle = slug.split("-");
  let afterTitle = [];

  for (let i = 0; i < prevTitle.length; i++) {
    afterTitle.push(prevTitle[i][0].toUpperCase() + prevTitle[i].slice(1));
  }

  return afterTitle.join(" ");
}

export const DetailProduct = () => {
  const params = useParams();
  const title = params.slug === "cloth" ? "Khaki Cord Shirt" : slugToTitle(params.slug);

  const [img, setImg] = useState({
    src: "khaki-cord-pocket-overshirt",
  });

  return (
    <div className="detail mt-5">
      <div className="row m-0 justify-content-between align-items-center">
        <div className="col-lg-5 p-0">
          <div className="detail-img">
            <div className="detail-img-header">
              <img
                src={require(`../../assets/images/products/${title === "Khaki Cord Shirt" ? img.src : params.slug}.jpg`)}
                alt="Khaki Cord Shirt"
              />
            </div>

            <div className="detail-img-small d-flex">
              <button onClick={() => {
                setImg(() => {
                  return { src: 'khaki-cord-pocket-overshirt', }
                });
              }}>
                <div className="img" style={{
                  backgroundImage: `url(${require(`../../assets/images/products/${title === "Khaki Cord Shirt" ? "khaki-cord-pocket-overshirt" : params.slug}.jpg`)})`,
                  border: `${img.border}`
                }} />
              </button>

              <button onClick={() => {
                setImg(() => {
                  return { src: 'khaki-cord-pocket-overshirt-2', }
                });
              }}>
                <div className="img" style={{
                  backgroundImage: `url(${require(`../../assets/images/products/${title === "Khaki Cord Shirt" ? "khaki-cord-pocket-overshirt-2" : params.slug}.jpg`)})`,
                  border: `${img.border}`
                }} />
              </button>

              <button onClick={() => {
                setImg(() => {
                  return { src: 'khaki-cord-pocket-overshirt-3', }
                });
              }}>
                <div className="img" style={{
                  backgroundImage: `url(${require(`../../assets/images/products/${title === "Khaki Cord Shirt" ? "khaki-cord-pocket-overshirt-3" : params.slug}.jpg`)})`,
                  border: `${img.border}`
                }} />
              </button>

              <button onClick={() => {
                setImg(() => {
                  return { src: 'khaki-cord-pocket-overshirt-4', }
                });
              }}>
                <div className="img" style={{
                  backgroundImage: `url(${require(`../../assets/images/products/${title === "Khaki Cord Shirt" ? "khaki-cord-pocket-overshirt-4" : params.slug}.jpg`)})`,
                  border: `${img.border}`
                }} />
              </button>

              {/* <div className="img" style={{
                backgroundImage: `url(${require(`../../assets/images/products/${title === "Khaki Cord Shirt" ? "khaki-cord-pocket-overshirt" : params.slug}.jpg`)})`
              }} />
              <div className="img" style={{
                backgroundImage: `url(${require(`../../assets/images/products/${title === "Khaki Cord Shirt" ? "khaki-cord-pocket-overshirt-2" : params.slug}.jpg`)})`
              }} />
              <div className="img" style={{
                backgroundImage: `url(${require(`../../assets/images/products/${title === "Khaki Cord Shirt" ? "khaki-cord-pocket-overshirt-3" : params.slug}.jpg`)})`
              }} />
              <div className="img" style={{
                backgroundImage: `url(${require(`../../assets/images/products/${title === "Khaki Cord Shirt" ? "khaki-cord-pocket-overshirt-4" : params.slug}.jpg`)})`
              }} /> */}
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-lg-0 mt-sm-5 mt-4 p-0">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="fw-semibold text-primary2">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/clothes" className="fw-semibold text-primary2">Clothes</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
          <div className="desc p-0">
            <h3 className="mt-5 fw-bold">{title}</h3>
            <h5 className="mt-3">Rp150.000</h5>
            <select className="form-select my-4" id="inputGroupSelect02">
              <option>Select Size</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
            <div className="qty-button mb-5">
              <input type="text" className="form-control rounded-3" defaultValue="1" />
              <button className="btn btn-dark text-white fw-semibold normal rounded-3 py-25 px-sm-4 px-5 me-sm-5">
                Add to Chart
                <span className="ms-2 text-primary2">
                  <i className="fa-solid fa-chevron-right btn-dark"></i>
                </span>
              </button>
            </div>
            <p className="normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              perspiciatis optio eaque, cum, repellat cupiditate asperiores
              vitae inventore earum corporis obcaecati fugit sunt dolore
              quaerat. Consequatur architecto doloribus minus itaque.
            </p>
            <p className="normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              perspiciatis optio eaque, cum, repellat cupiditate asperiores
              vitae inventore earum corporis obcaecati fugit sunt dolo...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}