import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as Components from '../components/Components';
import * as ClothesComponents from '../components/Clothes/ClothesComponents'; // EDIT
import ModalProduct from '../components/Clothes/ModalProduct';
import '../components/Clothes/style.css'; // EDIT
import axios from 'axios';

const Clothes = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state).clothes;

  const [clothes, setClothes] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('Fetching Data...');
    setIsLoading(true);

    setTimeout(() => {
      console.log('Fetch Data Success!');
      setIsLoading(false);

      setClothes(data);
      axios
        .get('https://kawahedukasibackend.herokuapp.com/content/data/mukti')
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }, 2000);
  }, [data]);
  console.log(setClothes, 'heyyyyyyy');
  return (
    <>
      <Components.Container>
        <ModalProduct showModal={showModal} toggle={() => setShowModal(!showModal)} />
        <div className="text-center mt-5">
          <button className="btn btn-main fw-semibold text-white py-2 px-4 rounded-0" onClick={() => setShowModal(!showModal)}>
            ADD CLOTH
          </button>
        </div>
        <div className="row justify-content-md-evenly gap-lg-5 justify-content-center mt-4">
          {isLoading ? (
            <h3 className="text-center text-primary2 mt-5">Sedang Memuat...</h3>
          ) : (
            clothes.map((cloth) => (
              <div className="col-lg-3 col-md-5 col-10 my-md-5 my-4" key={cloth.id}>
                <ClothesComponents.Card id={155} image={require(`./../assets/images/products/${cloth.image}`)} title={cloth.title} desc={cloth.desc} price={cloth.price} onClick={() => navigate(`/clothes/${cloth.slug}`)} />
              </div>
            ))
          )}
        </div>
      </Components.Container>
      <Components.Container>
        <ClothesComponents.Header value="" />
      </Components.Container>
    </>
  );
};

export default Clothes;
