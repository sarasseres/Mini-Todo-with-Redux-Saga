import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import './style.css';

export const ModalProduct = (props) => {
  const [input, setInput] = useState({});
  const [cloth, setCloth] = useState({});
  const access_token = useSelector(state => state).access_token;

  useEffect(() => {
    axios
      .get("https://kawahedukasibackend.herokuapp.com/content/data/mukti")
      .then(({ data }) => setCloth(data.filter(e => e.id === props.id)[0]));
  }, [props.showModal]);

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
    }).then(res => console.log(res)).catch(err => console.log(err));

    e.preventDefault();
  };

  const update = (e) => {
    e.preventDefault();
  }

  return (
    <Modal isOpen={props.showModal} toggle={props.toggle} ref={null}>
      <ModalHeader className="fw-bold m-0 px-4" toggle={props.toggle}>
        Add Cloth
      </ModalHeader>
      <ModalBody className="modalBody">
        <Container className="formTemplate py-4">
          <form method="post" encType="multipart/form-data" onSubmit={() => create()}>
            <div className="inputContainer">
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
                  placeholder="Cloth Name"
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
                  onChange={(e) => handleChange("description3", e.target.value)}
                />
              </div>
              <div className="description4">
                <label className="form-label normal mb-2" htmlFor="desc">
                  Type
                </label>
                <select onChange={e => handleChange("description4", e.target.value)} name="description4" id="description4" className="form-select">
                  <option disabled selected hidden>Type Cloth</option>
                  <option value="shirt">Shirt</option>
                  <option value="jacket">Jacket</option>
                  <option value="dress">Dress</option>
                </select>
              </div>
              <div className="description5">
                <label className="form-label normal mb-2" htmlFor="desc">
                  Category
                </label>
                <select onChange={e => handleChange("description5", e.target.value)} name="description5" id="description5" className="form-select">
                  <option disabled selected hidden>Category Cloth</option>
                  <option value="men">Men</option>
                  <option value="ladies">Ladies</option>
                  <option value="kids">Kids</option>
                  <option value="accessories">Accessories</option>
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
                  placeholder="5000000"
                  onChange={(e) => handleChange("description6", e.target.value)}
                />
              </div>
            </div>
            <Button
              type="submit"
              color="success"
              className="createButton py-2 mt-3 fw-semibold w-100"
              // style={{ cursor: `${isLoading ? 'not-allowed' : 'pointer'}`, backgroundColor: `${isLoading ? '#A8CC74' : '#8FBD4B'}` }}
              title="Create Contest"
            >
              {/* {isLoading ? <Spinner size="sm" color="light" className="spinner" /> : 'Create'} */}
              Add
            </Button>
          </form>
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default ModalProduct;
