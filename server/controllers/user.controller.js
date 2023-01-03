const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')
import mongoose from 'mongoose';
// @desc    Register new user
// @route   POST /api/users/add
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const user = req.body

  if (!user.name|| !user.email || !user.password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ email: user.email })  

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(user.password, salt)
  user.password = hashedPassword;
  // Create user
  const userResponse = await User.create(user)

  if (userResponse) {
    res.status(201).json({
      _id: userResponse.id,
      name: userResponse.name,
      email: userResponse.email,
      //token: generateToken(userResponse._id), // generate JWT
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      //token: generateToken(user._id), //generate JWT
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

