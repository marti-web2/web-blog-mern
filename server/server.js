import express from 'express'
import colors from 'colors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json({ extended: false }))
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.underline.bold)
    process.exit(1)
  }
}

  connectDB()
  app.listen(PORT, () => console.info(`Server running on port ${PORT}`.bgCyan.underline.bold))
