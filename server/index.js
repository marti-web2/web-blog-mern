import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'

dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('MongoDB connected'))

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})