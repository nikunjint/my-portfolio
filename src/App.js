
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import  About  from './About.js';
import  Contact  from './Contact.js';
import Home from './Home.js';
import  Skills  from './Skills.js';
import  Naavbar  from './Naavbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap/dist/css/bootstrap.css';
import Project from './Project.js';

 const App = () => {
  return (
    <>
    <Naavbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/skills" component={Skills}/>
      <Route exact path="/project" component={Project}/>
      
      <Redirect to="./"/>
      
    </Switch>
     
    </>
  )
}
export default App;