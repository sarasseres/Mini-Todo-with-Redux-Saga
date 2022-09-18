import * as Components from "../components/Components";
import * as HomeComponents from "../components/Home/HomeComponents"; // EDIT

import "../components/Home/style.css"; // EDIT

const Home = () => {
  return (
    <Components.Content className="home">
      <HomeComponents.HeroSection />
      <HomeComponents.PartnersSection />
      <HomeComponents.PromotionSection />
      <HomeComponents.ProductsSection />
      <HomeComponents.TestimonialsSection />
    </Components.Content>
  );
}

export default Home;