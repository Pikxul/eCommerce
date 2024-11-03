import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

//app config
const app = express()
const port = process.env.PORT
connectDB()
connectCloudinary()

//middlewares
app.use(cors())
app.use(express.json())

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
    res.send("API IS UNDER PROCESS!");
})

app.listen(port, ()=>console.log(`http://localhost:${port}`))