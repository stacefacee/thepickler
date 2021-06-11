import { Component } from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import logo from '../logo.png';
import '../Sass/Nav.scss';




class Nav extends Component {
  constructor(){
    super()


  }


  render(){
    return(
      
      
     <div className ="nav-bar">
        <style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@300&display=swap');
  </style>
       
       
        <img id= 'logo' src={logo}></img>
        
      
      <div className= "nav-links">   
         <li> <Link to= '/'>Home</Link> </li>
         <li><Link to='/Products'>Shop</Link></li>
        <li> <Link to= '/Auth'>Login</Link> </li>
          <li> <Link to='/Cart'>Cart</Link> </li>
          <li> <Link to= '/Contact'>Contact Us </Link></li>

          

       
         
      
          </div>
      </div>
    )
  }
}


export default withRouter(Nav);