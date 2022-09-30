import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// function slugToTitle(slug) {
//   let prevTitle = slug.split("-");
//   let afterTitle = [];

//   for (let i = 0; i < prevTitle.length; i++) {
//     afterTitle.push(prevTitle[i][0].toUpperCase() + prevTitle[i].slice(1));
//   }

//   return afterTitle.join(" ");
// }
// const title = params.slug === "cloth" ? "Khaki Cord Shirt" : slugToTitle(params.slug);

export const DetailProduct = () => {
  const params = useParams();
  const [cloth, setCloth] = useState({});
  const [img, setImg] = useState("empty.jpg");
  const [primaryImage, setPrimaryImage] = useState("empty.jpg");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
    .get("https://kawahedukasibackend.herokuapp.com/content/data/bhevin_4")
    .then(({ data }) => {
      setCloth(data.filter(e => e.description1 === params.slug)[0])
    })
  })

  useEffect(() => {
    if (cloth?.image) {
      setImg(cloth?.image)
      setPrimaryImage(cloth?.image)
      setPrice(cloth.description6.slice(0, cloth.description6.length - 3) + "." + cloth.description6.slice(cloth.description6.length - 3))
    }
  }, [cloth?.image, cloth?.description6])

  function additionalImage(order) {
    try {
      require(`./../../assets/images/products/${cloth?.image.slice(0, cloth?.image.length - 4) + `-${order}.jpg`}`);
      return `${cloth?.image.slice(0, cloth?.image.length - 4) + `-${order}.jpg`}`;
    } catch (e) {
      return img;
    }
  }

  return (
    <div className="detail mt-5">
      <div className="row m-0 justify-content-between align-items-center">
        <div className="col-lg-5 detail-img mb-lg-0 mb-5 p-0">
          <div className="detail-img-header" style={{backgroundImage: `url(${require(`./../../assets/images/products/${img}`)})`}} />
          <div className="detail-img-small row m-0">
            <div className="col-3 p-0">
              <button className="w-100" onClick={() => setImg(cloth?.image)}>
                <div
                  className="img"
                  style={{backgroundImage: `url(${require(`./../../assets/images/products/${primaryImage}`)})`}}
                />
              </button>
            </div>

            <div className="col-3 p-0">
              <button className="w-100" onClick={() => setImg(additionalImage(2))}>
                <div
                  className="img"
                  style={{backgroundImage: `url(${require(`./../../assets/images/products/${additionalImage(2)}`)})`}}
                />
              </button>
            </div>

            <div className="col-3 p-0">
              <button className="w-100" onClick={() => setImg(additionalImage(3))}>
                <div
                  className="img"
                  style={{backgroundImage: `url(${require(`./../../assets/images/products/${additionalImage(3)}`)})`}}
                />
              </button>
            </div>

            <div className="col-3 p-0">
              <button className="w-100" onClick={() => setImg(additionalImage(4))}>
                <div
                  className="img"
                  style={{backgroundImage: `url(${require(`./../../assets/images/products/${additionalImage(4)}`)})`}}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-lg-0 mt-sm-5 mt-4 p-0">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="fw-semibold text-primary2">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/clothes" className="fw-semibold text-primary2">Clothes</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {cloth?.name}
              </li>
            </ol>
          </nav>
          <div className="desc p-0">
            <h3 className="mt-5 fw-bold">{cloth?.name}</h3>
            <h4 className="mt-3">Rp {price},00</h4>
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
                <span className="me-3 text-primary2">
                  <i className="fa-solid fa-heart btn-dark"></i>
                </span>
                Add to Chart
              </button>
            </div>
            <p className="normal">
              {cloth?.description2}
            </p>
            <p className="normal">
              {cloth?.description3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}