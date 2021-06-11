import axios from 'axios';
import {useState, useEffect} from 'react';
import {setCartItems} from '../redux/cartReducer';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import '../Sass/Products.scss'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom';



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
    return (
    <div  className= "products">
        {product.product_name}<br></br>
        {product.product_description}<br></br>
        {product.product_price}<br></br>
        <img id= "product-image" src={product.product_image} /><br></br>
        <IconButton className='add-to-cart' onClick={()=> addToCart(product.product_id)}>
          <AddShoppingCartIcon />
        </IconButton>
      
    </div>)
  })
  
  
  return(


<div>
  {mapProducts}


  <div className ="to-cart">
          <Link to='/Cart'>View Cart&gt;&gt; </Link>
  
</div>
</div>

  )




}

export default connect(null, {setCartItems})(Products);