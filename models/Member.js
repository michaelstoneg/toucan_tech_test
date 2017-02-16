const mongoose = require('mongoose');

var MemberSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  school: { type: String },
  picture: { type: String }
});

module.exports = mongoose.model('Member', MemberSchema);
