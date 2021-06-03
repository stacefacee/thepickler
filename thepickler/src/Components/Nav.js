import { Component } from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';

class Nav extends Component {
  constructor(){
    super()


  }


  render(){
    return(

      
      <div className ="navbar">
        <div className ="navlinks">
          <Link to= '/'>Home</Link>
          <Link to= '/Auth'>Login</Link>
          <Link to='/Cart'>Cart</Link>
        </div>
        <div className="logo">
          
        </div>
      </div>
    )
  }
}


export default withRouter(Nav);