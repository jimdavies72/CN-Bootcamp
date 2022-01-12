-- Monday Activities

-- Activity 2 (see extension activity 2 below)
SELECT * FROM master32.current_job_detail
WHERE job_title = 'Tech Lead';

-- Activity 3
SELECT * FROM master32.employee_detail
WHERE gender = 'F';

-- Activity 4
SELECT * FROM master32.employee_detail
WHERE Name LIKE 'S%';

-- Activity 5
SELECT DISTINCT employee_id FROM master32.jobs_history
WHERE job_title LIKE '%evel%'
ORDER BY employee_id;

-- Activity 6
SELECT laptop_id FROM master32.laptop_detail
WHERE os = 'Ubuntu';

-- Extension Activity 1
SELECT * from master32.employee_detail
WHERE Name LIKE 'A%'
OR Name LIKE 'S%'

-- Extension Activity 2
SELECT 
	employee_detail.Employee_ID, 
	Name, 
	job_title, 
	salary 
FROM master32.employee_detail
INNER JOIN master32.current_job_detail
ON employee_detail.Employee_ID = current_job_detail.employee_id 
WHERE job_title = 'Tech Lead';


