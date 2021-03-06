import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';


 const Card = (props) => {
    return (
        <>
        <div className="col-md-4   col-10 mx-auto my-5">
        
             <div className="card ">
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    
  </div>
        </div>
        </div>
  
    
        </>
    )
}
 export default Card;