const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, default: 'Izzy' },
  lastName: { type: String, default: 'Ironside' },
  username: String,
  encryptedPassword: String,
  provider: String,
  providerId: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
