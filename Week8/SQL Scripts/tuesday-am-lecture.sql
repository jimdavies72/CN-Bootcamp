-- CREATE TABLE master32.my_fav_employees (
-- 	employee_id INT PRIMARY KEY,
-- 	job_title VARCHAR(64)
-- );
-- 
-- 
-- INSERT INTO master32.my_fav_employees
-- 	SELECT employee_id, job_title FROM master32.current_job_detail
-- 	WHERE employee_id IN (1001, 1002);
-- 
-- 
-- SELECT employee_id, job_title FROM master32.current_job_detail
-- WHERE employee_id IN (1001, 1002);
-- 
-- 
-- SELECT employee_id, job_title FROM master32.current_job_detail
-- WHERE employee_id BETWEEN 1001 AND 1010;
-- 
-- 
-- SELECT * FROM master32.my_fav_employees;
-- 
-- 
-- INSERT INTO master32.my_fav_employees (employee_id, job_title)
-- VALUES (1003, 'Developer')
-- 
-- 
-- DELETE FROM master32.my_fav_employees WHERE	employee_id = 1003;


-- DROP TABLE master32.my_fav_employees;


-- SELECT * FROM master32.current_job_detail cjd 
-- INNER JOIN master32.employee_detail ed 
-- ON cjd.employee_id = ed.Employee_ID 


-- Aggregate functions

SELECT MAX(salary) AS maxSalary FROM master32.current_job_detail;
SELECT MIN(salary) AS minSalary FROM master32.current_job_detail;


-- MAX MIN AVG SUM
SELECT job_title, MAX(salary)
FROM master32.current_job_detail
GROUP BY job_title;

-- Count
SELECT count(Employee_ID) AS myCount FROM master32.employee_detail ed 
WHERE gender = 'F'


SELECT job_title, COUNT(*) AS jobCount
FROM master32.current_job_detail cjd 
GROUP BY job_title;

