import React, { useState } from 'react';
import arrow_up from './about/assets/arrow-up.png';
import arrow_down from './about/assets/arrow_down.png';
import './about/assets/collapse.css'


function Collapse(props) {
    const title = props.title;
    const text = props.text

    const [isOpen, setIsOpen] = useState(false)
    return  isOpen ? (
      <div className='collapse-flex'>
        <button className="collapse" onClick={() => setIsOpen(false)}><p>{title}</p><img src={arrow_up} alt='Flèche ouverture'></img></button>
        <div className='information-cadre'>
            <p>
            {text}
            </p>
        </div>
      </div>

    ) : (
    <div className='collapse-flex'>
        <button className="collapse" onClick={() => setIsOpen(true)}><p>{title}</p><img src={arrow_down} alt='Flèche fermeture'></img></button>
    </div> 
    
    );
  }
  
  export default Collapse;