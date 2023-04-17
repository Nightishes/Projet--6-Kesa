import Header from "../components/Header";
import Marketplace from "../components/home/Marketplace";
import Banner from "../components/home/Banner";
import Footer from "../components/Footer";

function Home() {
    return (
      <div className="home">
        <Header />
        <Banner />
        <Marketplace/>
        <Footer />
      </div>
    );
  }
  
  export default Home;