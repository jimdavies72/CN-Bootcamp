-- Tuesday Activities - Page 77 Activities

-- 1 Join on laptop_detailand current_job_detail
SELECT * FROM master32.laptop_detail ld
INNER JOIN master32.current_job_detail cjd 
ON ld.laptop_id = cjd.laptop_id ;

-- 2 Only employees that own a Mac
SELECT * FROM master32.laptop_detail ld
INNER JOIN master32.current_job_detail cjd 
ON ld.laptop_id = cjd.laptop_id
WHERE ld.os ='Mac';

-- 3 Where employee was an apprentice dev but now dev
SELECT jh.employee_id AS 'Employee ID',
	jh.job_title AS 'Previous Job Title',
	cjd.job_title AS 'Current Job Title'
FROM master32.jobs_history jh 
INNER JOIN master32.current_job_detail cjd 
ON jh.employee_id = cjd.employee_id 
WHERE jh.job_title = 'Apprentice Developer' AND 
	cjd.job_title = 'Developer';

-- 4 Where employee was NOT an  dev but now dev
-- ??? Not sure about this one
SELECT jh.employee_id,
	cjd.job_title AS 'Current Job',
	jh.job_title AS 'Previous Job'
FROM master32.jobs_history jh 
INNER JOIN master32.current_job_detail cjd 
ON jh.employee_id = cjd.employee_id 
WHERE cjd.job_title = 'Developer' AND jh.job_title != "Developer"
ORDER BY jh.employee_id; 

-- Extension 

-- Return a table of all the employees that have had more then one job
-- title (not using aggregates) 
SELECT DISTINCT jh.employee_id FROM master32.jobs_history jh 
INNER JOIN master32.current_job_detail cjd 
ON jh.employee_id = cjd.employee_id 
WHERE jh.job_title NOT IN (cjd.job_title);
