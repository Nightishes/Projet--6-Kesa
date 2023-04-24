import { useState } from "react";

const ImageSlider = ({slides}) =>{
    const [sliderIndex, setSliderIndex] = useState(0);

  const slideStyles={
    width : '100%',
    height : '100%',
    borderRadius :'10px',
    backgroundPosition: 'center',
    backgroundSize :'cover',
    backgroundImage : `${picture[sliderIndex]}`,

  };

  const goToPrevious = () => {
    const isFirstSlide = sliderIndex ===0 
    const newIndex = isFirstSlide ? slideStyles.length -1 : sliderIndex -1;
    setSliderIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = sliderIndex === slides.length -1
    const newIndex = isLastSlide ? 0 : sliderIndex + 1;
    setSliderIndex(newIndex)
  }
    return ()
  }

  
  export default ImageSlider