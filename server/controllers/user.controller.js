const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
require("dotenv").config();
var mongoose = require("mongoose");
import { ObjectId } from "mongodb";
// @desc    Register new user
// @route   POST /api/users/add
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const user = req.body;

  if (!user.name || !user.email || !user.password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email: user.email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  // Create user
  const userResponse = await User.create(user);

  if (userResponse) {
    res.status(201).json({
      _id: userResponse.id,
      screen_name: userResponse.screen_name,
      name: userResponse.name,
      email: userResponse.email,
      token: generateToken(userResponse._id), // generate JWT
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// 2 methods: edit user theme -- pass theme and ID
// getUserTheme -- pass ID returns theme

export const editTheme = asyncHandler(async(req, res) => {
  const user = req.body;
  // console.log(user)
  const id = user["id"];
  const theme = user["theme"];
  
  console.log(id)

  let objectId = new ObjectId(id);
  let filter = {
    _id: objectId
  }
  let update = { 
    theme: theme 
  }

  const response = await User.findOneAndUpdate(filter, update, { new: true });

  if (response) {
    res.status(201).json({
      user: response
    })
  } else {
    res.status(400);
    throw new Error("Theme not updated");
  }
});

// const id = user["id"] -- findOneAndUpdate
export const editUser = asyncHandler(async (req, res) => {
  const user = req.body;
  delete user["token"];
  delete user["password"];
  let id = req.body._id;
  console.log("ID : " + id);

  let objectId = new ObjectId(id);
  console.log("Object : " + objectId);
  let filter = {
    _id: objectId,
  };

  const userResponse = await User.findOneAndUpdate(filter, theme, { new: true });

  if (userResponse) {
    userResponse["token"] = generateToken(userResponse._id);
    console.log("Updated User: " + userResponse);
    res.status(201).json({
      name: userResponse,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      screen_name: user.screen_name,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), //generate JWT
      dateOfBirth: user.dateOfBirth,
      createdAt: user.createdAt,
      description: user.description,
      url: user.url,
      protected: user.protected,
      followers_count: user.followers_count,
      friends_count: user.friends_count,
      listed_count: user.listed_count,
      favorites_count: user.favorites_count,
      verified: user.verified,
      statuses_count: user.statuses_count,
      profile_banner_id: user.profile_banner_id,
      profile_banner: user.profile_banner,
      profile_image_id: user.profile_image_id,
      profile_image: user.profile_image,
      theme: user.theme
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});


// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, config.JWT_SECRET, {
    expiresIn: "30 days",
  });
};
