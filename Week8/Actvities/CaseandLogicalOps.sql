
-- Create new orders table
CREATE TABLE master32.Orders (
order_id INT PRIMARY KEY,
description VARCHAR(60),
quantity INT
);

-- Insert 5 orders
INSERT INTO master32.Orders (order_id, description, quantity)
VALUES 
	(1, 'IPhone X', 10),
	(2, 'Samsung 22s', 30),
	(3, 'Nokia 8210', 100),
	(4, 'Honor 10 Lite', 50),
	(5, 'Xiaomi Redmi 9', 70);
	

-- Select Case function
SELECT order_id, description, quantity,
CASE
    WHEN quantity > 50 THEN "Quantity is greater than 50"
    WHEN quantity = 50 THEN "Quantity is equal to 50"
    ELSE "Quantity is under 50"
END
FROM Orders;


-- Logical Operators

SELECT order_id, description, quantity,
CASE
    WHEN quantity > 50 AND quantity < 71 THEN "Quantity is greater than 50 but less than 71"
    WHEN quantity = 50 OR quantity < 50 THEN "Quantity is equal to or less than 50"
    ELSE "Quantity must be great than 71"
END
FROM Orders;

