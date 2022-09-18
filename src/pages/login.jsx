import * as Components from "../components/Components";
import * as LoginComponents from "../components/Login/LoginComponents"; // EDIT

import "../components/Login/style.css"; // EDIT

const Login = () => {
  return ( 
    <Components.Content className="">
      <LoginComponents.Login /> 
    </Components.Content>
  );
}

export default Login;