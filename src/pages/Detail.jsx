import { useNavigate, useParams } from "react-router-dom";
import * as Components from "../components/Components";
import * as DetailComponents from "../components/Detail/DetailComponents"; // EDIT

import "../components/Detail/style.css"; // EDIT

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Components.Container>
      <h1>Halaman Detail Product</h1>
    </Components.Container>
  );
}

export default Detail;