import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ModalProduct = ({ showModal, toggle }) => {
  // let modalOpen = props;

  const updateProfile = (e) => {
    e.preventDefault();
    const data = {
      name: 'name',
      username: 'username',
      email: 'email',
      gender: 'gender',
      image: 'image',
      password: 'password',
    };
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle} className="">
        <ModalBody className="modalBody">
          <h1 style={{ fontWeight: '600' }}>Profile</h1>
          <form noValidate onSubmit={updateProfile}>
            <div className="form-group">
              <input
                noValidate
                type="name"
                name="name"
                placeholder="Full Name"
                // onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                noValidate
                type="username"
                name="username"
                // value={username}
                placeholder="Username"
                // onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                noValidate
                type="email"
                name="email"
                // value={email}
                placeholder="E-mail"
                // onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                noValidate
                type="gender"
                name="gender"
                placeholder="Gender"
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                noValidate
                type="password"
                name="password"
                // value={password}
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Profile Picture</label>
              <input
                noValidate
                type="file"
                name="image"
                // value={image}
                placeholder="Profile Picture"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn mr-2">
              Update
            </button>
          </form>
        </ModalBody>
      </Modal>
      {/* <Modal isOpen={modalOpen} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}
    </div>
  );
};

export default ModalProduct;
