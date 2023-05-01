import './assets/carrousel.scss'
import { useState } from 'react'
import back from './assets/images/arrow-right.png'
import next from './assets/images/arrow-left.png'



function Carrousel(props) {
  const image = props.src ;
  
  const [sliderIndex, setSliderIndex] = useState(0);

const goToNext = () => {
  const isFirstSlide = sliderIndex === 0 
  const newIndex = isFirstSlide ? image.length -1 : sliderIndex -1;
  setSliderIndex(newIndex)
  }
const goToPrevious = () => {
  const isLastSlide = sliderIndex === image.length -1
  const newIndex = isLastSlide ? 0 : sliderIndex + 1;
  setSliderIndex(newIndex)
}


    return (
    <div className='carrousel-slider'>
      <div className='image-arrow-flex'>
        <button className='arrow-slider'  onClick={()=>goToPrevious()}  id='arrow-right'><img className='arrow-img' src={back}  alt='Bouton pour aller vers le slider précédent'></img></button>
        <img className='image-carrousel'  src={image[sliderIndex]} alt=''></img>
        <button className='arrow-slider' onClick={()=>goToNext()} id='arrow-left'><img className='arrow-img'  src={next}  alt='Bouton pour aller vers le prochain slider'></img></button>
      </div>
    <p className='slider-number'>{sliderIndex + 1}/{image.length }</p>
    </div>
    );
  }
  
  export default Carrousel;