const route = require('express').Router()
const {ControllerBook} = require('../controllers/index')
const {ControllerMember} = require('../controllers/index')
const {ControllerTransaction} = require('../controllers/index')

route.get('/books', ControllerBook.findAll)
route.post('/books', ControllerBook.create)
route.put('/books/:id', ControllerBook.update)
route.delete('/books/:id', ControllerBook.delete)

route.get('/members', ControllerMember.findAll)
route.post('/members', ControllerMember.create)
route.put('/members/:id', ControllerMember.update)
route.delete('/members/:id', ControllerMember.delete)

route.get('/transactions', ControllerTransaction.findAll)
route.post('/transactions', ControllerTransaction.create)
route.put('/transactions/:id', ControllerTransaction.update)
route.delete('/transactions/:id', ControllerTransaction.delete)

route.get('/*', (req, res) => {
  res.status(404).json({message: 'Not Found :('})
})

module.exports = route