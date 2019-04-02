const mongoose = require('mongoose')
let memberSchema = new mongoose.Schema({
  name: String,
  address: String,
  zipcode: String,
  email: {
    type: String,
    match: [/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, 'Email invalid'],
    validate: {
      validator: function () {
        return Member.find()
          .then(data => {
            data = data.filter(item => item.email === this.email)
            return data.length < 1
          })
      },
      message: 'Email has been taken.'
    }
  },
  phone: {
    type: String,
    minlength: [11, 'Number invalid, not long enough.'],
    maxlength: [13, 'Number invalid, number too long.']
  }
})

let Member = mongoose.model('Member', memberSchema)


module.exports = Member