/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT * FROM movies WHERE duration < 90';

const ejercicio03 = 'SELECT * FROM movies WHERE year >= 1930 AND year <= 1940'; //or WHERE year BETWEEN 1930 AND 1940

const ejercicio04 = 'SELECT * FROM movies WHERE title LIKE '%til%'';

const ejercicio05 = 'SELECT *, ARRAY_LENGTH(actors, 1) FROM movies WHERE ARRAY_LENGTH(actors, 1) = 1';
//'SELECT * FROM movies WHERE ARRAY_LENGTH(actors, 1) = 1'
//'SELECT * FROM movies WHERE cardinality(actors) = 1'

const ejercicio06 = 'SELECT title, (SELECT AVG(r) FROM UNNEST(ratings) as r) as rating FROM movies';
//'SELECT title, AVG(rating) FROM movies, UNNEST(ratings) rating GROUP BY title'

const ejercicio07 = 'SELECT actors FROM movies WHERE (title LIKE '%Fast and%' AND year = 2016)';

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
