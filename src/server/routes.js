const router = require('express').Router()
const booksDb = require('../db/queries')

router.get('/', (req, res) => {
  booksDb.getAllBooks()
    .then( books => res.render('home', { books }) )
    .catch( err => console.log('err', err) )
})

router.get('/books/new', (req, res) => res.render('new') )

router.get('/books/:id', (req, res) => {
  const id = req.params.id
  booksDb.getBookById(id)
    .then( book => res.render('details', { book }) )
    .catch( err => console.log('err', err) )
})

router.post('/books', (req, res) => {
  booksDb.createBook(req.body)
    .then( book => res.redirect(`/books/${book.id}`) )
    .catch( err => console.log('err', err) )
})

router.get('/books/delete/:id', (req, res) => {
  const id = req.params.id
  booksDb.deleteBook(id)
    .then( book => res.redirect('/') )
    .catch( err => console.log('err', err) )
})

router.get('/books/search', (req, res) => {
  const query = req.query.q
  console.log(query);
  booksDb.search(query)
    .then( (books) => res.render('home', { query, books }) )
    .catch( err => console.log('err', err) )
})


module.exports = router
