-- Extended Activity 2 - INNER JOIN

SELECT 
employee_detail.Employee_ID, 
Name, 
job_title, 
salary 
FROM master32.employee_detail
INNER JOIN current_job_detail
ON employee_detail.Employee_ID = current_job_detail.employee_id 