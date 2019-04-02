const mongoose = require('mongoose')
// const Schema = mongoose.Schema

let transactionSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member'
  },
  in_date: Date,
  out_date: Date,
  due_date: Date,
  fine: {
    type: Number,

  },
  booklist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

transactionSchema.post('save', function(doc) {
  let delta = doc.in_date - doc.due_date
  if(delta > 0) {
    delta = Math.ceil(delta/(1000*60*60*24)) * 1000
    doc.fine = delta
    doc.save()
    // console.log(delta)
    // console.log('denda')
  } else {
    // console.log(delta)
  }
})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction