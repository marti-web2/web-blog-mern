import express from 'express'
import User from '../models/User.js'
import Post from '../models/Post.js'

const postRouter = express.Router()

// Create a new post
postRouter.post("/", async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    return res.status(200).json(savedPost)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

// Update a post


// Delete a post


// Get a post

export default postRouter