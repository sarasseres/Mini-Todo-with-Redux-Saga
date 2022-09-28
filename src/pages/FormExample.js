import { Container, Button } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [dataInput, setDataInput] = useState({});
  const [images, setImage] = useState({
    image: null,
  });

  // const handleImage = (e) => {
  //   console.log(e, 'apa');
  //   setInput({
  //     ...input,
  //     image: e.target.files[0],
  //   });
  // };

  const handleChange = (name, value) => {
    setDataInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  // const handlePoster = (e) => {
  //   setImage({
  //     image: e.target.files[0],
  //   });
  //   // setDataInput({
  //   //   ...dataInput,
  //   //   image: e.target.files[0],
  //   // });
  // };

  const submit = (e) => {
    e.preventDefault();
    console.log(dataInput, 'preww');
  };

  return (
    <>
      <Container className="formTemplate py-4">
        <form onSubmit={() => submit()}>
          <div className="inputContainer">
            <div className="photo">
              <label className="form-label normal" htmlFor="image">
                Image
              </label>
              <input type="file" id="image" name="image" placeholder="image" className="form-control" onChange={(e) => handleChange('image', e.target.files)} required />
            </div>
            <div>
              <label className="form-label normal mb-2" htmlFor="clothname">
                Cloth Name
              </label>
              <input type="text" id="clothname" name="clothname" placeholder="Cloth Name" onChange={(e) => handleChange('clothname', e.target.value)} required />
            </div>
          </div>
          <Button type="submit" color="success" className="createButton py-2 mt-3 fw-semibold w-100" title="Create Contest" onClick={submit}>
            Add
          </Button>
        </form>
      </Container>
      ;
    </>
  );
};

export default Form;
