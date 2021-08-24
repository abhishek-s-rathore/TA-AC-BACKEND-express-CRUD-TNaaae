const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, match: /@/ },
    age: { type: Number },
    address: { type: String },
    bio: { type: String, maxlength: 200 },
    hobbies: [String],
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
