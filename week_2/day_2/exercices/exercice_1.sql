--  exercice 1 :
select * from items
ORDER BY price ASC

select * FROM items
where price >= 80
ORDER BY price desc

ALTER Table users
RENAME TO customers

select * FROM customers
FETCH FIRST 3 ROWS ONLY OFFSET 2;

ALTER table customers
RENAME COLUMN firstname to first_name

ALTER table customers
RENAME COLUMN lastname to last_name

select first_name, lastname from customers
ORDER BY first_name
LIMIT 3

SELECT last_name from customers
ORDER BY last_name DESC

-- Exercie 2 :

SELECT * from customer

SELECT first_name, last_name from customer

SELECT DISTINCT create_date FROM customer

SELECT * FROM customer ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate

SELECT a.address, a.phone
FROM customer c
JOIN address a ON c.address_id = a.address_id
WHERE a.district = 'Texas'

-- select * from address
-- where district = 'Texas'

SELECT * FROM film
WHERE film_id IN (15, 150)

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE '%Harry%';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'Ha%';

SELECT * FROM film
ORDER BY rental_rate
LIMIT 10

SELECT * FROM film
ORDER BY rental_rate
FETCH FIRST 10 ROWS ONLY OFFSET 2;

SELECT c.customer_id,c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id

SELECT f.film_id, f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL

SELECT c.city_id, c.city, co.country
FROM city c
JOIN country co ON  c.country_id = co.country_id
ORDER BY co.country_id

select DISTINCT city, country_id from city
ORDER BY country_id

SELECT 
c.customer_id, 
c.first_name AS customer_first_name, 
c.last_name AS customer_last_name,
p.amount, 
p.payment_date, 
s.staff_id,
s.first_name AS staff_first_name,
s.last_name AS staff_last_name
FROM customer c
INNER JOIN payment p ON p.customer_id = c.customer_id
INNER JOIN staff s ON s.staff_id = p.staff_id
ORDER BY s.staff_id

SELECT 
    s.staff_id,
    s.first_name AS staff_first_name,
    s.last_name AS staff_last_name,
    c.customer_id,
    c.first_name AS customer_first_name,
    c.last_name AS customer_last_name,
    p.amount,
    p.payment_date
FROM staff s
JOIN payment p ON s.staff_id = p.staff_id
JOIN customer c ON p.customer_id = c.customer_id
ORDER BY s.staff_id, p.payment_date;
