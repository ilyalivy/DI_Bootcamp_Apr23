-- CREATE TABLE actor (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL,
-- 	date_birth DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL DEFAULT 0
-- )

-- SELECT * FROM actor

-- SELECT first_name, last_name FROM actor

-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES ('George', 'Clooney', '1976-03-12', 2)

-- SELECT * FROM actor

-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES 
-- ('Brad', 'Pitt', '1980-04-22', 1),
-- ('Matt', 'Damon', '1982-11-22', 2)

-- SELECT first_name, last_name FROM actor

-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Jessica', 'Chastain', '1982-04-22', 1)

-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES 
-- ('Bradley', 'Cooper', '1982-04-22', 1),
-- ('Salma', 'Hayek', '1975-11-22', 2)

-- SELECT * FROM actor

-- SELECT * FROM actor WHERE EXTRACT(YEAR from date_birth) >= 1982

-- SELECT * FROM actor WHERE first_name ILIKE '%S%'

-- UPDATE actor
-- SET last_name = 'Clooney'
-- WHERE actor_id = 1
-- RETURNING *



-- DELETE FROM actor
-- WHERE actor_id = 4

-- SELECT * FROM actor LIMIT 4
-- SELECT * FROM actor ORDER BY last_name DESC LIMIT 4
-- SELECT * FROM actor WHERE first_name LIKE '%e%'
-- SELECT * FROM actor WHERE number_oscars >= 2

-- UPDATE actor SET first_name = 'Maty' WHERE first_name = 'Matt'
-- RETURNING *
-- UPDATE actor SET number_oscars = 4 WHERE first_name = 'George'
-- RETURNING *
-- ALTER TABLE actor RENAME COLUMN date_birth TO birth_date;
-- SELECT * FROM actor
-- DELETE FROM actor 
-- WHERE actor_id = 14
-- RETURNING *

-- CREATE TABLE items (
-- 	items_id SERIAL PRIMARY KEY,
-- 	items VARCHAR(100) NOT NULL,
-- 	price INT NOT NULL
-- )

-- CREATE TABLE customers (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL
-- )





----------DAILY CHALLENGE----------





-- Instructions

-- In this exercise we will be using the actors table from todays lesson. 
-- 1. Count how many actors are in the table.
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

-- SELECT COUNT(*) AS actor_count FROM actor
-- INSERT INTO actor (first_name, last_name, birth_date, number_oscars) 
-- VALUES ('', '', '2000-01-01', 1)

-- SELECT * FROM actor
