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
          <div className="me-4 cursor-pointer" onClick={() => navigate('/products/Baju Wanita Dewasa Pink')}>
            Baju Wanita Dewasa Pink
          </div>
          <div className="me-4 cursor-pointer" onClick={() => navigate('/products/Celana Pria Dewasa Hitam')}>
            Celana Pria Dewasa Hitam
          </div>
          <div className="me-4 cursor-pointer" onClick={() => navigate('/products/Baju Anak Laki-Laki Biru')}>
            Baju Anak Laki-Laki Biru
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-3 my-5">
            <ProductsComponents.Card image={require('../assets/images/favicon.png')} title="Ini Card" button="Ini Card Button" />
          </div>
          <div className="col-3 my-5">
            <ProductsComponents.Card image={require('../assets/images/favicon.png')} title="Ini Card Terisi" />
          </div>
          <div className="col-3 my-5">
            <ProductsComponents.Card image={require('../assets/images/favicon.png')} button="Ini Card Mempunyai Button" />
          </div>
          <div className="col-3 my-5">
            <ProductsComponents.Card image={require('../assets/images/favicon.png')} />
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
