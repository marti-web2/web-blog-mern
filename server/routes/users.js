import express from 'express'
import User from '../models/User.js'
import Post from '../models/Post.js'
import bcrypt from 'bcrypt'

const userRouter = express.Router()

// Update
userRouter.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(12)
      req.body.password = await bcrypt.hash(req.body.password, salt)
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true })
      return res.status(200).json(updatedUser)
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  } else {
    return res.status(401).json("You can only update your own account!")
  }
})

// Login
userRouter.post("/login", async (req, res) => {
  try {

  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

// Delete
userRouter.delete("/:id", async (req, res) => {
  const { userId, isAdmin } = req.body
  const { id: userIdToDelete } = req.params

  if (userId !== userIdToDelete && !isAdmin) {
    return res.status(401).json("You can only delete your own account!")
  }

  try {
    const user = await User.findById(userIdToDelete)
    await Post.deleteMany({ username: user.username })
    await User.findByIdAndDelete(userIdToDelete);
    return res.status(200).json("User has been deleted")
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

// Get User
userRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})


export default userRouter