import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

const authRouter = express.Router()
authRouter.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(12)
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass
    })

    const user = await newUser.save()
    return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

// Login
authRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if(!user) return res.status(404).json("User not found")
    const validate = await bcrypt.compare(req.body.password, user.password)
    if(!validate) return res.status(400).json("Wrong password")
    const { password, ...others } = user._doc
    return res.status(200).json(others)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

export default authRouter