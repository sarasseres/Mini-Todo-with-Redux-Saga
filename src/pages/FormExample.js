import { Container, Button } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../bootstrap/action';
import axios from 'axios';

const Form = () => {
  const navigate = useNavigate();
  // const access_token = useSelector((state) => state).access_token;
  // const dispatch = useDispatch();

  // console.log(access_token, 'yes');

  const [dataInput, setDataInput] = useState({
    image: null,
  });

  // };

  const handleChange = (name, value) => {
    setDataInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    // console.log(dataInput, 'preww');
    let formData = new FormData();
    formData.append('image', dataInput.image);
    console.log([...formData]);
    // axios({
    //   method: 'post',
    //   url: 'https://kawahedukasibackend.herokuapp.com/content/create',
    //   data: formData,
    //   headers: { access_token },
    // })
    //   .then((res) => {
    //     // alert(res.data.message);

    //     console.log(res, 'test');
    //   })
    //   .catch((err) => console.log(err));
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
              <input type="file" id="image" name="image" placeholder="image" className="form-control" onChange={(e) => handleChange('image', e.target.files[0])} required />
            </div>
            {/* <div>
              <label className="form-label normal mb-2" htmlFor="clothname">
                Cloth Name
              </label>
              <input type="text" id="clothname" name="clothname" placeholder="Cloth Name" onChange={(e) => handleChange('clothname', e.target.value)} required />
            </div> */}
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
