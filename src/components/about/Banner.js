import banner_home_image from './assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import './assets/banner-about.css'

function BannerAbout() {
    return (
      <h1>
        <div className="banner-about">
        <div className='div-image-banner'>
        <img src={banner_home_image} alt='paysage'></img>
        </div>
        <div className='banner-darken-about'></div>
      </div>
      </h1> 
    );
  }
  
  export default BannerAbout;