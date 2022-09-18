import React, { useState } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import './style.css';

export const ModalProduct = (props) => {
  // let modalOpen = props;

  // const updateProfile = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     name: 'name',
  //     username: 'username',
  //     email: 'email',
  //     gender: 'gender',
  //     image: 'image',
  //     password: 'password',
  //   };
  // };
  
  // const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({});
  const handleChange = (name, value) => {
    // setInput({
    //   ...input,
    //   [name]: value,
    // });
    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submit = (e) => {
    console.log(input);
    e.preventDefault();
  };

  return (
    <Modal isOpen={props.showModal} toggle={props.toggle} ref={null}>
      <ModalHeader className="fw-bold m-0 px-4" toggle={props.toggle}>
        Add Cloth
      </ModalHeader>
      <ModalBody className="modalBody">
        <Container className="formTemplate py-4">
          <form onSubmit={() => submit()}>
            <div className="inputContainer">
              <div className="photo">
                <label className="form-label normal mb-2" htmlFor="poster">
                  Poster Image
                </label>
                <input
                  type="file"
                  id="poster"
                  name="poster"
                  placeholder="poster"
                />
              </div>
              <div>
                <label className="form-label normal mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Product Title"
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>
              <div>
                <label className="form-label normal mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="5000000"
                  onChange={(e) => handleChange("price", e.target.value)}
                />
              </div>
              <div>
                {" "}
                <label className="form-label normal mb-2" htmlFor="date">
                  Due Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="due_date"
                  placeholder="YYYY-MM-DD"
                  onChange={(e) => handleChange("due_date", e.target.value)}
                />
              </div>
              <div>
                <label
                  className="form-label normal mb-2"
                  htmlFor="announcement"
                >
                  Announcement
                </label>
                <input
                  type="date"
                  id="announcement"
                  name="announcement"
                  placeholder="YYYY-MM-DD"
                  onChange={(e) => handleChange("announcement", e.target.value)}
                />
              </div>

              <div className="description">
                <label className="form-label normal mb-2" htmlFor="desc">
                  Description
                </label>
                <textarea
                  id="desc"
                  name="desc"
                  className="form-control w-100"
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>
            </div>
            <Button
              type="submit"
              color="success"
              className="createButton py-25 mt-3 fw-semibold w-100"
              onClick={submit}
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
