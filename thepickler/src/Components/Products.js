import axios from 'axios';
import {useState, useEffect} from 'react';
import {setCartItems} from '../redux/cartReducer';
import {connect} from 'react-redux';



function Products(props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products')
    .then(res => setProducts(res.data))
  }, [])

 const addToCart = (product_id) => {
   axios.post(`/api/cart/${product_id}`)
   .then(res => props.setCartItems(res.data))

  }
  
  
console.log(products)
  const mapProducts = products.map((product) => {
    return (<div>
      {product.product_name}
      {product.product_description}
      {product.product_price}
      <img src={product.product_image} />
      <button className='add-to-cart' onClick={()=> addToCart(product.product_id)}>add to cart</button>
    </div>)
  })
  
  
  return(


<div>
  {mapProducts}
  
</div>

  )




}

export default connect(null, {setCartItems})(Products);