import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import ModalProduct from "./ModalProduct";

export const Header = (props) => {
  return <h1>{props.value}</h1>;
};

export const Card = (props) => {
  const access_token = useSelector(state => state).access_token;
  const [showModal, setShowModal] = useState(false);

  function Delete(id) {
    axios({
      method: "delete",
      url: `https://kawahedukasibackend.herokuapp.com/content/delete/${id}`,
      params: id,
      headers: { access_token }
    }).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <div>
      <ModalProduct isOpen={showModal} toggle={!showModal} />
      <div className="d-flex justify-content-center">
        <button className="btn btn-info text-white small shadow-lg rounded-0" onClick={()=>setShowModal(!showModal)}><i className="fa-solid fa-pen"></i></button>
        <button className="btn btn-danger text-white small shadow-lg rounded-0" onClick={()=>window.confirm("Are sure want delete?")?Delete(props.id):""}><i className="fa-solid fa-trash"></i></button>
      </div>
      <div className="card shadow-lg p-0">
        <img src={props.image} className="card-img-top rounded-0" alt="gambar" />
        <div className="card-body p-0 text-center">
          <h4 className="card-title fw-bold px-3 mt-4">{props.title}</h4>
          <p className="card-desc normal fw-medium text-secondary px-3 mt-3 mb-4">{props.desc}</p>
          <div className="hr mb-4" />
          <h3 className="fw-bold mb-4">{props.price}</h3>
          <button onClick={props.onClick} className="btn btn-dark fw-semibold w-100 p-3 rounded-0 ">
            BUY NOW
            <span className="text-primary2 ms-2">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// export const Buttoni = (val) => {
//   return (
//     <button type="button" className="btn btn-outline-secondary">
//       <p>{val.text}</p>
//     </button>
//   );
// };
