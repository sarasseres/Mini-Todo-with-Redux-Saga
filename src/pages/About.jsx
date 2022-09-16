import * as Components from "../components/Components";
import * as AboutComponents from "../components/About/AboutComponents"; // EDIT

import "../components/About/style.css"; // EDIT

const About = () => {
  return (
    <Components.Container>
      {/* <>
        <h1>Sejarah Toko BHEVIN</h1>
        <p>Toko Bhevin ddirakan oleh  lima developer pada 5 september 2022 , tujuan didirikan toko online
          adalah bisa menjebatani user atau customer untuk membeli sebuah sebuah prodact tanpa harus ketempatnya langsung, karena faktor jarak jauh
          atau misalkan karna ada wabah covid</p>
        <h2>Developer</h2>
        <h1>1.Irham</h1>
        <h1>2.Dewi</h1>
        <h1>3.Fitrah</h1>
        <h1>4.Ade Ilham</h1>
        <h1>5.Ade Daud Hasan</h1>
        <h1>Halaman About ini menampilkan tentang para profil developer yang membangun aplikasi toko online BHEVIN</h1>
        <br />


        <img src={Images} alt="cart" width="19" className="foto-profil" />
        <p>&nbsp;Nama: Irham Muhammad Shidiq</p>
        <p>&nbsp;Asal&nbsp;&nbsp;&nbsp;: Bogor</p>
        <br />
        <br />
        <br />
        <br />
        <img src={Images1} alt="cart" width="19" className="foto-profil" />
        <p>&nbsp;Nama : Ade Daud Hasan</p>
        <p>&nbsp;Asal&nbsp;&nbsp;&nbsp; : Majalengka</p>
        <br />
        <br />
        <br />
        <br />
        <img src={Images2} alt="cart" width="19" className="foto-profil" />
        <p>&nbsp;Nama : Fitra Ari Pradhana</p>
        <p>&nbsp;Asal &nbsp;&nbsp;&nbsp;: Bandung</p>
        <br />
        <br />
        <br />
        <br />
        <img src={Images3} alt="cart" width="19" className="foto-profil" />
        <p>&nbsp;Nama : Dewi L</p>
        <p>&nbsp;Asal &nbsp;&nbsp;&nbsp;: Bekasi</p>
        <br />
        <br />
        <br />
        <br />
        <img src={Images4} alt="cart" width="19" className="foto-profil"></img>
        <p>&nbsp;Nama : Ade Ilham</p>
        <p>&nbsp;Asal &nbsp;&nbsp;&nbsp;: Bogor</p>
      </> */}

      <AboutComponents.History />
      <AboutComponents.Team />
    </Components.Container>
  );
}

export default About;