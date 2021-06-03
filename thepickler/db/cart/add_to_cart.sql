INSERT INTO products_carts_junction
(cart_id, product_id, quantity)
VALUES
($1, $2, 1);

SELECT * FROM products_carts_junction pc
JOIN products p ON pc.product_id = p.product_id
WHERE pc.cart_id = $1
ORDER BY pc.product_id;