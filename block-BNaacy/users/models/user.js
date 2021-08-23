const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, lowercase: true, match: /@/ },
    age: { type: Number, default: 18 },
  },
  { timestamps: true }
);

let User = mongoose.model('User', userSchema);

module.exports = User;
