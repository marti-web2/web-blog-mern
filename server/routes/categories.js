import express from 'express'
import Category from '../models/Category.js'

const categoriesRouter = express.Router()

// Create a new category
categoriesRouter.post("/", async (req, res) => {
  const newCategory = new Category(req.body)
  try {
    const savedCategory = await newCategory.save()
    return res.status(200).json(savedCategory)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

// Get all categories
categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.find()
    return res.status(200).json(categories)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

export default categoriesRouter