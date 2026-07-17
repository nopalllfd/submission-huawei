#1
INSERT INTO employees
(name, position, join_date, years_of_experience, salary)
VALUES
(
    'Albert',
    'Engineer',
    '2024-01-24',
    2.5,
    50
);

#2
UPDATE employees
SET salary = 85
WHERE position = 'Engineer';

#3
SELECT 
    SUM(salary) AS total_salary_2021
FROM employees
WHERE 
    (join_date <= '2021-12-31' AND join_date => '2021-01-01')
    AND (
        release_date IS NULL 
        OR release_date >= '2021-01-01'
    );

#4
SELECT *
FROM employees
ORDER BY years_of_experience DESC
LIMIT 3;

#5
SELECT *
FROM employees
WHERE id IN (
    SELECT id
    FROM employees
    WHERE position = 'Engineer'
    AND years_of_experience <= 3
);