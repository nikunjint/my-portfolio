import { height } from 'dom-helpers';
import React from 'react'

export const Home = () => {
    return (
        <>
            <div className="container bg " >
            <div className="row">
            <div className="col-12 mx-auto ">
            <div className="row">
            <div className="myself">
            
                  <img src="./images/nick.png" style={{objectFit:"cover", height:400,marginLeft:300,marginBottom:200,justifyContent:'center'}} />
                  <h1 className="animated" style={{marginLeft:300,marginTop:-200,width:580,fontSize:50}}>"HY I'M <span style={{color:"orangered"}}>NIKUNJ BASNET </span>,AND I"M A <span style={{color:"orangered"}}>REACT JS DEVELOPER</span></h1>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default Home;