import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import {setCartItems} from '../redux/cartReducer';


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

  console.log(props)
  
  const mapProducts = props.cartReducer.cart.map((product) => {
    return (<div>
      {product.product_name}
      {product.product_description}
      {product.product_price}
      <img src={product.product_image} />
      {product.quantity}
      <button className= 'delete-from-cart' onClick={()=> deleteFromCart(product.products_cart_id)}>Delete</button>
      <button className ='increase-qty' onClick= {()=> changeCartQty(product.products_cart_id, product.quantity+1)}>+</button>
      <button className = 'decrease-qty' onClick={()=> changeCartQty(product.products_cart_id, product.quantity-1)}>-</button>
    </div>)
  })
  

  return(
    <div className= 'products'>
    <div className= 'link-to-shop'>
      <Link to= '/Products'> Back to shop</Link>
    </div>
    
    <div className= 'display-products'>
      {mapProducts}
      </div>
      </div>
  )
}









function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {setCartItems})(Cart);