import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import colors from "colors"

// @desc    Register a user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
    res.send("Register a user")
}

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
    res.send("Login a user")
}

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getProfile = async (req, res) => {
    res.send("Get profile")
}

export { registerUser, loginUser, getProfile }