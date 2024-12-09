import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Brands from '../components/Brands';
import NewArrivals from '../components/NewArrivals';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Brands />
      <NewArrivals />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
