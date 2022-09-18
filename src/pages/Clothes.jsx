import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/Components';
import ModalProduct from '../components/Clothes/ModalProduct';
import * as ClothesComponents from '../components/Clothes/ClothesComponents'; // EDIT

import '../components/Clothes/style.css'; // EDIT

const Clothes = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [clothes, setClothes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleModalProduct = (data) => {
    const datas = {
      ...data,
      id: Math.random().toString(),
    };

    // setInput({
    //   ...input,
    //   [name]: value,
    // });
  };

  useEffect(() => {
    console.log('Fetching Data...');
    setIsLoading(true);

    setTimeout(() => {
      console.log('Fetch Data Success!');
      setIsLoading(false);

      setClothes(() => [
        {
          id: 1,
          image: 'ribbed-blouse-outfit.jpg',
          title: 'Ribbed Blouse Outfit',
          slug: 'ribbed-blouse-outfit',
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          price: '400.000,00',
        },
        {
          id: 2,
          image: 'relaxed-fit-sweatshirt.jpg',
          title: 'Relaxed Fit Sweatshirt',
          slug: 'relaxed-fit-sweatshirt',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at delectus officiis provident sequi quas molestias velit iusto. Quisquam quam animi distinctio. Pariatur quisquam deleniti veritatis ipsa reiciendis soluta nulla.',
          price: '340.000,00',
        },
        {
          id: 3,
          image: 'regular-fit-overshirt.jpg',
          title: 'Regular Fit Overshirt',
          slug: 'regular-fit-overshirt',
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          price: '280.000,00',
        },
        {
          id: 4,
          image: 'shirt-white-a-sheen.jpg',
          title: 'Shirt White A Sheen',
          slug: 'shirt-white-a-sheen',
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          price: '450.000,00',
        },
        {
          id: 5,
          image: 'flared-shirt.jpg',
          title: 'Flared Shirt',
          slug: 'flared-shirt',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at delectus officiis provident sequi quas molestias velit iusto. Quisquam quam animi distinctio. Pariatur quisquam deleniti veritatis ipsa reiciendis soluta nulla.',
          price: '519.999,00',
        },
        {
          id: 6,
          image: 'polkadot-shirt.jpg',
          title: 'Polkadot Shirt',
          slug: 'polkadot-shirt',
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          price: '379.999,00',
        },
      ]);
    }, 2000);
  }, []);

  return (
    <>
      <Components.Container>
        <div className="text-center mt-5">
          <button className="btn btn-main fw-semibold text-white py-2 px-4 rounded-0" onClick={() => setShowModal(!showModal)}>
            ADD CLOTH
          </button>

          <ModalProduct showModal={showModal} toggle={() => setShowModal(!showModal)} dataModalProduct={handleModalProduct} />
        </div>
        <div className="row justify-content-md-evenly gap-lg-5 justify-content-center mt-4">
          {isLoading ? (
            <h3 className="text-center text-success mt-5">Sedang Memuat...</h3>
          ) : (
            clothes.map((cloth) => (
              <div className="col-lg-3 col-md-5 col-10 my-md-5 my-4" key={cloth.id}>
                <ClothesComponents.Card image={require(`./../assets/images/products/${cloth.image}`)} title={cloth.title} desc={cloth.desc} price={cloth.price} onClick={() => navigate(`/clothes/${cloth.slug}`)} />
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
