-- Sort all students by last name
SELECT first_name, last_name, birth_date
FROM students
ORDER BY last_name;

-- Fetch the youngest student
SELECT first_name, last_name, birth_date
FROM students
ORDER BY birth_date DESC
LIMIT 1;

-- Fetch 3 students, skipping the first 2
SELECT *
FROM students
ORDER BY id
LIMIT 3 OFFSET 2;
