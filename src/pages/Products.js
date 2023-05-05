import Header from "../components/Header";
import Footer from "../components/Footer";
import AppartmentDescription from "../components/products/AppartmentDescription";



function Products() {
    return (
      <>
       <Header />
        <main>
        <AppartmentDescription classname='appartment-description-main'/>
        </main> 
        <Footer /></>
       
    );
  }
  
  export default Products;