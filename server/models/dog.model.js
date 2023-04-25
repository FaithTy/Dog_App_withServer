const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: {
    type: String
  },
  // breed_Id: {
  //   type: Number
  // },
  counterLikes: {
    type: Number
  },
  counterDisLikes: {
    type: Number
  }
  // timestamps: true,
})

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog