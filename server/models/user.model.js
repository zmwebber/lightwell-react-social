import { Media } from "./media.model";
const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a first and last name"],
  },
  screen_name: {
    type: String,
    required: [true, "Please add a handle"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  dateOfBirth: Date,
  createdAt: Date,
  description: String,
  url: String,
  protected: Boolean,
  followers_count: Number,
  friends_count: Number,
  listed_count: Number,
  favorites_count: Number,
  verified: Boolean,
  statuses_count: Number,
  profile_banner_id: String,
  profile_banner: Media | null,
  profile_image_id: String,
  profile_image: Media | null,
  theme: String
});

module.exports = mongoose.model("Users", userSchema);
