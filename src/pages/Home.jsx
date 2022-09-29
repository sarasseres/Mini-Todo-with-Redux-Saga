import * as HomeComponents from "./../components/Home/HomeComponents"; // EDIT
import "./../components/Home/style.css"; // EDIT

const Home = () => {
  return (
    <div className="home">
      <HomeComponents.HeroSection />
      <HomeComponents.PartnersSection />
      <HomeComponents.PromotionSection />
      <HomeComponents.ProductsSection />
      <HomeComponents.TestimonialsSection />
    </div>
  );
}

export default Home;