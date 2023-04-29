import Star from './assets/images/star-regular.svg'
import StarFull from './assets/images/star-solid-full.svg'

function StarRating(props){
   const ratings = props.rating
   

   let starRatings =[];
   for ( let i = 0; i < ratings; i++)
   {            
       starRatings.push(<img src={StarFull} alt='Star'></img>)
   }
   if (ratings < 5){
    for (let i =ratings; i < 5; i++)
    {            
        starRatings.push(<img src={Star} alt='Star'></img>)     
    }
   }
   
   starRatings.map((index)=>
    <div key={index}>{index}</div>
   )
    return (
        <>
        {starRatings}
        </>
      );
    };  

export default StarRating