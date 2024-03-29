import asyncHandler from 'express-async-handler'
import bcrypt from  'bcryptjs'
import jwt from  'jsonwebtoken'

import {Stuuser} from '../models/userModel.js'

// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  /*const { 
name,
email,
mobile,
village,
state,
pin,
math,
phys,
chem,
eng,
ben,
hin ,
cat,
} = req.body*/

/*  // Validation
  if (!name || !email) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  // Find if user already exists
  const userExists = await Stuuser.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  //const salt = await bcrypt.genSalt(10)
  //const hashedPassword = await bcrypt.hash(password, salt)
*/
  // Create user
  const data=req.body
  const user = await Stuuser.create(data

 /* {
    name,
email,
mobile,
village,
state,
pin,
math,
phys,
chem,
eng,
ben,
hin,
cat,

  }*/)
  if(user){
    console.log("user created")
  }

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new error('Invalid user data')
  }
  
})

// @desc    Login a user
// @route   /api/users/login
// @access  Public
/*
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  // Check user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid credentials')
  }
})
*/
// @desc    Get current user
// @route   /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
const user=await Stuuser.aggregate([{'$match':{$and:[{math:{$gt:'70'}},{phys:{$gt:'70'}}]}}]).sort({math:-1})
 /* const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    mobile:req.user.mobile
  }*/

  res.status(200).json(user)
}
  )

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}



export {registerUser,getMe};