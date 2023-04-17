import banner_home_image from '../home/assets/banner_home_image.png'

function Banner() {
    return (
      <div className="banner-home">
        <h2>Chez vous, partout et ailleurs</h2>
        <img src={banner_home_image} alt=' paysage'></img> 
      </div>
    );
  }
  
  export default Banner;