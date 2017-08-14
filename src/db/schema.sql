DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;

\c bookstore;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150),
  author VARCHAR(150),
  genre VARCHAR(150),
  pages INTEGER,
  publisher VARCHAR(150)
);
