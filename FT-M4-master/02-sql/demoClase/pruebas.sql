CREATE TABLE personajes
(
    id serial PRIMARY KEY,
    name varchar(30) NOT NULL,
    status varchar(10),
    location integer REFERENCES locations(id) 
);

CREATE TABLE locations
(
    id serial PRIMARY KEY,
    name varchar(30) NOT NULL UNIQUE
);

id es el nombre de la columna
serial es el tipo de dato
PRIMARY KEY estamos indicando que este campo es la clave primaria, por lo tanto es única y nunca puede ser nula/faltar/estar vacía.
varchar(30) tipo de dato string de 30 caracteres como máximo.
NOT NULL este campo no puede estar vacío.
integer es tipo de dato entero (número)
REFERENCES es una restricción donde la locación es una FOREIGN KEY que apunta al id de una instancia de locación de la tabla locations

CONSTRAINT de SQL son restricciones para cada campo.

CREATE TABLE customers (
	customer_id serial PRIMARY KEY,
	customer_name varchar(30),
	city varchar(50)
);


CREATE TABLE orders (
	order_id serial PRIMARY KEY,
	customer_id integer REFERENCES customers(customer_id),
	orden_date DATE,
	total_amount numeric(10,2)
);

SELECT orders.order_id, orders.orden_date, orders.total_amount, customers.customer_name
FROM orders JOIN customers ON orders.customer_id = customers.customer_id;

SELECT c.customer_name, o.orden_date, o.total_amount
FROM orders as o
JOIN customers as c ON o.customer_id = c.customer_id
ORDER BY o.total_amount DESC;

SELECT *
FROM orders
WHERE customer_id IN (
    SELECT customer_id
    FROM customers
    WHERE city = 'Brasilia'
);