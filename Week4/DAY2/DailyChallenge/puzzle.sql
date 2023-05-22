-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)

-- SELECT * FROM SecondTab


-- Questions

-- Q1. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL ) -- 0 // NOT IN (NULL) is NULL

-- Q1. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 ) -- 2 // NOT IN 5

-- Q1. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab ) -- 0 // NOT IN (NULL) is NULL

-- Q1. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL ) -- 2 // NOT IN 5