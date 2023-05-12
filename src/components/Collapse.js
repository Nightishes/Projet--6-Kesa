import React, { useState } from 'react';
import arrow_up from './about/assets/arrow-up.png';
import arrow_down from './about/assets/arrow_down.png';
import './about/assets/collapse.css'


function Collapse(props) {
    const title = props.title;
    const text = props.text
    const className = props.className

    const [isOpen, setIsOpen] = useState(false)
    return  isOpen ? (
      <div className='collapse-flex'>
        <button  className={className} onClick={() => setIsOpen(false)}>{title}<img className='arrow-collapse' src={arrow_up} alt='Flèche ouverture'></img></button>
        <div className='information-cadre'>
            {text}
        </div>
      </div>

    ) : (
    <div className='collapse-flex'>
        <button className={className} onClick={() => setIsOpen(true)}>{title}<img  className='arrow-collapse' src={arrow_down}  alt='Flèche fermeture'></img></button>
    </div> 
    
    );
  }
  
  export default Collapse;