const { Transaction } = require('../models')
const ObjectID = require('mongodb').ObjectID

class ControllerTransaction {
  static findAll(req, res) {
    Transaction.find()
      .populate('booklist')
      .populate('member')
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  static create(req, res) {
    let input = req.body
    let newTransaction = {
      member: input.member,
      in_date: input.in_date,
      out_date: input.out_date,
      due_date: input.due_date,
      fine: input.fine,
      booklist: input.booklist
    }
    Transaction.create(newTransaction)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => { res.status(500).json(err) })
  }
  static update(req, res) {
    let input = req.body
    let updatedTransaction = {
      in_date: input.in_date,
      out_date: input.out_date,
      due_date: input.due_date,
      fine: input.fine,
      booklist: input.booklist
    }
    Transaction.updateOne({ _id: ObjectID(req.params.id) }, updatedTransaction)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  static delete(req, res) {
    Transaction.deleteOne({ _id: ObjectID(req.params.id) })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}
module.exports = ControllerTransaction