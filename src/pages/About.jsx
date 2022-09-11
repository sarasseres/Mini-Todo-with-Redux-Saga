import * as Components from "../components/Components";
import * as AboutComponents from "../components/About/AboutComponents"; // EDIT

import "../components/About/style.css"; // EDIT
import Images from '../assets/images/about/irham.jpg'
import Images1 from '../assets/images/about/adedaudhasan.png'
import Images2 from '../assets/images/about/fitra.jpg'
import Images3 from '../assets/images/about/saras.jpg'
import Images4 from '../assets/images/about/adeilham.jpeg'


const About = () => {
  return (
    <Components.Container>
      <h1>Halaman About ini menampilkan tentang para profil developer yang membangun aplikasi toko online BHEVIN</h1>
       <br />
       
       
      <img src={Images}  alt="cart" width="19" className="foto-profil" /> 
      <p>&nbsp;Nama: Irham Muhammad Shidiq</p>
      <p>&nbsp;Asal&nbsp;&nbsp;&nbsp;: Bogor</p>
      <br />
      <br />
      <br />
      <br />
      <img src={Images1}  alt="cart" width="19" className="foto-profil" /> 
      <p>&nbsp;Nama : Ade Daud Hasan</p>
      <p>&nbsp;Asal&nbsp;&nbsp;&nbsp; : Majalengka</p>
      <br />
      <br />
      <br />
      <br />
      <img src={Images2}  alt="cart" width="19" className="foto-profil" /> 
      <p>&nbsp;Nama : Fitra Ari Pradhana</p>
      <p>&nbsp;Asal &nbsp;&nbsp;&nbsp;: Bandung</p>
      <br />
      <br />
      <br />
      <br />
      <img src={Images3}  alt="cart" width="19" className="foto-profil" /> 
      <p>&nbsp;Nama : Dewi L</p>
      <p>&nbsp;Asal &nbsp;&nbsp;&nbsp;: Bekasi</p>
      <br />
      <br />
      <br />
      <br />
      <img src={Images4} alt="cart" width="19" className="foto-profil"></img>
      <p>&nbsp;Nama : Ade Ilham</p>
      <p>&nbsp;Asal &nbsp;&nbsp;&nbsp;: Bogor</p>

      
      
    </Components.Container>
  );
}

export default About;