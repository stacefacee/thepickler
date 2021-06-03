const express = require('express'),
      userCtrl = require('./controllers/auth'),
      productCtrl = require('./controllers/products'),
      cartCtrl = require('./controllers/cart');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;

const app = express();

app.use(express.json())
app.use (session ({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000*60*60*24*365}
}));

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  console.log("database connected successfully")
  app.listen(SERVER_PORT, () => {
    console.log(`server is listening on ${SERVER_PORT}`);
  })
}).catch(err => console.log(err));

app.post('/auth/register', userCtrl.register);
app.post('/auth/login', userCtrl.login);
app.get('/auth/account', userCtrl.getUser);
app.post('/auth/logout', userCtrl.logout);

app.get('/api/cart', cartCtrl.getCart);
app.post('/api/cart/:product_id', cartCtrl.addToCart);
app.delete('/api/cart/:products_cart_id', cartCtrl.deleteFromCart);
app.put('/api/cart/:products_cart_id', cartCtrl.changeCartQty);

app.get('/api/products', productCtrl.getProducts);