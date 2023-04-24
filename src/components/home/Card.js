import './assets/card.css'
import getAppartments from '../../services/Product.js'

function Card() {
 const logementList = getAppartments().map((logement)=>
 <a key={logement.id} href={`/products/${logement.id}`}>
  <div className='card-offer' key={logement.id}>
    <img  className='image-offer' key={logement.cover} src={logement.cover} alt=''></img>
    <p className='description-offer' key={logement.title}>
    {logement.title}
    </p>
  </div>
 </a>
  )
  return(
    <ul className='offer-flex'>{logementList}</ul>
  )
  }
  export default Card;