import { useNavigate } from 'react-router-dom';
import * as Components from '../components/Components';
import * as ProductsComponents from '../components/Products/ProductsComponents'; // EDIT

import '../components/Products/style.css'; // EDIT

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <Components.Container>
        <div className="d-flex align-items-center mx-auto mt-5">
          {/* <div className="me-4 cursor-pointer" onClick={() => navigate('/products/Baju Wanita Dewasa Pink')}>
            Baju Wanita Dewasa Pink
          </div> */}
          <Components.Button value="LADIES" className="me-4 cursor-pointer btn-outline-secondary" onClick={() => navigate('/products/product')}></Components.Button>
          <Components.Button value="MEN" className="me-4 cursor-pointer btn-outline-secondary" onClick={() => navigate('/products/product')}></Components.Button>
          <Components.Button value="KIDS" className="me-4 cursor-pointer btn-outline-secondary" onClick={() => navigate('/products/product')}></Components.Button>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products1.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} button="Ini Card Button" />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products2.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products3.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products4.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products1.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products2.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products3.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products4.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products1.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products2.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products3.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products4.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
        </div>{' '}
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products1.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products2.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products3.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
          <div className="col-lg-3 col-md-6 col-10 my-5">
            <ProductsComponents.Card image={require('../assets/images/products/products4.jpg')} title="Sky Blue Hoodie" onClick={() => navigate('/products/product')} />
          </div>
        </div>
      </Components.Container>
      <Components.Container>
        <ProductsComponents.Header value="" />
      </Components.Container>
    </>
  );
};

export default Products;
