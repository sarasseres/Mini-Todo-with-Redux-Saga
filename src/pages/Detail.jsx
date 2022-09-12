import * as Components from "../components/Components";
import * as DetailComponents from "../components/Detail/DetailComponents"; // EDIT

import "../components/Detail/style.css"; // EDIT

const Detail = () => {
  return (
    <Components.Container>
      <DetailComponents.DetailProduct />
    </Components.Container>
  );
}

export default Detail;