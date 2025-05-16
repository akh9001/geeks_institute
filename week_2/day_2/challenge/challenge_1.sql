SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- Output: 0
-- Explanation: The subquery returns NULL, and comparing anything with NULL makes the whole condition UNKNOWN (not true), so no rows match.

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- Output: 2
-- Explanation: Subquery returns (5), so this filters out only rows with id = 5. Rows with id = 6 and 7 match.

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- Output: 0
-- Explanation: The subquery returns (5, NULL), and presence of NULL makes the whole `NOT IN` condition UNKNOWN for every row.

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- Output: 2
-- Explanation: Subquery returns (5), so it filters out only id = 5. Rows with id = 6 and 7 match. NULL is ignored in comparison.
