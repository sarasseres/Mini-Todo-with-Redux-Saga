import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Components from '../components/Components';
import * as ClothesComponents from '../components/Clothes/ClothesComponents'; // EDIT
import ModalProduct from '../components/Clothes/ModalProduct';
import '../components/Clothes/style.css'; // EDIT
import axios from 'axios';

const Clothes = () => {
  const navigate = useNavigate();
  // const data = useSelector(state => state).clothes;

  const [clothes, setClothes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const api = axios.create({
    baseURL: "https://kawahedukasibackend.herokuapp.com/",
    timeout: 50000
  });

  useEffect(() => {
    setIsLoading(true);

    api.get("content/data/bhevin_4").then(({ data }) => {
      setIsLoading(false);
      setClothes(data);
    });
  }, []);

  return (
    <>
      <Components.Container>
        <ModalProduct showModal={showModal} toggle={()=>setShowModal(!showModal)} />
        <div className="text-center mt-5">
          <button className="btn btn-main fw-semibold text-white py-2 px-4 rounded-0" onClick={()=>setShowModal(!showModal)}>ADD CLOTH</button>
        </div>
        <div className="row justify-content-md-evenly gap-lg-5 justify-content-center mt-4">
          {isLoading ? (
            <h3 className="text-center text-primary2 fw-bold mt-6 mb-5">Fetching Data...</h3>
          ) : !clothes.length ? 
            <h3 className="text-center text-danger fw-bold mt-6 mb-5">No Cloth Available</h3> 
            : 
            clothes.map((cloth) => (
              <div className="col-lg-3 col-md-5 col-10 my-md-5 my-4" key={cloth.id}>
                <ClothesComponents.Card
                  id={cloth.id}
                  image={require(`./../assets/images/products/${cloth.image}`)}
                  title={cloth.name} 
                  desc={cloth.description2} 
                  price={cloth.description6} 
                  onClick={() => navigate(`/clothes/${cloth.description1}`)} />
              </div>
            ))
          }
        </div>
      </Components.Container>
      <Components.Container>
        <ClothesComponents.Header value="" />
      </Components.Container>
    </>
  );
};

export default Clothes;
