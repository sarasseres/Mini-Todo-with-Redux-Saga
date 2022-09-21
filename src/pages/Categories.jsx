import * as CategoriesComponents from "./../components/Categories/CategoriesComponents";
import "./../components/Categories/style.css";

const Categories = () => {
  return (
    <CategoriesComponents.Content>
      <div className="row m-0">
        <div className="col-12 px-0 py-5 banner position-relative text-center text-white">
          <div className="filter"></div>
          <h5 className="mt-5">Special September!</h5>
          <h1 className="fw-bold mb-3">40% OFF</h1>
          <h3 className="fw-semibold mb-5">On Selected Clothes</h3>
        </div>
      </div>
    </CategoriesComponents.Content>
  )
}

export default Categories;