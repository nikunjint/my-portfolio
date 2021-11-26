import React from 'react';
import { useState } from 'react';
import contact from "../src/images/contact.png"

export const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        message:"",
    });
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]:value
            };

        });

    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Your name ${data.fullname} and phone number ${data.phone} and message ${data.message} has been submitted`);
    }

   
    return (
        <>
           <div className="my-5">
               <h1 className="text-center">ANY <span style={{color:"orangered"}}>QUESTIONS</span></h1>
           </div>
           <div className="container contact_div">
               <div className="row">
               <div className="col-md-5 contact">
                       <img src={contact} ></img>
               </div>
               <div className="col-md-7 col-10 mx-auto ">
               <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id=""
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
     placeholder="enter your name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone number</label>
    <input type="" class="form-control" id="" 
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">E-mail</label>
    <input type="email" class="form-control" id=""
    name="email"
    value={data.email}
    onChange={InputEvent}
     placeholder=""/>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" 
    name="message"
    value={data.message}
    onChange={InputEvent}
    rows="6"></textarea>
  </div>
  <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
               </div>

               </div>
           </div>
        </>
    )
}
export default Contact;