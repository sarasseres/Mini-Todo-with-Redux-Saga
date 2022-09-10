import { useNavigate } from 'react-router-dom';
import * as Components from '../components/Components';
import * as ProductsComponents from '../components/Products/ProductsComponents'; // EDIT

import '../components/Products/style.css'; // EDIT

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <Components.Container>
        <h1>Halaman Products</h1>
        <div className="d-flex align-items-center mt-4">
          {/* <div className="me-4 cursor-pointer" onClick={() => navigate('/products/Baju Wanita Dewasa Pink')}>
            Baju Wanita Dewasa Pink
          </div> */}
          <Components.Button value="Baju Dewasa Wanita" className="me-4 cursor-pointer btn-outline-secondary" onClick={() => navigate('/products/Baju Wanita Dewasa Pink')}></Components.Button>
          <Components.Button value="Celana Dewasa Pria" className="me-4 cursor-pointer btn-outline-secondary" onClick={() => navigate('/products/Celana Pria Dewasa Hitam')}></Components.Button>
          <Components.Button value="Baju Anak Laki-Laki" className="me-4 cursor-pointer btn-outline-secondary" onClick={() => navigate('/products/Baju Anak Laki-Laki Biru')}></Components.Button>
        </div>
        <div className="row justify-content-between">
          <div className="col-3 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products1.jpg')} title="Ini Card" button="Ini Card Button" />
          </div>
          <div className="col-3 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products2.jpg')} title="Ini Card Terisi" />
          </div>
          <div className="col-3 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products3.jpg')} button="Ini Card Mempunyai Button" />
          </div>
          <div className="col-3 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products4.jpg')} />
          </div>
        </div>
      </Components.Container>
      <Components.Container>
        <ProductsComponents.Header value="Halo Teman" />
      </Components.Container>
    </>
  );
};

export default Products;
