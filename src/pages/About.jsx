import * as AboutComponents from "./../components/About/AboutComponents"; // EDIT
import "./../components/About/style.css"; // EDIT

const About = () => {
  return (
    <div className="container">
      <AboutComponents.History />
      <AboutComponents.Team />
    </div>
  );
}

export default About;