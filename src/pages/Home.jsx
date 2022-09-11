import * as Components from "../components/Components";
import * as HomeComponents from "../components/Home/HomeComponents"; // EDIT

import "../components/Home/style.css"; // EDIT

const Home = () => {
  return (
    <Components.Content>
      <HomeComponents.HeroSection />
      <HomeComponents.PartnersSection />
      <HomeComponents.PromotionSection />
      <HomeComponents.ProductsSection />
    </Components.Content>
  );
}

export default Home;