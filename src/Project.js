import { height } from 'dom-helpers';
import React from 'react';
import theme from '../src/images/theme.PNG'
import ecommerce from '../src/images/ecommerce.png'
import todo from '../src/images/todo.gif'

export const Project=()=> {
  
  
    return (<> 
    <div className="container">
        <div className="row">
            <div className="col-md-6 mx-auto image" style={{height:300}}>
                  <img src={theme}></img>
            </div>
            <div className="col-md-6 mx-auto my-4 p-5 "style={{height:300}}>
                <p style={{fontSize:20}}> I made my theme page by using React.js.ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a robust developer community.It consists of diffrent types of states and lots of hooks and redux.I made this page using state management which is used for fetching Api</p>
                </div>
                <div className="col-md-6 mx-auto image" style={{height:300}}>
                  <img src={ecommerce}></img>
            </div>
            <div className="col-md-6 mx-auto my-4 p-5 "style={{height:300}}>
                <p style={{fontSize:20}}> I made my ecommerce page by using React.js.ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a robust developer community.It consists of diffrent types of states and lots of hooks and redux.I made this page using state management which is used for fetching Api</p>
                </div>
                <div className="col-md-6 mx-auto image" style={{height:300}}>
                  <img src={todo}></img>
            </div>
            <div className="col-md-6 mx-auto my-4 p-5 "style={{height:300}}>
                <p style={{fontSize:20}}> I made my theme page by using React.js.ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a robust developer community.It consists of diffrent types of states and lots of hooks and redux.I made this page using state management which is used for fetching Api</p>
                </div>
                
                
        </div>
    </div>
    </>
        );
  

}

export default Project;