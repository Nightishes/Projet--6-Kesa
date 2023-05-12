import banner_home_image from '../home/assets/banner_home_image.png'
import '../home/assets/banner.css'

function Banner() {
    return (
      <>
      <div className="banner-home">
        <div className='description-banner'>
        <img src={banner_home_image} alt='paysage'></img> 
        </div> 
      <div className='banner-darken'></div>
      <h1>Chez vous, partout et ailleurs</h1>
      </div>
      </>
      
    );
  }
  
  export default Banner;