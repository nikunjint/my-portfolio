import React from 'react'
import { Button,Navbar,Form,FormControl,Nav,NavDropdown} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../src/images/logo.png';

export const Naavbar = () => {
    return (
        <>
        <div className="container ">
            <div className="row">
            <div className="col-12 mx-auto navbar  ">
            <div className="col-3 mx-auto logo  ">
            <h1 style={{paddingTop:5,fontFamily:"cursive"}}>Nikunj <span style={{color:"orangered"}}>Basnet</span></h1>
            
            </div>
            <div className="col-md-9  mx-auto dropdown  ">
    <Nav className="me-auto m-lg-2  mb-lg-2  ml-auto 
    menu " >
      <Nav.Link href="/" to="/home"className="nav_link">Home</Nav.Link>
      <Nav.Link href="/about" to="/aboutme" className="nav_link">About Me</Nav.Link>
      <Nav.Link href="/contact" className="nav_link">Contact Me</Nav.Link>
      <Nav.Link href="/skills" to="/skills" className="nav_link">Skills</Nav.Link>
    </Nav>
    </div>
</div>
</div>
</div>
        </>
    )
}
export default Naavbar;