-- Tuesday Activities - Page 52 Activities

-- Create a table with 2 columns
CREATE TABLE master32.great_names (
employee_id INT PRIMARY KEY,
name VARCHAR(60)
);

DROP TABLE master32.great_names 

-- Insert 5 employees
INSERT INTO master32.great_names (employee_id, name)
VALUES 
	(1, 'James'),
	(2, 'Donna'),
	(3, 'Peter'),
	(4, 'Joe'),
	(5, 'Neil');
	

SELECT * FROM master32.great_names gn ;

-- Delete 1 employee by employee_id
DELETE FROM master32.great_names 
WHERE employee_id = 1;


-- Extension

-- recreate the table with a 3 cols

-- Method 1 drop the table and recreate the table....
CREATE TABLE master32.great_names (
employee_id INT PRIMARY KEY,
name VARCHAR(60),
great_name_ind CHAR(1)
);

-- Insert 5 employees
INSERT INTO master32.great_names (employee_id, name, great_name_ind)
VALUES 
	(1, 'James', 'Y'),
	(2, 'Donna', 'Y'),
	(3, 'Peter', 'Y'),
	(4, 'Joe', 'Y'),
	(5, 'Neil', 'Y');

-- Method 2 - run an alter on the existing table to add the new column
ALTER TABLE master32.great_names
ADD great_name_ind CHAR(1)
AFTER name;

-- update the new column with data
UPDATE master32.great_names
SET great_name_ind = 'Y'


-- Change one of the rows
UPDATE master32.great_names
SET great_name_ind = 'N'
WHERE employee_id = 2;
