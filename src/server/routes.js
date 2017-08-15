const router = require('express').Router()
const booksDb = require('../db/queries')

router.get('/', (req, res) => {
  booksDb.getBooks()
    .then( books => res.render('home', { books }) )
    .catch( err => console.log('err', err) )
})

router.get('/books/delete/:id', (req, res) => {
  const id = req.params.id
  booksDb.deleteBook(id)
    .then( book => {
      if (book) return res.redirect('/')
    })
    .catch( err => console.log('err', err) )
})

router.get('/books/search', (req, res) => {
  const query = req.query.q
  booksDb.search(query)
    .then( (books) => {
      if (books) return res.render('index', { query, books })
    })
    .catch( err => console.log('err', err) )
})


module.exports = router
