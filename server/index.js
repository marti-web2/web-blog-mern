import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import postRoute from './routes/posts.js'
import CategoryRoute from './routes/categories.js'
import multer from 'multer'

dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('MongoDB connected'))
.catch(err => console.log(err))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", CategoryRoute)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})