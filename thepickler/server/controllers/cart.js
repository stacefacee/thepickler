module.exports = {
  getCart: (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session
    if(!user){
      return res.status(511).send('Pickler not logged in.')
    }
    db.cart.get_cart_items(user.cart_id).then(cart => {
      res.status(200).send(cart)
    }).catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  },

  addToCart: (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session
    const {product_id} = req.params
    if(!user){
      return res.status(511).send('Pickler not logged in.')
    }
  db.cart.add_to_cart(user.cart_id, product_id)
  .then((cart) => {
    res.status(200).send(cart)
  }).catch(err => {
    console.log(err)
    res.status(500).send(err)
  })
  },

  deleteFromCart: (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session
    const {products_cart_id} = req.params
    if(!user){
      return res.status(511).send('Pickler not logged in.')
    }
    db.cart.delete_from_cart(products_cart_id, user.cart_id)
    .then((cart) => {
      res.status(200).send(cart)
    }).catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  },

  changeCartQty: (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session
    const {products_cart_id} = req.params
    const {quantity} = req.body
    if(!user) {
      return res.status(511).send('Pickler not logged in.')
    }
    db.cart.change_cart_qty(user.cart_id, products_cart_id, quantity)
    .then((cartItems) => {
      res.status(200).send(cartItems)
    }).catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

}