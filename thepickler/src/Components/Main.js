import {Component} from 'react';
import {Route} from 'react-router-dom';





class Main extends Component {
  


  render(){


    return (

      <div>
        <button className="shop-button" onClick={() => this.props.history.push('/products')} >Shop</button>
      </div>
    )
  }
}


export default Main;