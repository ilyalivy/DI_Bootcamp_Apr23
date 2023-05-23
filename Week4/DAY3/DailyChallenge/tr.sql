-- Instructions

-- You are going to practice tables relationships

-- Part I

-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

-- CREATE TABLE customer (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE customer_profile (
-- 	id SERIAL PRIMARY KEY,
-- 	isLoggedIN BOOLEAN DEFAULT false,
-- 	customer_id INT UNIQUE REFERENCES customer(id)
-- )



-- Insert those customers

-- John, Doe
-- Jerome, Lalu
-- Lea, Rive

-- INSERT INTO customer (first_name, last_name)
-- VALUES 
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lalu'),
-- 	('Lea', 'Rive')



-- Insert those customer profiles, use subqueries

-- John is loggedIn
-- Jerome is not logged in

-- INSERT INTO customer_profile (isLoggedIN, customer_id)
-- VALUES
-- 	(true, (SELECT id FROM customer WHERE first_name = 'John')),
-- 	(false, (SELECT id FROM customer WHERE first_name = 'Jerome'))



-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers

-- SELECT first_name FROM customer
-- INNER JOIN customer_profile ON customer.id = customer_id
-- WHERE isLoggedIn = true



-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

-- SELECT first_name, isLoggedIN FROM customer
-- LEFT JOIN customer_profile ON customer.id = customer_id



-- The number of customers that are not LoggedIn

-- SELECT COUNT(*) AS num_customers_not_loggedin
-- FROM customer
-- LEFT JOIN customer_profile ON customer.id = customer_id
-- WHERE customer_profile.isLoggedIn = false OR customer_profile.isLoggedIn IS NULL