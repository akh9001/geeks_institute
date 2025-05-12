
-- 🔐 1. Create a New User
CREATE USER root WITH PASSWORD 'root';

-- 🗃️ 2. Create Databases & Grant Privileges
CREATE DATABASE public;

GRANT ALL PRIVILEGES ON DATABASE public TO root;

-- 📦 3. Create `items` Table and Insert Data
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

INSERT INTO items (name, price)
VALUES 
    ('Small Desk', 100.00),
    ('Large Desk', 300.00),
    ('Fan', 80.00);

-- 👤 4. Create `users` Table and Insert Data
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (firstname, lastname)
VALUES
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');

-- 🔍 5. Query Data

-- 📋 View All Items
SELECT * FROM items;

-- 💰 Items with Price Filters
SELECT * FROM items WHERE price > 80;
SELECT * FROM items WHERE price <= 300;

-- 👥 User Filters
SELECT * FROM users WHERE lastname = 'Smith';
SELECT * FROM users WHERE lastname = 'Jones';
SELECT * FROM users WHERE firstname != 'Scott';
