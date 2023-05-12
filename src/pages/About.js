import Header from "../components/Header";
import Collapse from "../components/Collapse";
import BannerAbout from '../components/about/Banner'
import Footer from "../components/Footer";

function About() {
        return (
            <>
             <Header />
              <main>
              <BannerAbout />
              <Collapse className={"collapse about"} title ={<h2>Fiabilité</h2>} text ={<p className="about-description">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>} />
              <Collapse className={"collapse about"} title ={<h2>Respect</h2>} text ={<p className="about-description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
              <Collapse className={"collapse about"} title ={<h2>Sécurisé</h2>} text = {<p className="about-description">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>} />
              <Collapse className={"collapse about"} title ={<h2>Sécurisé</h2>} text ={<p className="about-description">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>} />
              </main>
              <Footer />
            </>
          );

  }
  
  export default About;