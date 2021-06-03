const bcrypt = require('bcryptjs');
module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const {email, password} = req.body
    const [checkUser] = await db.users.get_user_by_email(email)
    if(checkUser){
      return res.status(409).send("Pickler is already registered.")
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const [user] = await db.users.create_user(email, hash)
    delete user.password
    req.session.user = user
    const [cart] = await db.cart.create_cart(user.user_id)
    req.session.user.cart_id = cart.cart_id
    return res.status(200).send(req.session.user)
  },

  login: async (req,res) => {
    const db = req.app.get('db')
    const {email, password} = req.body
    const [user] = await db.users.get_user_by_email(email)
    if (!user){
      return res.status(401).send("Pickler not found.")
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password)
    if(!isAuthenticated){
      return res.status(403).send("Incorrect Password.")
    }
    delete user.password
    req.session.user = user
    const [cart] = await db.cart.get_cart(user.user_id)
    req.session.user.cart_id = cart.cart_id
    return res.status(200).send(req.session.user)
  },

  logout: (req, res) => {
    if(!req.session.user){
      return res.status(404).send("Pickler not found.")
    }
    return res.status(200).send(req.session.user)
  },

  getUser: (req, res) => {
    if(!req.session.user){
      return res.status(404).send ("Pickler not found.")
    }
    return res.status(200).send(req.session.user)
  }

}