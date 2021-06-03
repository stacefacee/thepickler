DROP TABLE IF EXISTS products_carts_junction;
DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
email VARCHAR(100),
password VARCHAR(100),
admin BOOLEAN default false,
);

CREATE TABLE products (
product_id SERIAL PRIMARY KEY,
product_name VARCHAR(200),
product_description VARCHAR(200),
product_image VARCHAR (2000),
product_price MONEY
);

CREATE TABLE carts (
  cart_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  active BOOLEAN
);

CREATE TABLE products_carts_junction(
products_cart_id SERIAL PRIMARY KEY,
cart_id INT REFERENCES carts (cart_id),
product_id INT REFERENCES products (product_id),
quantity INT
);

INSERT INTO products 
(product_name, product_description, product_image, product_price)
VALUES
('portable net', 'Vulvan portable net', 'https://pickleballtown.com/wp-content/uploads/2020/03/netpb1_600x_crop_center.jpg', 100.00),
('kinetic paddle', 'kickass paddle', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApOE5pOy8pXm2F6RE_SwY-385MNRDSDNLog&usqp=CAU', 150.00),
('sweatband watch', 'sweatband', 'https://i.pinimg.com/originals/31/6e/c9/316ec96f69da4e890f521252b829ce66.jpg', 25.00),
('pickleballs', 'DURA fast 40 balls, pack of 12', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVCTLrvu8QGsPV3yQWe3n73ZAjD7MjrAgDg&usqp=CAU', 10.00);