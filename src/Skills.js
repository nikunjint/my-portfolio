import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


 const Skills = (props) => {
    return (
        <>
           <div className="my-5">
               <h1 className="text-center">MY SKILLS</h1>
            
               <div className="container-fluid mb-5  main_card" >
            <div className="row ">
            <div className="col-10 mx-auto ">
            <div className="row gy-4" >
            <div className="col-md-4 col-10 mx-auto ">
            { 
                Sdata.map((val,ind)=>{
                  return <Card
                      imgsrc={val.imgsrc}
                      title={val.title}
                      description={val.description}
                  />
                })
            }
                </div>
                </div>
                </div>
                
            </div>
           </div> 
        
        </div>
    
          
        </>
    )
}
export default Skills;