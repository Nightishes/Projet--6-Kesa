import banner_home_image from '../home/assets/banner_home_image.png'
import '../home/assets/banner.css'

function Banner() {
    return (
      <>
      <h1>
      <div className="banner-home">
        <div className='description-banner'>
        <img src={banner_home_image} alt='paysage'></img> 
        </div> 
      <div className='banner-darken'></div>
      <h2>Chez vous, partout et ailleurs</h2>
      </div>
      </h1>
      </>
      
    );
  }
  
  export default Banner;