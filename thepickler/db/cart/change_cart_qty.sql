UPDATE products_carts_junction
SET quantity = $3
WHERE products_cart_id = $2;
SELECT * FROM products_carts_junction pc
JOIN products p ON pc.product_id = p.product_id
WHERE pc.cart_id = $1
ORDER BY pc.product_id;