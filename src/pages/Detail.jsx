import * as Components from "../components/Components";
import * as DetailComponents from "../components/Detail/DetailComponents"; // EDIT

import "../components/Detail/style.css"; // EDIT

const Detail = () => {
  return (
    <Components.Container>
      <h1>Halaman Detail Product</h1>
      <DetailComponents.DetailProduct />
    </Components.Container>
  );
}

export default Detail;