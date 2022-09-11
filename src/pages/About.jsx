import * as Components from "../components/Components";
import * as AboutComponents from "../components/About/AboutComponents"; // EDIT

import "../components/About/style.css"; // EDIT
import Images from '../assets/images/about/irham.jpg'
import Images1 from '../assets/images/about/adedaudhasan.png'


const About = () => {
  return (
    <Components.Container>
      <h1>Halaman About ini menampilkan tentang profil develope yang membangun aplikasi toko online</h1>
       <br />
      <img src={Images}  alt="cart" width="19" className="foto-profil" /> 
      <p>Nama : Irham</p>
      <p>Asal : Bogor</p>
      <br />
      <br />
      <br />
      <br />
      <img src={Images1}  alt="cart" width="19" className="foto-profil" /> 
      <p>Nama : Ade Daud Hasan</p>
      <p>Asal : Majalengka</p>
    </Components.Container>
  );
}

export default About;