\c bookstore;

COPY books (title, author, genre, pages, publisher) FROM '/Users/ryankent/Desktop/LG/phase3-bookstore/src/db/bookdata.csv' DELIMITER ',' CSV HEADER
