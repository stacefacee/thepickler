import {Component} from 'react';
import {Route} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../Sass/Main.scss';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData'; 



class Main extends Component {

  
  


  render(){
   


    return (
      
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <ImageSlider slides={SliderData}/>
      
      <div>
        <Button variant="outlined" size="large"  className="shop-button" onClick={() => this.props.history.push('/products')} ><strong>SHOP</strong></Button>
      </div>
      </div>
    )
  }
}


export default Main;