import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL
const app = express()

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('MongoDB connected'))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})