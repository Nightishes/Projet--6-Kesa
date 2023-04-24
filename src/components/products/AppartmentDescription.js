import getAppartments from "../../services/Product";
import Collapse from "../Collapse";
import Carrousel from "./Carrousel";
import './assets/appartmentdescription.scss';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";



function AppartmentDescription() {
    const appartmentID = useParams();
    console.log(appartmentID)
   
    const [appartment, setAppartment] = useState([])
   
    const [isDataLoading, setDataLoading] = useState(true)
   
    useEffect(() => {
      async function fetchData() {
        setDataLoading(true)
        try {
          const listAppartment = getAppartments();
          console.log(listAppartment);
          const appartment =  listAppartment.find((appartment) => appartment.id === appartmentID.id)
          setAppartment(appartment)
          console.log(appartment)
        } catch (err) {
          console.log("err")
        } finally {
          setDataLoading(false)
        }
      }
      fetchData()
     
    }, [appartmentID.id])
    
    // appartment.equipments.map((info, index)=><li key={`${info}-${index}`}></li>)

    return (<>
    {isDataLoading ? (console.log("404")) 
    : (<> 
    <Carrousel src = {appartment.pictures}/>
    <div className='description-appartment'>
      <div className="flex-information"> 
      <ul>
        <ol><h2 key={appartment.title}>{appartment.title}</h2></ol>
        <ol><h3 key={appartment.location}>{appartment.location}</h3></ol>
      </ul>
      <div className="tag-appartment" key={appartment.tags}>{appartment.tags}</div>
    <div className="information-host-ratings">
      <ul className="host-appartment">
        <ol key={appartment.host.name}><h3>{appartment.host.name}</h3></ol>
        <ol key={appartment.host.picture}><img src={appartment.host.picture} alt=""></img>
        </ol>
      </ul>
    </div>
    <div className="description-equipment-flex">
      <Collapse title='Description' text={appartment.description}/>
      <Collapse title='Equipement' text={appartment.equipments}/>
      </div>
      </div>
    </div>
      </>
      )}</>
    );
  }
  
  export default AppartmentDescription;