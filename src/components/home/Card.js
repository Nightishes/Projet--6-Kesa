import logements from '../data/logements.json'

function Card() {
  const logementList = logements.map((logement)=>
  <div className='card-offer' key={logement.id}>
    <img  className='image-offer' key={logement.cover} src={logement.cover} alt=''></img>
    <div className='description-offer' key={logement.title}>
    {logement.title}
    </div>
  </div>
  )
  return(
    <ul className='offer-flex'>{logementList}</ul>
  )
  }
  
  export default Card;