import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Recent from "../Recent/Recent";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recent></Recent>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
