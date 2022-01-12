-- Page 52 Activities

CREATE TABLE master32.great_names (
employee_id INT PRIMARY KEY,
name VARCHAR(60)
);

DROP TABLE master32.great_names 

INSERT INTO master32.great_names (employee_id, name)
VALUES 
	(1, 'James'),
	(2, 'Donna'),
	(3, 'Peter'),
	(4, 'Joe'),
	(5, 'Neil');
	

SELECT * FROM master32.great_names gn ;

DELETE FROM master32.great_names 
WHERE employee_id = 1;


-- recreate the table with a 3 cols

CREATE TABLE master32.great_names (
employee_id INT PRIMARY KEY,
name VARCHAR(60),
great_name_ind CHAR(1)
);

INSERT INTO master32.great_names (employee_id, name, great_name_ind)
VALUES 
	(1, 'James', 'Y'),
	(2, 'Donna', 'Y'),
	(3, 'Peter', 'Y'),
	(4, 'Joe', 'Y'),
	(5, 'Neil', 'Y');

UPDATE master32.great_names
SET great_name_ind = 'N'
WHERE employee_id = 2;


-- Page 77 Activities

SELECT * FROM master32.laptop_detail ld
INNER JOIN master32.current_job_detail cjd 
ON ld.laptop_id = cjd.laptop_id ;


SELECT * FROM master32.laptop_detail ld
INNER JOIN master32.current_job_detail cjd 
ON ld.laptop_id = cjd.laptop_id
WHERE ld.os ='Mac';

-- Where employee was an apprentice dev but now dev
SELECT * FROM master32.jobs_history jh 
INNER JOIN master32.current_job_detail cjd 
ON jh.employee_id = cjd.employee_id 
WHERE jh.job_title = 'Apprentice Developer' AND 
	cjd.job_title = 'Developer';

-- Where employee was NOT an apprentice dev but now dev
SELECT * FROM master32.jobs_history jh 
INNER JOIN master32.current_job_detail cjd 
ON jh.employee_id = cjd.employee_id 
WHERE jh.job_title != 'Apprentice Developer' AND 
	cjd.job_title = 'Developer';


-- Return a table of all the employees that have had more then one job
-- title (not using aggregates) 

SELECT DISTINCT jh.employee_id FROM master32.jobs_history jh 
INNER JOIN master32.current_job_detail cjd 
ON jh.employee_id = cjd.employee_id 
WHERE jh.job_title NOT IN (cjd.job_title);



-- Page 91 Activities

-- Max salary by job type
SELECT job_title, MAX(salary) AS 'Max Salary'
FROM master32.current_job_detail
GROUP BY job_title;

-- People by OS
SELECT os, COUNT(*) AS 'count' 
FROM master32.current_job_detail cjd 
INNER JOIN master32.laptop_detail ld 
ON cjd.laptop_id = ld.laptop_id
GROUP BY os 


-- Avg salary of employees who have been an apprentice developer
SELECT AVG(salary) AS 'Avg Salary'
FROM master32.current_job_detail cjd 
INNER JOIN master32.jobs_history jh 
ON cjd.employee_id = jh.employee_id 
WHERE jh.job_title = 'Apprentice Developer';


-- Extension 1 - Person with the highest salary
SELECT * FROM employee_detail ed 
INNER JOIN master32.current_job_detail cjd 
ON ed.Employee_ID = cjd.employee_id 
WHERE salary = (SELECT MAX(salary) FROM master32.current_job_detail)





