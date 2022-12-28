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
postRouter.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
          $set: req.body
        }, { new: true })
        return res.status(200).json(updatedPost)
      } catch (err) {
        return res.status(500).json({ error: err.message })
      }
    } else {
      return res.status(401).json("You can only update your own posts!")
    }
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

// Delete a post
postRouter.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.username === req.body.username) {
      try {
        await post.delete()
        return res.status(200).json("Post has been deleted")
      } catch (err) {
        return res.status(500).json({ error: err.message })
      }
    } else {
      return res.status(401).json("You can only delete your own posts!")
    }
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

// Get a post
postRouter.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    return res.status(200).json(post)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

// Get all posts
postRouter.get("/", async (req, res) => {
  const username = req.query.user
  const category = req.query.category
  try {
    let posts
    if (username) {
      posts = await Post.find({ username })
    } else if (category) {
      posts = await Post.find({ categories: {
        $in: [category]
      }})
    } else {
      posts = await Post.find()
    }
    return res.status(200).json(posts)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

export default postRouter