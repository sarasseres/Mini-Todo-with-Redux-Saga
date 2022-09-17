import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import './style.css';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Container, Row, Col, Spinner, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export const ModalProduct = ({ showModal, toggle }) => {
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
  
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    due_date: null,
    prize: null,
    title: '',
    announcement: '',
    description: '',
    poster: null,
  });

  const handleChange = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handlePoster = (e) => {
    setInput({
      ...input,
      poster: e.target.files[0],
    });
  };

  const submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('due_date', input.due_date);
    formData.append('prize', input.prize);
    formData.append('title', input.title);
    formData.append('announcement', input.announcement);
    formData.append('description', input.description);
    formData.append('poster', input.poster);
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle} className="">
        <ModalBody className="modalBody">
          <Container className="formTemplate" style={{ minHeight: '750px' }}>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <h1>Product</h1>
                <Form>
                  <div className="inputContainer">
                    <div>
                      <label htmlFor="title">Title</label>
                      <input type="text" id="title" name="title" placeholder="Product Title" onChange={(e) => handleChange('title', e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="prize">Prize</label>
                      <input type="number" id="prize" name="prize" placeholder="5000000" onChange={(e) => handleChange('prize', e.target.value)} />
                    </div>
                    <div>
                      {' '}
                      <label htmlFor="date">Due Date</label>
                      <input type="date" id="date" name="due_date" placeholder="YYYY-MM-DD" onChange={(e) => handleChange('due_date', e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="announcement">Announcement</label>
                      <input type="date" id="announcement" name="announcement" placeholder="YYYY-MM-DD" onChange={(e) => handleChange('announcement', e.target.value)} />
                    </div>
                    <div className="photo">
                      <label htmlFor="poster">Poster</label>
                      <input type="file" id="poster" name="poster" placeholder="poster" onChange={handlePoster} />
                    </div>
                    <div className="description">
                      <label htmlFor="desc">Description</label>
                      <textarea id="desc" name="desc" onChange={(e) => handleChange('description', e.target.value)} />
                    </div>
                  </div>
                  <Button
                    color="success"
                    className="button createButton mx-auto"
                    onClick={submit}
                    style={{ cursor: `${isLoading ? 'not-allowed' : 'pointer'}`, backgroundColor: `${isLoading ? '#A8CC74' : '#8FBD4B'}` }}
                    title="Create Contest"
                  >
                    {isLoading ? <Spinner size="sm" color="light" className="spinner" /> : 'Create'}
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalProduct;
