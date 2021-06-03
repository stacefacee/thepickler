DELETE FROM products_carts_junction
WHERE products_cart_id = $1;
SELECT * FROM products_carts_junction pc
JOIN products p ON pc.product_id = p.product_id 
WHERE pc.cart_id = $2
ORDER BY pc.product_id;