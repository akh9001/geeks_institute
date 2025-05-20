--  Exercice 1 :
Select * 
from language

-- 2- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT f.title AS "film title", f.description, l.name AS "language name"
FROM film f
LEFT JOIN language l ON f.language_id = l.language_id

SELECT f.title AS "film title", f.description, l.name AS "language name"
FROM film f
RIGHT JOIN language l ON f.language_id = l.language_id

-- 4- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
)

INSERT INTO new_film (id, name) 
VALUES
(1, 'Inception'),
(2, 'The Matrix'),
(3, 'Interstellar'),
(4, 'Parasite'),
(5, 'The Dark Knight');

select * FROM