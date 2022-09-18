import React, { useState, useEffect } from 'react';
import { Container, Modal, ModalBody } from 'reactstrap';
import ModalProduct from './ModalProduct';

export const Header = (props) => {
  return <h1>{props.value}</h1>;
};

export const Card = (props) => {
  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  // const [input, setInput] = useState({
  //   product: null,
  //   amount: null,
  //   title: '',
  //   description: '',
  //   poster: null,
  // });

  // const toggle = (e) => {
  //   sets(e.currentTarget.id);
  //   for(let i = 0; i < submissions.length; i++) {
  //     if(e.currentTarget.id === submissions[i][0].user.participant) {
  //       setSubName(submissions[i][0].user.participant);
  //       setSubDesc(submissions[i][0].description);
  //     }
  //   }
  // console.log(openModal, 'hiyaa');
  return (
    <div className="card shadow-lg p-0">
      <img src={props.image} className="card-img-top rounded-0" alt="gambar" />

      <div className="card-body p-0 text-center">
        <h4 className="card-title fw-semibold px-3 mt-4">{props.title}</h4>
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
  );
};

// export const Buttoni = (val) => {
//   return (
//     <button type="button" className="btn btn-outline-secondary">
//       <p>{val.text}</p>
//     </button>
//   );
// };
