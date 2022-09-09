import { useNavigate } from "react-router-dom";
import * as Components from "../components/Components";
import * as ProductsComponents from "../components/Products/ProductsComponents"; // EDIT

import "../components/Products/style.css"; // EDIT

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <Components.Container>
        <h1>Halaman Products</h1>
      </Components.Container>
    </>
  );
}

export default Products;