const { Member } = require('../models')
const ObjectID = require('mongodb').ObjectID

class ControllerMember {
  static findAll(req, res) {
    Member.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  static create(req, res) {
    let input = req.body
    let newMember = {
      name: input.name,
      address: input.address,
      zipcode: input.zipcode,
      email: input.email,
      phone: input.phone
    }
    Member.create(newMember)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => { res.status(500).json(err) })
  }
  static update(req, res) {
    let input = req.body
    let updatedMember = {
      name: input.name,
      address: input.address,
      zipcode: input.zipcode,
      email: input.email,
      phone: input.phone
    }
    Member.updateOne({_id:ObjectID(req.params.id)}, updatedMember)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
  static delete(req, res) {
    // console.log(req.params.id)
    Member.deleteOne({_id:ObjectID(req.params.id)})
    .then(data=> {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}
module.exports = ControllerMember