import * as Components from "../components/Components";
import * as AboutComponents from "../components/About/AboutComponents"; // EDIT

import "../components/About/style.css"; // EDIT
import Images from '../assets/images/about/irham.jpg'
import Images1 from '../assets/images/about/adedaudhasan.png'
import Images2 from '../assets/images/about/fitra.jpg'
import Images3 from '../assets/images/about/saras.jpg'


const About = () => {
  return (
    <Components.Container>
      <h1>Halaman About ini menampilkan tentang para profil developer yang membangun aplikasi toko online BHEVIN</h1>
       <br />
      <img src={Images}  alt="cart" width="19" className="foto-profil" /> 
      <p>Nama : Irham Muhammad Shidiq</p>
      <p>Asal : Bogor</p>
      <br />
      <br />
      <br />
      <br />
      <img src={Images1}  alt="cart" width="19" className="foto-profil" /> 
      <p>Nama : Ade Daud Hasan</p>
      <p>Asal : Majalengka</p>
      <br />
      <br />
      <br />
      <br />
      <img src={Images2}  alt="cart" width="19" className="foto-profil" /> 
      <p>Nama : Fitra</p>
      <p>Asal : Bandung</p>
      <br />
      <br />
      <br />
      <br />
      <img src={Images3}  alt="cart" width="19" className="foto-profil" /> 
      <p>Nama : Dewi</p>
      <p>Asal : Bandung</p>
      <br />
      <br />
      <br />
      <br />
      <p>Nama : Ade Ilham</p>
      <p>Asal : Bogor</p>
    </Components.Container>
  );
}

export default About;