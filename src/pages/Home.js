import Header from "../components/Header";
import Marketplace from "../components/home/Marketplace";
import Banner from "../components/home/Banner";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
        <Header />
        <main>
        <Banner />
        <Marketplace />
        </main>
        <Footer />
        </>
    );
  }
  
  export default Home;