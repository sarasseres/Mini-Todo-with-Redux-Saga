import * as CategoriesComponents from "./../components/Categories/CategoriesComponents";
import "./../components/Categories/style.css";

const Categories = () => {
  return (
    <CategoriesComponents.Content>
      <div className="row m-0 pt-2">
        <div className="col-12 px-0 py-5 banner position-relative text-center text-white">
          <div className="filter"></div>
          <h5 className="mt-5 pt-4">Special September!</h5>
          <h1 className="fw-bold mb-3">40% OFF</h1>
          <h3 className="fw-semibold mb-5">On Selected Clothes</h3>
        </div>
        <div className="col-12 p-0 row m-0">
          <div className="col-md-3 col-sm-6 p-0">
            <button className="w-100 btn btn-dark text-primary2 fw-semibold rounded-0 py-4"><h5 className="m-0">MEN</h5></button>
          </div>
          <div className="col-md-3 col-sm-6 p-0">
            <button className="w-100 btn btn-dark text-primary2 fw-semibold rounded-0 py-4"><h5 className="m-0">LADIES</h5></button>
          </div>
          <div className="col-md-3 col-sm-6 p-0">
            <button className="w-100 btn btn-dark text-primary2 fw-semibold rounded-0 py-4"><h5 className="m-0">KIDS</h5></button>
          </div>
          <div className="col-md-3 col-sm-6 p-0">
            <button className="w-100 btn btn-dark text-primary2 fw-semibold rounded-0 py-4"><h5 className="m-0">ACCESSORIES</h5></button>
          </div>
        </div>
        <div className="col-12 mt-6 p-0">
          <div className="row m-0">
            <div className="col-md-6 position-relative p-0">
              <img src={require("./../assets/images/categories/banner2.jpg")} alt="banner" className="img-fluid" />
              <button className="btn-categories d-block position-absolute btn btn-light fw-semibold normal py-1 px-3 rounded-0"><small>View Collection</small></button>
            </div>
            <div className="col-md-6 position-relative p-0">
              <img src={require("./../assets/images/categories/banner3.jpg")} alt="banner" className="img-fluid" />
              <button className="btn-categories d-block position-absolute btn btn-light fw-semibold normal py-1 px-3 rounded-0"><small>View Collection</small></button>
            </div>
          </div>
        </div>
        <div className="col-12 mt-6 p-0">
          <a href="/">
            <img src={require("./../assets/images/categories/banner4.jpg")} alt="" className="img-fluid" />
          </a>
        </div>
      </div>
    </CategoriesComponents.Content>
  );
}

export default Categories;