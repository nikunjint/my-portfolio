import { height } from 'dom-helpers';
import React from 'react'
import { NavLink } from 'react-router-dom';
import nikunj from "../src/images/nikunj.jpg"
import Project from './Project';
import { Nav } from 'react-bootstrap';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const About = () => {

    
    
    return (
        <>
        <section className="bio">
        <div className="container">
        <div className="row" style={{height:500}}>
        <div className="col-md-6  profile " style={{height:500}}>
        <img src={nikunj}/>

        </div>
        <div className="col-md-6  " style={{height:500}}>
             <div className="info my-5 mx-5 text-center">
          <h1 style={{textAlign:"center", marginTop:100}}>Hello I'm <span style={{color:"orangered"}}>NIKUNJ BASNET</span></h1>
          <p  style={{textAlign:"center",fontSize:17}}>Hello! its me Nikunj Basnet and I'm a self taught front-end developer from Nepal. I have completed my Bachelor's degree from Prithvi Narayan Campus in Computer Science and Information Technology.When i was a kid ,I was passionate with different types of  technologies and gadgets.I was passionate to learn different codings and programming languages. You can view my projects by clicking the projects button. </p>
           <div className="button">
           <Nav.Link href="/project" to="/Project" className="nav_link" style={{backgroundColor:"orange",width:100,marginLeft:200}}>Projects</Nav.Link>
            </div>
            </div>
            
        </div>
 </div>

        </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto text-center my-3">
            <h1>Get in <span style={{color:"orangered"}}>Touch</span> In <span>Social Media</span></h1>
            <div className="social my-5">
            <a href="https://www.youtube.com/channel/UCjXjL2vrD4eE3XNDdNAAl9w"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="3x" />
</a>
<a href="https://www.facebook.com/nikunz/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="3x" />
</a>

<a href="https://www.instagram.com/nick.kunz/"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="3x" />
</a>

              
            </div>
          </div>
        </div>
        </div>
    
  );


            
        </>
    )
}
export default About;