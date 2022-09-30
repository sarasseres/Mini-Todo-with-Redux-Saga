import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModalProduct from "./ModalProduct";

export const Header = (props) => {
  return <h1>{props.value}</h1>;
};

export const Card = (props) => {
  const navigate = useNavigate();
  const access_token = useSelector(state => state).access_token;
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState(false);

  function Delete(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary2 text-dark fw-medium px-3',
        cancelButton: 'btn btn-secondary fw-medium me-4 px-3'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      background: '#252336',
      color: '#3dcd55',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `https://kawahedukasibackend.herokuapp.com/content/delete/${id}`,
          params: id,
          headers: { access_token }
        }).then(({ data }) => {
          swalWithBootstrapButtons.fire({
            background: '#252336',
            color: '#3dcd55',
            title: 'Deleted!',
            text: data.message,
            icon: 'success',
          });
          navigate("/");
        }).catch(err => {
          alert(err.data)
          console.log(err)
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          background: '#252336',
          color: '#3dcd55',
          title: 'Canceled!',
          text: 'Delete cloth is cancel.',
          icon: 'error',
        })
      }
    })
  }

  return (
    <div>
      <ModalProduct showModal={showModal} toggle={()=>setShowModal(!showModal)} id={props.id} />
      <div className="d-flex justify-content-center">
        <button className="btn btn-dark text-primary2 small shadow-lg rounded-0" onClick={()=>setShowModal(!showModal)}><i className="fa-solid fa-pen"></i></button>
        <button className="btn btn-dark text-primary2 small shadow-lg rounded-0" onClick={()=>Delete(props.id)}><i className="fa-solid fa-trash"></i></button>
      </div>
      <div className="card shadow-lg p-0">
        <div className="position-relative">
          <div className="card-img-top rounded-0" style={{
            backgroundImage: `url(${props.image ? props.image : require("./../../assets/images/products/empty.jpg")})`
          }} />
          <div className={`btn cart-button position-absolute rounded-circle ${cart ? "bg-dark text-primary2" : "bg-white"}`} onClick={()=>setCart(!cart)}>
            <h5 className="m-0"><i class="fa-solid fa-heart"></i></h5>
          </div>
        </div>
        <div className="card-body p-0 text-center">
          <h4 className="card-title fw-bold px-3 mt-4">{props.title}</h4>
          <p className="card-desc normal fw-medium text-secondary px-3 mt-3 mb-4">{props.desc}</p>
          <div className="hr mb-4" />
          <h3 className="fw-bold mb-4">{props.price ? props.price.substr(0, props.price.length - 3) + "." + props.price.substr(props.price.length - 3) + ",00" : "?"}</h3>
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
