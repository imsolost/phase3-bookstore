const db = require('./db')

const getBooks = () => {
  return db.query(`SELECT * FROM books`, [])
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
  getBooks,
  deleteBook,
  search
}
