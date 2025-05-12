-- 🎬 Create the Hollywood database
CREATE DATABASE Hollywood;

-- 🔁 Connect to the Hollywood database
\c Hollywood

-- 👑 Grant privileges to user 'root' (assuming 'root' exists and has access)
GRANT ALL PRIVILEGES ON DATABASE Hollywood TO root;

-- 🎭 Create the actors table
CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    age DATE NOT NULL,
    number_oscars SMALLINT
);

-- 📊 Count actors (initially 0)
SELECT COUNT(*) FROM actors;

-- 🎬 Insert actors data
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
    ('Matt', 'Damon', '1970-10-08', 5),
    ('George', 'Clooney', '1961-05-06', 2),
    (NULL, NULL, '1999-05-06', NULL);  -- This will fail due to NOT NULL constraints
