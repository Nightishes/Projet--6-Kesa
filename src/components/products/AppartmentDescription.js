import getAppartments from "../../services/Product";
import Collapse from "../Collapse";
import Carrousel from "./Carrousel";
import './assets/appartmentdescription.scss';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";



function AppartmentDescription() {
    const appartmentID = useParams();

    const navigate = useNavigate()
    const [appartment, setAppartment] = useState([])
    const [isDataLoading, setDataLoading] = useState(true)
   
    useEffect(() => {
      async function fetchData() {
        setDataLoading(true)
        const listAppartment = getAppartments();
        const appartment =  listAppartment.find((appartment) => appartment.id === appartmentID.id)
        if(null != appartment){
          setAppartment(appartment)
          setDataLoading(false)
          return;
        } 

        console.log(appartment);
        navigate('/404')
      }
       
      
      fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appartmentID.id], useNavigate) 
    
    
    

    return (<>
    {isDataLoading ? <Loader/> 
    : (<> 
    <Carrousel src = {appartment.pictures}/>
    <div className='description-appartment'>
      <div className="flex-information"> 
      <div className="appartment-title-tags">
        
        <ul>
          <ol><h1 key={appartment.title}>{appartment.title}</h1></ol>
          <ol><h2 key={appartment.location}>{appartment.location}</h2></ol>
        </ul>
        <ul className="tags-appartment">
          {appartment.tags.map((tag)=>
          (<ol className="tag-appartment" key={tag}>{tag} </ol>))}
        </ul>
      </div>
      <ul className="host-appartment-ratings">
        <div className="host-appartment">
        <ol className="host-name" key={appartment.host.name}><h2>{appartment.host.name}</h2></ol>
        <ol key={appartment.host.picture}><img src={appartment.host.picture} alt=""></img>
        </ol>
        </div>
      <div className="star-ratings"><StarRating rating={appartment.rating}/></div>
      </ul>
      </div>
      
   
    <div className="description-equipment-flex">
      <Collapse className = {"collapse appartment-collapse"} title={<h3>Description</h3>} text={<p className="appartment-description-text">{appartment.description}</p>}/>
      <Collapse className = {"collapse appartment-collapse"}  title={<h3>Equipements</h3>} text={appartment.equipments.map((equipment) =>(<p key={equipment} className="appartment-description-text">{equipment}</p>))}/>
      </div>
      </div>
      </>
      )}</>
    );
  }
  
  export default AppartmentDescription;