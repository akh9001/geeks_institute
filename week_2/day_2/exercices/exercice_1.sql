-- ==============================================
-- 🚀 EXERCISE 1: TABLE MODIFICATIONS & BASIC QUERIES
-- ==============================================

-- 🔧 Altering the 'users' table
ALTER TABLE users
RENAME TO customers;

-- 🔧 Renaming columns in 'customers'
ALTER TABLE customers
RENAME COLUMN firstname TO first_name;

ALTER TABLE customers
RENAME COLUMN lastname TO last_name;

-- 📋 Selecting all items ordered by price (ascending)
SELECT * FROM items
ORDER BY price ASC;

-- 📋 Selecting items with price >= 80, ordered descending
SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;

-- 📋 Fetching rows with offset and limit
SELECT * FROM customers
FETCH FIRST 3 ROWS ONLY OFFSET 2;

-- 📋 Selecting top 3 customer names ordered by first name
SELECT first_name, last_name FROM customers
ORDER BY first_name
LIMIT 3;

-- 📋 Selecting last names ordered by last name descending
SELECT last_name FROM customers
ORDER BY last_name DESC;


-- ==============================================
-- 🎬 EXERCISE 2: CUSTOMER, FILM, AND PAYMENT DATA
-- ==============================================

-- 👤 Customer table queries
SELECT * FROM customer;

SELECT first_name, last_name FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer
ORDER BY first_name DESC;


-- 🎥 Film-related queries
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate;

-- 🔍 Searching for a specific film
SELECT * FROM film
WHERE film_id IN (15, 150);

-- 🔍 Searching films by title (case-insensitive)
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE '%Harry%';

-- 🔍 Films starting with 'Ha'
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'Ha%';

-- 🎞️ Top 10 films ordered by rental rate
SELECT * FROM film
ORDER BY rental_rate
LIMIT 10;

-- 🎞️ Top 10 films with offset
SELECT * FROM film
ORDER BY rental_rate
FETCH FIRST 10 ROWS ONLY OFFSET 2;


-- 🧾 Payment data and customer details
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

-- 💳 Payment with staff details (customer-focused)
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
ORDER BY s.staff_id;

-- 💳 Payment with staff details (staff-focused)
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


-- 🗂️ Inventory: films not in inventory
SELECT f.film_id, f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;


-- 🌍 Address and location data
-- Customers in Texas district
SELECT a.address, a.phone
FROM customer c
JOIN address a ON c.address_id = a.address_id
WHERE a.district = 'Texas';

-- Cities and countries
SELECT c.city_id, c.city, co.country
FROM city c
JOIN country co ON c.country_id = co.country_id
ORDER BY co.country_id;

-- Distinct cities by country
SELECT DISTINCT city, country_id FROM city
ORDER BY country_id;

-- Optional debug (commented)
-- SELECT * FROM address WHERE district = 'Texas';
