import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

const router = express.Router()
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if(req.body.password) {
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
router.post("/login", async (req, res) => {
  try {

  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

export default router