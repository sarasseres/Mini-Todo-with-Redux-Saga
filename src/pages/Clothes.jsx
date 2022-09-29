import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import * as ClothesComponents from '../components/Clothes/ClothesComponents'; // EDIT
import ModalProduct from '../components/Clothes/ModalProduct';
import '../components/Clothes/style.css'; // EDIT

const Clothes = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [clothes, setClothes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const api = axios.create({
    baseURL: 'https://kawahedukasibackend.herokuapp.com/',
    timeout: 0,
  });

  useEffect(() => {
    setIsLoading(true);

    api.get('content/data/bhevin_4').then(({ data }) => {
      setIsLoading(false);
      
      if (params.category) {
        setClothes(data.filter(e => e.description5 === params.category));
      } else {
        setClothes(data);
      }
    });
  }, []);

  return (
    <div className="container">
      <ModalProduct showModal={showModal} toggle={() => setShowModal(!showModal)} />
      <div className="text-center mt-5">
        <button className="btn btn-main fw-semibold text-white py-2 px-4 rounded-0" onClick={() => setShowModal(!showModal)}>
          ADD CLOTH
        </button>
      </div>
      {isLoading ? (
        <h3 className="clothies-header text-center text-primary2 fw-bold mb-5">Fetching Data...</h3>
      ) : !clothes.length ? (
        <h3 className="clothies-header text-center text-danger fw-bold mb-5">No Cloth Available</h3>
      ) : (
        <div>
          <h3 className="clothies-header text-center text-dark fw-bold mb-5">Showing All Clothes {params.category ? `By ${params.category}` : ""}</h3>
          <div className="row justify-content-md-evenly gap-lg-5 justify-content-center mt-4">
            {clothes.map((cloth) => (
              <div className="col-lg-3 col-md-5 col-10 my-md-5 my-4" key={cloth.id}>
                <ClothesComponents.Card
                  id={cloth.id}
                  image={
                    cloth.image ? require(`./../assets/images/products/${cloth.image}`)
                    ? require(`./../assets/images/products/${cloth.image}`)
                    : require(`./../assets/images/products/empty.jpg`) 
                  : ""}
                  title={cloth.name}
                  desc={cloth.description2}
                  price={cloth.description6} 
                  onClick={() => navigate(`/clothes/${cloth.description1}`)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Clothes;
