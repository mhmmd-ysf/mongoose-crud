const { Book } = require('../models')
const ObjectID = require('mongodb').ObjectID

class ControllerBook {
  static findAll(req, res) {
    Book.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  static find(req, res) {
    console.log(req.query)
  }
  static create(req, res) {
    let input = req.body
    let newBook = {
      isbn: input.isbn,
      title: input.title,
      author: input.author,
      category: input.category,
      stock: Number(input.stock)
    }
    Book.create(newBook)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => { res.status(500).json(err) })
  }
  static update(req, res) {
    let input = req.body
    let updatedBook = {
      isbn: input.isbn,
      title: input.title,
      author: input.author,
      category: input.category,
      stock: Number(input.stock)
    }
    Book.updateOne({_id:ObjectID(req.params.id)}, updatedBook)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
  static delete(req, res) {
    console.log(req.params.id)
    Book.deleteOne({_id:ObjectID(req.params.id)})
    .then(data=> {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}
module.exports = ControllerBook