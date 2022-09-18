import * as Components from "../components/Components";
import * as AboutComponents from "../components/About/AboutComponents"; // EDIT

import "../components/About/style.css"; // EDIT

const About = () => {
  return (
    <Components.Container>
      <AboutComponents.History />
      <AboutComponents.Team />
    </Components.Container>
  );
}

export default About;