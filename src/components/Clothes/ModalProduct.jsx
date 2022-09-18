import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import './style.css';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

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
  const [input, setInput] = useState({
    name: '',
    email: '',
    address: '',
    price: '',
    amount: '',
    description: '',
  });
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
    props.dataModalProduct();
  };

  return (
    <div>
      <Modal isOpen={props.showModal} toggle={props.toggle} className="">
        <ModalBody className="modalBody">
          <Container className="formTemplate" style={{ minHeight: '750px' }}>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <h1>Product</h1>
                <form onSubmit={() => submit()}>
                  <div className="inputContainer">
                    <div>
                      <label for="title">Name </label>
                      <input type="text" id="name" name="name" placeholder="" onChange={(e) => handleChange('name', e.target.value)} />
                    </div>
                    <div>
                      <label for="price">Price</label>
                      <input type="number" id="price" name="price" placeholder="" onChange={(e) => handleChange('price', e.target.value)} />
                    </div>
                    <div>
                      <label for="email">Email</label>
                      <input type="text" id="email" name="email" placeholder="" onChange={(e) => handleChange('email', e.target.value)} />
                    </div>
                    <div>
                      <label for="A">Amount</label>
                      <input type="text" id="announcement" name="announcement" placeholder="" onChange={(e) => handleChange('amount', e.target.value)} />
                    </div>

                    <div className="description">
                      <label for="desc">Description</label>
                      <textarea id="desc" name="desc" onChange={(e) => handleChange('description', e.target.value)} />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    color="success"
                    className="button createButton mx-auto"
                    onClick={submit}
                    // style={{ cursor: `${isLoading ? 'not-allowed' : 'pointer'}`, backgroundColor: `${isLoading ? '#A8CC74' : '#8FBD4B'}` }}
                    title="Create Contest"
                  >
                    {/* {isLoading ? <Spinner size="sm" color="light" className="spinner" /> : 'Create'} */}
                    Klik
                  </Button>
                </form>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalProduct;
