-- Create the 'bootcamp' database
CREATE DATABASE bootcamp;

-- Connect to the database (you may need to do this manually or via \c in psql)
-- \c bootcamp

-- Create the 'students' table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,               -- Auto-incrementing ID
    last_name VARCHAR(100) NOT NULL,     -- Last name
    first_name VARCHAR(100) NOT NULL,    -- First name
    birth_date DATE NOT NULL             -- Date of birth
);

-- Insert student records (corrected syntax: missing closing parenthesis and comma)
INSERT INTO students (first_name, last_name, birth_date) VALUES
    ('Marc', 'Benichou', '1998-11-02'),
    ('Yoan', 'Cohen', '2010-12-03'),
    ('Lea', 'Benichou', '1987-07-27'),
    ('Amelia', 'Dux', '1996-04-07'),
    ('David', 'Grez', '2003-06-14'),
    ('Omer', 'Simpson', '1980-10-03'),
    ('Asmaa', 'Khalidy', '1995-05-18');

-- Fetch all student records
SELECT * FROM students;

-- Fetch only first and last names
SELECT first_name, last_name FROM students;

-- Fetch a student by ID
SELECT first_name, last_name FROM students WHERE id = 2;

-- ❌ This query has a typo: "fisrt_name" should be "first_name"
-- Corrected:
SELECT first_name, last_name 
FROM students 
WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch students with last name 'Benichou' OR first name 'Marc'
SELECT first_name, last_name 
FROM students 
WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Students whose first_name contains the letter 'a'
SELECT first_name, last_name 
FROM students 
WHERE first_name ILIKE '%a%';

-- Students whose first_name starts with the letter 'a'
SELECT first_name, last_name 
FROM students 
WHERE first_name ILIKE 'a%';

-- Students whose second-to-last letter in first_name is 'a'
SELECT first_name, last_name 
FROM students 
WHERE SUBSTRING(first_name FROM LENGTH(first_name) - 1 FOR 1) ILIKE 'a';

SELECT first_name, last_name
FROM students
WHERE id = 3 OR id = 1;

SELECT *
FROM students
WHERE birth_date >= '2000-01-01';
