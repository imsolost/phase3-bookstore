const db = require('./db')

const getAllBooks = () => {
  return db.query(`SELECT * FROM books`, [])
    .catch(error => error)
}

const getBookById = (id) => {
  return db.one(`SELECT * FROM books WHERE id = $1`, [id])
    .catch(error => error)
}

const createBook = (book) => {
  return db.one(`
    INSERT INTO
      books (title, author, genre, pages, publisher)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING
      *
    `,
    [book.title, book.author, book.genre, book.pages, book.publisher])
    .catch(error => error)
}

const deleteBook = (id) => {
  return db.query(`DELETE FROM books WHERE id = $1`, [id])
    .catch(error => error)
}

const search = (input) => {
  return db.query(`SELECT  * FROM books WHERE lower(title || ' ' || author) LIKE $1`, [`%${input.toLowerCase().replace(/\s+/,'%')}%`])
    .catch(error => error)
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  deleteBook,
  search
}
