-- Tuesday Activities - Page 91

-- 1 Max salary by job type
SELECT job_title AS 'Job Type' , MAX(salary) AS 'Max Salary'
FROM master32.current_job_detail
GROUP BY job_title; 

-- 2 People by OS
SELECT os AS 'OS', COUNT(*) AS 'Count' 
FROM master32.current_job_detail cjd 
INNER JOIN master32.laptop_detail ld 
ON cjd.laptop_id = ld.laptop_id
GROUP BY os 


-- 3 Avg salary of employees who have been an apprentice developer
SELECT AVG(salary) AS 'Avg Salary'
FROM master32.current_job_detail cjd 
INNER JOIN master32.jobs_history jh 
ON cjd.employee_id = jh.employee_id 
WHERE jh.job_title = 'Apprentice Developer';


-- Extension 

-- 1 Person with the highest salary
SELECT * 
FROM employee_detail ed 
INNER JOIN master32.current_job_detail cjd 
ON ed.Employee_ID = cjd.employee_id 
WHERE salary = (SELECT MAX(salary) FROM master32.current_job_detail);

-- Highest salary by job type

SELECT cjd.job_title AS 'Job Title', MAX(salary) AS 'Highest Salary'
FROM master32.current_job_detail cjd 
GROUP BY cjd.job_title;



