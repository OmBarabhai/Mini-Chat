const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 50
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: /^[0-9]{10,15}$/ // basic validation for 10–15 digit phone numbers
  }
}, {
  timestamps: true // adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model("Contact", contactSchema);
