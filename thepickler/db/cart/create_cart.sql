INSERT INTO carts 
(user_id, active)
VALUES
($1, true)
RETURNING cart_id;