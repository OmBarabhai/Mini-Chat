const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
    trim: true
  },
  to: {
    type: String,
    required: true,
    trim: true
  },
  msg: {
    type: String,
    required: true,
    maxLength: 200,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date.now  // ✅ Automatically sets time when created
  }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
