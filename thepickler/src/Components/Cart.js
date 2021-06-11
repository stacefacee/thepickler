import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import { useEffect} from 'react';
import {setCartItems} from '../redux/cartReducer';
import '../Sass/Cart.scss'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


function Cart(props){
  //const [cart, setCartItems] = useState([])

  useEffect(() => {
    getCartItems()
  }, [])

  const getCartItems = () => {
    axios.get('/api/cart')
    .then(res => props.setCartItems(res.data))
  }

  const deleteFromCart = (products_cart_id) => {
    axios.delete(`/api/cart/${products_cart_id}`)
    .then(res => props.setCartItems(res.data))
}

const changeCartQty = (products_cart_id, quantity) => {
  if (quantity > 0){
    axios.put(`/api/cart/${products_cart_id}`, {quantity})
  .then (res => props.setCartItems(res.data))}
}

console.log(props.cartReducer.cart)
 const productsTotal = props.cartReducer.cart.reduce((acc, product) => acc + (product.quantity * +product.product_price.substring(1)), 0 );
const productsTax = productsTotal * 0.08;
const shippingPrice = productsTotal > 200 ? 0 : 7;
const totalPrice = productsTotal + productsTax + shippingPrice



  console.log(props)
  
  const mapProducts = props.cartReducer.cart.map((product) => {
    return (<div className= "products">
      {product.product_name}<br></br>
      {product.product_description}<br></br>
      {product.product_price}<br></br>
      <img id="product-image"src={product.product_image} /><br></br>
      
    
      <Button size="small"  className ='increase-qty' onClick= {()=> changeCartQty(product.products_cart_id, product.quantity+1)}>+</Button>
      
      { product.quantity }
      
      <Button size="small" className = 'decrease-qty' onClick={()=> changeCartQty(product.products_cart_id, product.quantity-1)}>-</Button>
      <br></br>
      <IconButton className= 'delete-from-cart' onClick={()=> deleteFromCart(product.products_cart_id)}><DeleteIcon fontSize="medium"/></IconButton>
     
    </div>)
  })
  

  return(
    <div className= 'cart'>
  
      <Link to= '/Products'>&lt;&lt; Back to shop</Link>
    
    
    
      {mapProducts}
      <br></br>
      <br></br>
      <img  id= "old-lady" src="https://i.pinimg.com/474x/57/81/2e/57812e1cb872b862e1aee53014d11fdf.jpg" />
      
      <div class ="column" className='total'> 
      SubTotal ${productsTotal} + Tax ${productsTax.toFixed(2)} + Shipping ${shippingPrice} =
      ${totalPrice}

     

      </div>
     
      </div>
     
  )
}









function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {setCartItems})(Cart);