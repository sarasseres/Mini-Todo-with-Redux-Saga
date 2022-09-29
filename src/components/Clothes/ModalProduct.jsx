import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import './style.css';

// const Input = (props) => {
//   switch (props.types) {
//     case "textarea":
//       return (
//         <textarea
//           id={props.identifier}
//           name={props.identifier}
//           placeholder={props.placeholder}
//           value={props.value}
//           className="form-control"
//           rows="4"
//           onChange={props.onChange}
//           required
//         />
//       );

//     default:
//       return (
//         <input
//           type={props.type}
//           id={props.identifier}
//           name={props.identifier}
//           placeholder={props.placeholder}
//           value={props.value}
//           className="form-control"
//           onChange={props.onChange}
//           required
//         />
//       );
//   }
// };

export const ModalProduct = (props) => {
  const [input, setInput] = useState({});
  const [showImage, setShowImage] = useState("");
  const access_token = useSelector(state => state).access_token;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://kawahedukasibackend.herokuapp.com/content/data/bhevin_4")
      .then(({ data }) => setInput(data.filter((e) => e.id === props.id)[0]));

    if (props.showModal) {
      console.log(input);
    }
  }, [props.showModal])

  useEffect(() => {
    if (input?.image) {
      setShowImage(require(`./../../assets/images/products/${input?.image}`));
    }
  }, [input?.image])

  const handleChange = (name, value) => {
    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const create = (e) => {
    input.description1 = input.name.toLowerCase().split(" ").join("-");

    axios({
      method: "post",
      url: "https://kawahedukasibackend.herokuapp.com/content/create",
      data: input,
      headers: { access_token }
    }).then(res => {
      alert(res.data.message)
      console.log(res)
      navigate("/")
    }).catch(err => console.log(err));

    e.preventDefault();
  };

  const update = (e) => {
    input.description1 = input.name.toLowerCase().split(" ").join("-");

    axios({
      method: "put",
      url: `https://kawahedukasibackend.herokuapp.com/content/update/${props.id}`,
      data: input,
      params: props.id,
      headers: { access_token }
    }).then(res => {
      alert(res.data.message)
      console.log(res)
      navigate("/")
    }).catch(err => console.log(err));

    e.preventDefault();
  }

  return (
    <Modal isOpen={props.showModal} toggle={props.toggle} ref={null}>
      <ModalHeader className="fw-bold m-0 px-4" toggle={props.toggle}>
        Add Cloth
      </ModalHeader>
      <ModalBody className="modalBody">
        <Container className="formTemplate py-4">
          <form method="post" encType="multipart/form-data" onSubmit={() => props.id ? update() : create()}>
            <div className="inputContainer detail-img-small">
              {props.id && showImage && <div className="img" style={{backgroundImage: `url(${showImage})`}} />}
              <div className="photo">
                <label className="form-label normal" htmlFor="image">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  placeholder="image"
                  className="form-control"
                  onChange={e => handleChange("image", e.target.files[0].name)}
                  required
                />
              </div>
              <div>
                <label className="form-label normal mb-2" htmlFor="name">
                  Cloth Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={input?.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="description2">
                <label className="form-label normal mb-2" htmlFor="desc">
                  Description 1
                </label>
                <textarea
                  id="description2"
                  name="description2"
                  className="form-control w-100"
                  rows="5"
                  value={input?.description2}
                  onChange={(e) => handleChange("description2", e.target.value)}
                />
              </div>
              <div className="description3">
                <label className="form-label normal mb-2" htmlFor="desc">
                  Description 2
                </label>
                <textarea
                  id="description3"
                  name="description3"
                  className="form-control w-100"
                  rows="5"
                  value={input?.description3}
                  onChange={(e) => handleChange("description3", e.target.value)}
                />
              </div>
              <div className="description4">
                <label className="form-label normal mb-2" htmlFor="desc">
                  Type
                </label>
                <select onChange={e => handleChange("description4", e.target.value)} name="description4" id="description4" className="form-select">
                  <option disabled selected hidden>Type Cloth</option>
                  {input?.description4 === "Shirt" ? <option selected value="Shirt">Shirt</option> : <option value="Shirt">Shirt</option>}
                  {input?.description4 === "Jacket" ? <option selected value="Jacket">Jacket</option> : <option value="Jacket">Jacket</option>}
                  {input?.description4 === "Dress" ? <option selected value="Dress">Dress</option> : <option value="Dress">Dress</option>}
                  {input?.description4 === "Outfit" ? <option selected value="Outfit">Outfit</option> : <option value="Outfit">Outfit</option>}
                </select>
              </div>
              <div className="description5">
                <label className="form-label normal mb-2" htmlFor="desc">
                  Category
                </label>
                <select onChange={e => handleChange("description5", e.target.value)} name="description5" id="description5" className="form-select">
                  <option disabled selected hidden>Category Cloth</option>
                  {input?.description5 === "MEN" ? <option selected value="MEN">Men</option> : <option value="MEN">Men</option>}
                  {input?.description5 === "LADIES" ? <option selected value="LADIES">Ladies</option> : <option value="LADIES">Ladies</option>}
                  {input?.description5 === "KIDS" ? <option selected value="LADIES">Kids</option> : <option value="KIDS">Kids</option>}
                  {input?.description5 === "ACCESSORIES" ? <option selected value="LADIES">Accessories</option> : <option value="ACCESSORIES">Accessories</option>}
                </select>
              </div>
              <div>
                <label className="form-label normal mb-2" htmlFor="description6">
                  Price
                </label>
                <input
                  type="number"
                  id="description6"
                  name="description6"
                  value={input?.description6}
                  onChange={(e) => handleChange("description6", e.target.value)}
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              color="success"
              onClick={props.id ? update : create}
              className="createButton py-2 mt-3 fw-semibold w-100"
              // style={{ cursor: `${isLoading ? 'not-allowed' : 'pointer'}`, backgroundColor: `${isLoading ? '#A8CC74' : '#8FBD4B'}` }}
              title="Create Contest"
            >
              {/* {isLoading ? <Spinner size="sm" color="light" className="spinner" /> : 'Create'} */}
              {props.id ? "Edit" : "Add"}
            </Button>
          </form>
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default ModalProduct;
