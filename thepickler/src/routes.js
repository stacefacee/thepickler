import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth';
import Cart from './Components/Cart';
import Nav from './Components/Nav';
import Products from './Components/Products';
import Main from './Components/Main';
import Contact from './Components/Contact';

export default (
  <Switch>
 <Route path = '/auth' component = {Auth} />
 <Route path = '/cart' component = {Cart} />
 <Route path = '/products' component = {Products} />
 <Route exact path = '/' component = {Main} />
 <Route path = '/contact' component ={Contact} />

  </Switch>
)